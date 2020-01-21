using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Http;
using CSRedis;
using System.Security.Claims;

namespace SignalR.Distributed.Hubs
{
    public class ChatHub : Hub
    {
        /// <summary>
        /// HttpContext
        /// </summary>
        private HttpContext _httpContext => this.Context.GetHttpContext();

        /// <summary>
        /// 用户列表
        /// </summary>
        private Dictionary<string, string> _userList = new Dictionary<string, string>();

        /// <summary>
        /// IRedisClient
        /// </summary>
        private readonly IRedisClient _redisClient;

        public ChatHub(IRedisClient redisClient)
        {
            _redisClient = redisClient;
        }

        /// <summary>
        /// 用户连接
        /// </summary>
        /// <returns></returns>
        public override Task OnConnectedAsync()
        {
            var userId = _httpContext.Request.Query["UserId"][0];
            if (string.IsNullOrEmpty(userId))
                userId = Context.ConnectionId;
            var roomId = _httpContext.Request.Query["RoomId"][0];
            _userList.Add(userId, Context.ConnectionId);
            Groups.AddToGroupAsync(Context.ConnectionId, roomId);
            if (!string.IsNullOrEmpty(roomId))
            {
                var message = new
                {
                    EventTime = DateTime.Now,
                    EventType = "系统消息",
                    UserID = userId,
                    Content = $"{DateTime.Now},用户{userId}加入聊天室{roomId}"
                };
                return Clients.Group(roomId).SendAsync("UserJoined", message);
            }
            else
            {
                var message = new
                {
                    EventTime = DateTime.Now,
                    EventType = "系统消息",
                    UserID = userId,
                    Content = $"{DateTime.Now},用户{userId}加入聊天"
                };
                return Clients.All.SendAsync("UserJoined", message);
            }
        }

        /// <summary>
        /// 用户断开
        /// </summary>
        /// <param name="exception"></param>
        /// <returns></returns>
        public override Task OnDisconnectedAsync(Exception exception)
        {
            var userId = _httpContext.Request.Query["UserId"][0];
            if (string.IsNullOrEmpty(userId))
                userId = Context.ConnectionId;
            var roomId = _httpContext.Request.Query["RoomId"][0];
            _userList.Remove(userId);
            Groups.RemoveFromGroupAsync(Context.ConnectionId, roomId);
            if (!string.IsNullOrEmpty(roomId))
            {
                var message = new
                {
                    EventTime = DateTime.Now,
                    EventType = "系统消息",
                    UserID = userId,
                    Content = $"{DateTime.Now},用户{userId}退出聊天室{roomId}"
                };
                return Clients.Group(roomId).SendAsync("UserLeaved", message);
            }
            else
            {
                var message = new
                {
                    EventTime = DateTime.Now,
                    EventType = "系统消息",
                    UserID = userId,
                    Content = $"{DateTime.Now},用户{userId}退出聊天"
                };
                return Clients.All.SendAsync("UserLeaved", message);
            }
        }

        /// <summary>
        /// 向指定的人发送消息
        /// </summary>
        /// <param name="userId">用户Id</param>
        /// <param name="message">消息</param>
        /// <returns></returns>
        public Task SendTo(string userId, string message, string sendBy)
        {
            return Clients.User(userId).SendAsync("ReceiveMessage", new
            {
                EventTime = DateTime.Now,
                EventSender = sendBy,
                Content = message
            });
        }

        /// <summary>
        /// 群发消息
        /// </summary>
        /// <param name="message">消息</param>
        /// <returns></returns>
        public Task SendAll(string message, string sendBy)
        {
            return Clients.All.SendAsync("ReceiveMessage", new
            {
                EventTime = DateTime.Now,
                EventSender = sendBy,
                Content = message
            });
        }
    }
}
