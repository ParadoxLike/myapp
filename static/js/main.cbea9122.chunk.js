(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(27),i=a.n(r),o=a(24),l=a(18),c=a(19),d=a(21),p=a(20),u=a(13),h=a.n(u),m=a(2),f=a(37),g=a.n(f),b=a(38),E=a.n(b),k=a(39),v=a(6),D=a.n(v);D.a.ajaxPrefilter((function(e){e.crossDomain&&D.a.support.cors&&(e.url="https://cors-anywhere.herokuapp.com/"+e.url)}));var R=new function e(){var t=this;Object(l.a)(this,e),this.setToken=function(e){t.access_token=e,console.log("set tok")},this.callAPI=function(e,a,n){a.access_token||(a.access_token=t.access_token),a.v||(a.v="5.111"),t.VKAppApi.callAPIMethod(e,a).then(n)},this.ending=function(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]},this.access_token="",this.AppID=7548849,this.VKAppApi=new k.VKMiniAppAPI,this.VKAppApi.initApp()},y=a(22),w=a.n(y),A=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).DateRegGetFreiends=function(e){var t=e.target.value;D()("#DateRegResult").hide(),R.callAPI("friends.search",{q:t,fields:"photo_100",count:10},(function(e){console.log(e),n.setState({DateRegUsersList:e.items})}))},n.DateRegSetUid=function(e){D()("#DateRegUserId").val(e),n.DateRegGet()},n.DateRegGet=function(){if(!D()("#DateRegButton").is(":disabled")){D()("#DateRegUserId").prop("disabled",!0),D()("#DateRegButton").prop("disabled",!0),n.setState({btnEnabled:!1}),n.setState({DateRegUsersList:[]}),n.setState({result:"\u0415\u0433\u0433\u043e\u0433 :\u041e"});var e=function(){D()("#DateRegResult").slideDown("fast",(function(){D()("#DateRegUserId").prop("disabled",!1),D()("#DateRegButton").prop("disabled",!1),n.setState({btnEnabled:!0})}))},t=function(t){D.a.ajax("https://vk.com/foaf.php?id="+t).done((function(t){var a=t.match(/<ya:created dc:date="([\d]{4}-[\d]{2}-[\d]{2}T[\d]{2}:[\d]{2}:[\d]{2}\+[\d]{2}:[\d]{2})"/i),s=t.match(/<foaf:name>(.+)<\/foaf:name>/i);if(a&&s){var r=a[1].split("T")[0].split("-");n.setState({result:"["+s[1]+"]<br>\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:<br>"+r[2]+"."+r[1]+"."+r[0]})}return e()}))};D()("#DateRegResult").fadeOut("fast",(function(){var a=D()("#DateRegUserId").val().trim(),s="";/^(-?\d+)$/.test(a)?t(a):(s=a.replace(/(https?:\/\/)?(vk\.com)?\/?/i),R.callAPI("utils.resolveScreenName",{screen_name:s},(function(a){if("user"!==a.type)return n.setState({result:n.state.result+"<br>\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0435 \u0432\u0435\u0440\u043d\u0430\u044f"}),e();t(a.object_id)})))}))}},n.state={DateRegUsersList:[],btnEnabled:!0},n.DateRegGetFreiends({target:{value:""}}),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(m.j,{id:this.props.id},s.a.createElement(m.k,{addon:s.a.createElement(m.m,{onClick:this.props.goBack},"\u041d\u0430\u0437\u0430\u0434"),left:s.a.createElement(m.l,{onClick:this.props.goBack})},"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),s.a.createElement(m.f,null,s.a.createElement(m.e,null,s.a.createElement(m.i,{top:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f / \u041f\u043e\u0438\u0441\u043a \u0434\u0440\u0443\u0433\u0430",id:"DateRegUserId",defaultValue:this.props.user.id,onChange:this.DateRegGetFreiends}),this.state.DateRegUsersList.length>0&&s.a.createElement(m.h,{id:"DateRegSearchResult"},s.a.createElement("div",{style:{display:"flex"}},this.state.DateRegUsersList.map((function(t){return s.a.createElement("div",{key:t.id,className:"horizontal_item","data-uid":t.id,onClick:function(a){return e.DateRegSetUid(t.id)}},s.a.createElement(m.a,{size:64,src:t.photo_100}),s.a.createElement(m.t,null,t.first_name+" "+t.last_name))})))),s.a.createElement(m.b,{id:"DateRegButton",size:"xl",before:this.state.btnEnabled?s.a.createElement(w.a,null):"",onClick:this.DateRegGet},this.state.btnEnabled?"\u0423\u0437\u043d\u0430\u0442\u044c":s.a.createElement(m.r,{size:"regular"})))),s.a.createElement(m.d,{style:{display:"none"},id:"DateRegResult"},s.a.createElement("div",{style:{backgroundImage:"url('https://sun9-30.userapi.com/c853520/v853520560/21e5b6/xrSo_ya_iRs.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:200,display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:"6px",borderRadius:12}},s.a.createElement(m.u,{level:"1",weight:"heavy",id:"DateRegText",style:{textAlign:"center",color:"#fff",textShadow:"4px 4px 5px #000, -4px 4px 5px #000,-4px -4px 5px #000, 4px -4px 5px #000"}},this.state.result))))}}]),a}(s.a.Component),_=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).DeadFollowersGet=function(){if(!D()("#DeadFollowersButton").is(":disabled")){D()("#DeadFollowersInput").prop("disabled",!0),D()("#DeadFollowersButton").prop("disabled",!0),n.setState({btnEnabled:!1});var e="\u0415\u0433\u0433\u043e\u0433 :\u041e",t=function(){D()("#DateRegText").html(e),D()("#DateRegResult").slideDown("fast",(function(){D()("#DateRegUserId").prop("disabled",!1),D()("#DateRegButton").prop("disabled",!1),n.setState({btnEnabled:!0})}))},a=function(a){D.a.ajax("https://vk.com/foaf.php?id="+a).done((function(a){var n=a.match(/<ya:created dc:date="([\d]{4}-[\d]{2}-[\d]{2}T[\d]{2}:[\d]{2}:[\d]{2}\+[\d]{2}:[\d]{2})"/i),s=a.match(/<foaf:name>(.+)<\/foaf:name>/i);if(n&&s){var r=n[1].split("T")[0].split("-");e="["+s[1]+"]<br>\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438:<br>"+r[2]+"."+r[1]+"."+r[0]}return t()}))};D()("#DateRegResult").fadeOut("fast",(function(){var n=D()("#DateRegUserId").val().trim(),s="";/^(-?\d+)$/.test(n)?a(n):(s=n.replace(/(https?:\/\/)?(vk\.com)?\/?/i),R.callAPI("utils.resolveScreenName",{screen_name:s},(function(n){if("user"!==n.type)return e+="<br>\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0435 \u0432\u0435\u0440\u043d\u0430\u044f",t();a(n.object_id)})))}))}},n.state={btnEnabled:!0},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement(m.j,{id:this.props.id},s.a.createElement(m.k,{addon:s.a.createElement(m.m,{onClick:this.props.goBack},"\u041d\u0430\u0437\u0430\u0434"),left:s.a.createElement(m.l,{onClick:this.props.goBack})},"\u041c\u0435\u0440\u0442\u0432\u044b\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438"),s.a.createElement(m.f,null,s.a.createElement(m.e,null,s.a.createElement(m.p,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435"},s.a.createElement("option",{value:"m"},"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"),s.a.createElement("option",{value:"f"},"\u0416\u0435\u043d\u0441\u043a\u0438\u0439")),s.a.createElement(m.i,{top:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f/\u0433\u0440\u0443\u043f\u043f\u0443",id:"DeadFollowersInput"}),s.a.createElement(m.b,{id:"DeadFollowersButton",size:"xl",style:{display:"none"},before:this.state.btnEnabled?s.a.createElement(w.a,null):"",onClick:this.DeadFollowersGet},this.state.btnEnabled?"\u0423\u0437\u043d\u0430\u0442\u044c":s.a.createElement(m.r,{size:"regular"})))),s.a.createElement(m.d,{style:{display:"none"},id:"DeadFollowersResult"},this.state.result))}}]),a}(s.a.Component),x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).goForward=function(e){var t=e.currentTarget.dataset.to,a=Object(o.a)(n.state.history);a.push(t),"main"===n.state.activePanel&&h.a.send("VKWebAppEnableSwipeBack"),n.setState({history:a,activePanel:t})},n.goBack=function(){var e=Object(o.a)(n.state.history);e.pop();var t=e[e.length-1];console.log(t),"main"===t&&h.a.send("VKWebAppDisableSwipeBack"),n.setState({history:e,activePanel:t})},n.state={activePanel:"Main",scheme:"bright_light",schemeDark:["space_gray","client_dark"],fetchedUser:{id:0,first_name:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",last_name:"",sex:0,photo_200:"https://vk.com/images/camera_100.png"},history:["Main"],popout:s.a.createElement(m.o,{size:"large"})},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppInitResult":case"VKWebAppCallAPIMethodResult":break;case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),e.setState({popout:""});break;case"VKWebAppUpdateConfig":var a=e.state.schemeDark.includes(t.detail.data.scheme);e.setState({scheme:a?"space_gray":"bright_light"});break;case"VKWebAppGetAuthTokenResult":case"VKWebAppAccessTokenReceived":console.log("VKWebAppGetAuthTokenResult"),R.setToken(t.detail.data.access_token);break;default:console.log(t.type),console.log(t)}})),h.a.send("VKWebAppInit"),h.a.send("VKWebAppGetUserInfo",{}),h.a.send("VKWebAppGetAuthToken",{app_id:R.AppID,scope:"friends,photos,wall,groups"})}},{key:"render",value:function(){return s.a.createElement(m.c,{scheme:this.state.scheme,isWebView:!0},s.a.createElement(m.v,{id:"View1",popout:this.state.popout,activePanel:this.state.activePanel,onSwipeBack:this.goBack,history:this.state.history},s.a.createElement(m.j,{id:"Main"},s.a.createElement(m.k,null,"byKIM"),s.a.createElement(m.f,{header:s.a.createElement(m.g,{mode:"secondary"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c")},s.a.createElement(m.n,{disabled:!0,text:s.a.createElement(m.s,{weight:"regular",style:{color:"var(--text_secondary)"}},"id"+this.state.fetchedUser.id),before:s.a.createElement(m.a,{size:72,src:this.state.fetchedUser.photo_200})},s.a.createElement(m.t,{weight:"medium"},this.state.fetchedUser.first_name+" "+this.state.fetchedUser.last_name))),s.a.createElement(m.f,{header:s.a.createElement(m.g,{mode:"secondary"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438")},s.a.createElement(m.q,{onClick:this.goForward,"data-to":"FunctionDateReg",before:s.a.createElement(g.a,null)},"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),s.a.createElement(m.q,{onClick:this.goForward,"data-to":"FunctionDeadFollowers",before:s.a.createElement(E.a,null)},"\u041c\u0435\u0440\u0442\u0432\u044b\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438"))),s.a.createElement(A,{id:"FunctionDateReg",goBack:this.goBack,goForward:this.goForward,user:this.state.fetchedUser}),s.a.createElement(_,{id:"FunctionDeadFollowers",goBack:this.goBack,goForward:this.goForward,user:this.state.fetchedUser})))}}]),a}(s.a.Component);a(109),a(110);i.a.render(s.a.createElement(x,null),document.getElementById("root"))},94:function(e,t,a){e.exports=a(111)}},[[94,1,2]]]);
//# sourceMappingURL=main.cbea9122.chunk.js.map