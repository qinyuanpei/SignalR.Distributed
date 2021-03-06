using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SignalR.Distributed.Hubs;
using Newtonsoft.Json.Serialization;
using System.Text.Json;
using Microsoft.AspNetCore.SignalR.Redis;
using CSRedis;

namespace SignalR.Distributed
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers()
                .AddNewtonsoftJson(options =>options.SerializerSettings.ContractResolver = new DefaultContractResolver());
            services.AddSignalR()
                .AddRedis(Configuration["Redis:Url"],options => options.Configuration.ChannelPrefix = "ChatApp")
                .AddJsonProtocol(options => options.PayloadSerializerOptions.PropertyNamingPolicy = null) ;
            
            var client = new CSRedis.CSRedisClient(Configuration["Redis:Url"]);
            services.AddSingleton(typeof(CSRedisClient),client);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<ChatHub>("/ChatHub");
            });

            app.UseStaticFiles();
        }
    }
}
