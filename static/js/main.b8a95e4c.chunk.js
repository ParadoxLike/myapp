(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),i=a.n(r),l=a(21),o=a(22),s=a(29),d=a(28),m=a(12),p=a.n(m),u=a(4),h=a(27),g=a.n(h),b=function(e){var t=e.id,a=e.go;return c.a.createElement(u.f,{id:t},c.a.createElement(u.g,{addon:c.a.createElement(u.i,{onClick:a,"data-to":"Main"},"\u041d\u0430\u0437\u0430\u0434"),left:c.a.createElement(u.h,{onClick:a,"data-to":"Main"})},"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),c.a.createElement(u.d,null,c.a.createElement(u.c,null,c.a.createElement("div",{style:{backgroundImage:"url('https://sun9-42.userapi.com/hbCbZ3XKoB8s6cR6D2WPRCb2bUDGx2YY1ejv4w/6ht81wQbY7Y.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:200,display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:"6px",borderRadius:12}},c.a.createElement(u.m,{level:"1",weight:"heavy",id:"DateRegText",style:{color:"#fff",textShadow:"4px 4px 5px #000, -4px 4px 5px #000,-4px -4px 5px #000, 4px -4px 5px #000"}},"\u0422\u044b \u0448\u043e, \u0434\u0443\u0440\u0430\u043a \u0448\u043e\u043b\u044c!?")))))},f=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activeView:"View1",activePanel:"Main",scheme:"bright_light",lights:["bright_light","client_light"],fetchedUser:null},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppUpdateConfig":var a=e.state.lights.includes(t.detail.data.scheme);e.setState({scheme:a?"bright_light":"space_gray"}),p.a.send("VKWebAppSetViewSettings",{status_bar_style:a?"dark":"light",action_bar_color:a?"#000":"#ffff"}),document.getElementById("UserInfoBlock").innerHTML(e.state.scheme);break;case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),document.getElementById("UserInfoBlock").setAttribute("src",e.state.fetchedUser.photo_200);break;default:console.log(t.detail.type)}})),p.a.send("VKWebAppInit")}},{key:"render",value:function(){return c.a.createElement(u.b,{scheme:this.state.scheme},c.a.createElement(u.k,{activeView:this.state.activeView},c.a.createElement(u.n,{id:"View1",activePanel:this.state.activePanel},c.a.createElement(u.f,{id:"Main"},c.a.createElement(u.g,null,"byKIM"),c.a.createElement(u.d,{header:c.a.createElement(u.e,{mode:"secondary"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c")},c.a.createElement(u.j,{id:"UserInfoBlock",text:"\xa0",before:c.a.createElement(u.a,{size:72,src:"https://vk.com/images/camera_100.png"})},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c")),c.a.createElement(u.d,{header:c.a.createElement(u.e,{mode:"secondary"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438")},c.a.createElement(u.l,{onClick:this.go,"data-to":"FunctionDateReg",before:c.a.createElement(g.a,null)},"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"))),c.a.createElement(b,{id:"FunctionDateReg",go:this.go}))))}}]),a}(c.a.Component);a(108);i.a.render(c.a.createElement(f,null),document.getElementById("root"))},93:function(e,t,a){e.exports=a(109)}},[[93,1,2]]]);
//# sourceMappingURL=main.b8a95e4c.chunk.js.map