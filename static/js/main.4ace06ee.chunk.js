(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{116:function(e,t,a){e.exports=a(163)},131:function(e,t,a){"use strict";var n,r=a(132),o=(a(140),a(18)),c=[];function s(e,t,a){o.ajax({url:"https://api.vk.com/method/"+e,method:"POST",data:l(t)}).done((function(e){console.log(e),a(JSON.parse(e||"{}"))})).fail((function(e){}))}function i(e,t){o.ajax(e).done((function(e){t(e)})).fail((function(e){}))}function l(e){return Object.keys(e||{}).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).concat(n?"access_token="+n:"").join("&")}o.ajaxPrefilter((function(e){e.crossDomain&&o.support.cors&&(e.url="https://cors-anywhere.herokuapp.com/"+e.url)})),e.exports.setToken=function(e){return n=e,this},e.exports.serverAuth=function(e){return new r((function(a,n){i("https://oauth.vk.com/access_token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=5.1&grant_type=client_credentials".replace("CLIENT_ID",e.client_id).replace("CLIENT_SECRET",e.client_secret),(function(e){var r=JSON.parse(e||null);r.access_token?(t.setToken(r.access_token),a(r)):n(r)}))}))},e.exports.siteAuth=function(e){return new r((function(a,n){i("https://oauth.vk.com/access_token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code=CODE&redirect_uri=REDIRECT_URI".replace("CLIENT_ID",e.client_id).replace("CLIENT_SECRET",e.client_secret).replace("CODE",e.code).replace("REDIRECT_URI",e.redirect_uri),(function(e){var r=JSON.parse(e||null);r.access_token?(t.setToken(r.access_token),a(r)):n(r)}))}))},e.exports.callMethod=function(e,t){return new r((function(a,n){s(e,t,(function(e){e.response?a(e.response):n(e.error)}))}))},e.exports.appendCall=function(e,t){return new r((function(a,n){c.push({method:e,params:t,resolve:a,reject:n})}))},e.exports.execute=function(e){return new r((function(t,a){var n=c;c=[];var r={code:"return ["+n.map((function(e){return"API.METHOD(PARAMS)".replace("METHOD",e.method).replace("PARAMS",JSON.stringify(e.params)||"")})).join(",")+"];"};e&&(r.captcha_sid=e.sid,r.captcha_key=e.key),s("execute",r,(function(e){var r=0;e.response?(t(e.response),e.response.forEach((function(t,a){var o=n[a];t?o.resolve(t):o.reject(e.execute_errors[r++])}))):(a(e.error),n.forEach((function(t){t.reject(e.error)})))}))}))}},145:function(e,t){},147:function(e,t){},163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(44),c=a.n(o),s=a(29),i=a(45),l=a(46),p=a(59),u=a(58),d=a(13),m=a.n(d),h=a(2),f=a(55),g=a.n(f),E=a(56),k=a.n(E),b=a(57),x=a(18),_=a.n(x);_.a.ajaxPrefilter((function(e){e.crossDomain&&_.a.support.cors&&(e.url="https://cors-anywhere.herokuapp.com/"+e.url)}));var v="",y=((new b.VKMiniAppAPI).initApp(),a(131)),R=function(e){console.log(e),y.setToken(v),y.callMethod("users.get",{user_ids:e,v:"5.111"}).then((function(e){console.log("Success: "+JSON.stringify(e))})).catch((function(e){console.log("Fail: "+JSON.stringify(e))}))},I=a(26),w=a.n(I),A=function(){_()("#DateRegResult").slideUp("fast",(function(){var e=document.getElementById("DateRegUserId").value;console.log(e),_.a.ajax("https://vk.com/foaf.php?id="+e).done((function(e){var t=e.match(/<ya:created dc:date="([\d]{4}-[\d]{2}-[\d]{2}T[\d]{2}:[\d]{2}:[\d]{2}\+[\d]{2}:[\d]{2})"/i),a="\u0415\u0433\u0433\u043e\u0433 :\u041e";if(t){var n=t[1].split("T")[0].split("-");a="\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:<br>"+n[2]+"."+n[1]+"."+n[0]}_()("#DateRegText").html(a),_()("#DateRegResult").slideDown("fast")}))}))},C=function(e){var t=e.id,a=e.goBack,n=(e.goForward,e.user);return r.a.createElement(h.i,{id:t},r.a.createElement(h.j,{addon:r.a.createElement(h.l,{onClick:a},"\u041d\u0430\u0437\u0430\u0434"),left:r.a.createElement(h.k,{onClick:a})},"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),r.a.createElement(h.f,null,r.a.createElement(h.e,null,r.a.createElement(h.h,{top:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",id:"DateRegUserId",defaultValue:n.id}),r.a.createElement(h.b,{size:"xl",before:r.a.createElement(w.a,null),onClick:A},"\u0423\u0437\u043d\u0430\u0442\u044c"))),r.a.createElement(h.f,null,r.a.createElement(h.g,{mode:"secondary"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"),r.a.createElement(h.o,{before:r.a.createElement(h.a,{size:40,src:R("xyz")})},"\u0418\u0433\u043e\u0440\u044c \u0424\u0451\u0434\u043e\u0440\u043e\u0432"),r.a.createElement(h.o,{before:r.a.createElement(h.a,{size:40,src:R("arthurstam")})},"Artur Stambultsian")),r.a.createElement(h.d,{style:{display:"none"},id:"DateRegResult"},r.a.createElement("div",{style:{backgroundImage:"url('https://sun9-30.userapi.com/c853520/v853520560/21e5b6/xrSo_ya_iRs.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:200,display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:"6px",borderRadius:12}},r.a.createElement(h.r,{level:"1",weight:"heavy",id:"DateRegText",style:{textAlign:"center",color:"#fff",textShadow:"4px 4px 5px #000, -4px 4px 5px #000,-4px -4px 5px #000, 4px -4px 5px #000"}},n.first_name,", \u0442\u044b \u0448\u043e, \u0434\u0443\u0440\u0430\u043a \u0448\u043e\u043b\u044c!?"))))},D=function(e){var t=e.id,a=e.goBack,n=(e.goForward,e.user);return r.a.createElement(h.i,{id:t},r.a.createElement(h.j,{addon:r.a.createElement(h.l,{onClick:a},"\u041d\u0430\u0437\u0430\u0434"),left:r.a.createElement(h.k,{onClick:a})},"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),r.a.createElement(h.f,null,r.a.createElement(h.e,null,r.a.createElement(h.h,{top:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",id:"DateRegUserId",defaultValue:n.id}),r.a.createElement(h.b,{size:"xl",before:r.a.createElement(w.a,null)},"\u0423\u0437\u043d\u0430\u0442\u044c"))),r.a.createElement(h.d,{style:{display:"none"},id:"DateRegResult"},r.a.createElement("div",{style:{backgroundImage:"url('https://sun9-30.userapi.com/c853520/v853520560/21e5b6/xrSo_ya_iRs.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:200,display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:"6px",borderRadius:12}},r.a.createElement(h.r,{level:"1",weight:"heavy",id:"DateRegText",style:{textAlign:"center",color:"#fff",textShadow:"4px 4px 5px #000, -4px 4px 5px #000,-4px -4px 5px #000, 4px -4px 5px #000"}},n.first_name,", \u0442\u044b \u0448\u043e, \u0434\u0443\u0440\u0430\u043a \u0448\u043e\u043b\u044c!?"))))},T=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).goForward=function(e){var t=e.currentTarget.dataset.to,a=Object(s.a)(n.state.history);a.push(t),"main"===n.state.activePanel&&m.a.send("VKWebAppEnableSwipeBack"),n.setState({history:a,activePanel:t})},n.goBack=function(){var e=Object(s.a)(n.state.history);e.pop();var t=e[e.length-1];console.log(t),"main"===t&&m.a.send("VKWebAppDisableSwipeBack"),n.setState({history:e,activePanel:t})},n.state={activePanel:"Main",scheme:"bright_light",schemeDark:["space_gray","client_dark"],fetchedUser:{id:0,first_name:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",last_name:"",sex:0,photo_200:"https://vk.com/images/camera_100.png"},history:["Main"],popout:r.a.createElement(h.n,{size:"large"})},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppInitResult":console.log("VKWebAppInitResult");break;case"VKWebAppGetUserInfoResult":console.log("VKWebAppGetUserInfoResult"),e.setState({fetchedUser:t.detail.data}),e.setState({popout:""});break;case"VKWebAppUpdateConfig":console.log("VKWebAppUpdateConfig");var a=e.state.schemeDark.includes(t.detail.data.scheme);e.setState({scheme:a?"space_gray":"bright_light"});break;case"VKWebAppGetAuthTokenResult":case"VKWebAppAccessTokenReceived":console.log("VKWebAppGetAuthTokenResult"),n=t.detail.data.access_token,v=n,console.log("set tok");break;default:console.log(t.type),console.log(t)}var n})),m.a.send("VKWebAppInit"),m.a.send("VKWebAppGetUserInfo",{}),m.a.send("VKWebAppGetAuthToken",{app_id:7548849,scope:"friends,photos,wall,groups"})}},{key:"render",value:function(){return r.a.createElement(h.c,{scheme:this.state.scheme,isWebView:!0},r.a.createElement(h.s,{id:"View1",popout:this.state.popout,activePanel:this.state.activePanel,onSwipeBack:this.goBack,history:this.state.history},r.a.createElement(h.i,{id:"Main"},r.a.createElement(h.j,null,"byKIM"),r.a.createElement(h.f,{header:r.a.createElement(h.g,{mode:"secondary"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c")},r.a.createElement(h.m,{disabled:!0,text:r.a.createElement(h.p,{weight:"regular",style:{color:"var(--text_secondary)"}},"id"+this.state.fetchedUser.id),before:r.a.createElement(h.a,{size:72,src:this.state.fetchedUser.photo_200})},r.a.createElement(h.q,{weight:"medium"},this.state.fetchedUser.first_name+" "+this.state.fetchedUser.last_name))),r.a.createElement(h.f,{header:r.a.createElement(h.g,{mode:"secondary"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438")},r.a.createElement(h.o,{onClick:this.goForward,"data-to":"FunctionDateReg",before:r.a.createElement(g.a,null)},"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),r.a.createElement(h.o,{onClick:this.goForward,"data-to":"FunctionDeadFollowers",before:r.a.createElement(k.a,null)},"\u041c\u0435\u0440\u0442\u0432\u044b\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438"))),r.a.createElement(C,{id:"FunctionDateReg",goBack:this.goBack,goForward:this.goForward,user:this.state.fetchedUser}),r.a.createElement(D,{id:"FunctionDeadFollowers",goBack:this.goBack,goForward:this.goForward,user:this.state.fetchedUser})))}}]),a}(r.a.Component);a(162);c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.4ace06ee.chunk.js.map