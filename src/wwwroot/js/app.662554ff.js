(function(e){function s(s){for(var n,o,c=s[0],i=s[1],u=s[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(s);while(d.length)d.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,s=0;s<r.length;s++){for(var t=r[s],n=!0,c=1;c<t.length;c++){var i=t[c];0!==a[i]&&(n=!1)}n&&(r.splice(s--,1),e=o(o.s=t[0]))}return e}var n={},a={app:0},r=[];function o(s){if(n[s])return n[s].exports;var t=n[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,s,t){o.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,s){if(1&s&&(e=o(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var n in e)o.d(t,n,function(s){return e[s]}.bind(null,n));return t},o.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(s,"a",s),s},o.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=s,c=c.slice();for(var u=0;u<c.length;u++)s(c[u]);var f=i;r.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"034f":function(e,s,t){"use strict";var n=t("85ec"),a=t.n(n);a.a},4678:function(e,s,t){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var s=r(e);return t(s)}function r(e){if(!t.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[e._v(" Hi，"+e._s(e.username)+"。欢迎来到SignalR聊天室！ "),t("hr"),e._v("发送给： "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.sendTo,expression:"sendTo"}],on:{change:function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var s="_value"in e?e._value:e.value;return s}));e.sendTo=s.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"All"}},[e._v("全部")]),e._l(e.userList,(function(s){return t("option",{key:s,domProps:{value:s}},[e._v(e._s(s))])}))],2),t("hr"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{id:"text",type:"text"},domProps:{value:e.message},on:{input:function(s){s.target.composing||(e.message=s.target.value)}}}),t("button",{on:{click:e.sendMessage}},[e._v("发送消息")]),t("hr"),t("button",{on:{click:e.clearMessageList}},[e._v("清空聊天记录")]),t("hr"),t("div",{attrs:{id:"messageList"},domProps:{innerHTML:e._s(e.messageList)}},[e._v(e._s(e.messageList))])])},c=[],i=(t("c740"),t("a434"),t("d3b7"),t("25f0"),t("c1df")),u=t("e87a"),f={name:"HelloWorld",data:function(){return{sendTo:"All",message:"",username:prompt("请输入用户名",""),userList:[],messageList:null,connection:null}},mounted:function(){this.initSignalR()},methods:{initSignalR:function(){var e=this,s="/ChatHub?UserName=".concat(this.username,"&RoomId=default");this.connection=(new u.HubConnectionBuilder).withUrl(s).build(),this.connection.on("UserJoined",(function(s){var t=e.formatMessage(s.EventTime,s.EventType,s.Content);e.pushMessageList(t),e.joinUser(s.UserID)})),this.connection.on("UserLeaved",(function(s){var t=e.formatMessage(s.EventTime,s.EventType,s.Content);e.pushMessageList(t),e.leaveUser(s.UserID)})),this.connection.on("ReceiveMessage",(function(s){var t=e.formatMessage(s.EventTime,s.EventSender,s.Content);e.pushMessageList(t)})),this.connection.start().then((function(){var s=e.formatMessage(new Date,"系统消息","SignalR连接成功");e.pushMessageList(s)})).catch((function(s){var t=e.formatMessage(new Date,"系统消息",s.toString());e.pushMessageList(t)}))},sendMessage:function(){var e=this;null!=this.connection&&(null!=this.message&&""!=this.message?this.connection.invoke("SendTo",this.sendTo,this.message,this.username).then((function(){var s=e.formatMessage(new Date,e.username,e.message);e.pushMessageList(s),e.message=null})).catch((function(s){var t=e.formatMessage(new Date,"系统消息",s.tostring());e.pushMessageList(t)})):alert("不允许发送空消息"))},formatMessage:function(e,s,t){return i(e).format("YYYY-MM-DD hh:mm:ss")+" - "+s+" : "+t},clearMessageList:function(){this.messageList=null},pushMessageList:function(e){this.messageList=null==this.messageList?e:this.messageList+"<br/>"+e},joinUser:function(e){this.userList.push(e)},leaveUser:function(e){var s=this.userList.findIndex((function(s){return s==e}));-1!=s&&this.userList.splice(s,1)}}},l=f,d=t("2877"),j=Object(d["a"])(l,o,c,!1,null,null,null),b=j.exports,m={name:"app",components:{HelloWorld:b}},h=m,p=(t("034f"),Object(d["a"])(h,a,r,!1,null,null,null)),g=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,s,t){}});
//# sourceMappingURL=app.662554ff.js.map