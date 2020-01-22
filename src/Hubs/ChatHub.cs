using System;
using System.Collections.Generic;
using System.Linq;
using System.Collections;
using System.Security.Claims;
using System.Threading.Tasks;
using CSRedis;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SignalR;

namespace SignalR.Distributed.Hubs
{
    public class ChatHub : Hub
    {
        /// <summary>
        /// HttpContext
        /// </summary>
        private HttpContext _httpContext => this.Context.GetHttpContext();

        /// <summary>
        /// CSRedisClient
        /// </summary>
        private readonly CSRedisClient _redisClient = new CSRedis.CSRedisClient("127.0.0.1:6379");

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
            BindUserId(userId);
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
            UnbindUserId(userId);
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
            var connIds = GetBindedIds(userId);
            return Clients.Clients(connIds.ToList()).SendAsync("ReceiveMessage", new
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
            return Clients.Others.SendAsync("ReceiveMessage", new
            {
                EventTime = DateTime.Now,
                EventSender = sendBy,
                Content = message
            });
        }

        private void BindUserId(string userId)
        {
            var cacheKey = $"SignalR_User_{userId}";
            _redisClient.RPush(cacheKey, Context.ConnectionId);
        }

        private void UnbindUserId(string userId)
        {
            var cacheKey = $"SignalR_User_{userId}";
            var connIds = _redisClient.LRange(userId, 0, -1);
            _redisClient.RPop(userId);
            connIds.ToList().Remove(Context.ConnectionId);
            _redisClient.LPush<string>(cacheKey, connIds);
        }

        private string[] GetBindedIds(string userId)
        {
            var cacheKey = $"SignalR_User_{userId}";
            return _redisClient.LRange(cacheKey, 0, -1);
        }
    }
}