(this.webpackJsonpsocialweb=this.webpackJsonpsocialweb||[]).push([[1],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(143).default.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"api-key":"9cf92053-f480-493b-a7cf-c3d9c728c87e"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followRequest:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowRequest:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},a={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return r.put("profile",e).then((function(e){return e.data}))}},s={getMe:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:c}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},i={getCaptchaUrl:function(){return r.get("security/get-captcha-url").then((function(e){return e.data}))}}},140:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(44),i=n.n(s),o=n(32),u=n(33),l=n(35),d=n(34),j=(n(97),n(19)),f=n(8),b=(n(140),Object(j.b)((function(e){return{dialogs:e.messagesPage.dialogs,totalUsersCount:e.usersPage.totalUsersCount}}))((function(e){return Object(r.jsxs)("nav",{className:"p-3",children:[Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(f.b,{to:"/profile",activeClassName:"active",children:"Profile"})}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"item",children:Object(r.jsxs)(f.b,{to:"/dialogs",activeClassName:"active",children:["Chats ",Object(r.jsx)("span",{className:"badge badge-light",children:e.dialogs.length})]})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(f.b,{to:"/news",activeClassName:"active",children:"News"})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(f.b,{to:"/music",activeClassName:"active",children:"Music"})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(f.b,{to:"/games",activeClassName:"active",children:"Games"})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(f.b,{to:"/settings",activeClassName:"active",children:"Settings"})}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"item",children:Object(r.jsxs)(f.b,{to:"/users",activeClassName:"active",children:["Users ",e.totalUsersCount?Object(r.jsx)("span",{className:"badge badge-light",children:e.totalUsersCount}):""]})}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(f.b,{to:"/about",activeClassName:"active",children:"About"})})]})}))),h=n(7),p=n.p+"static/media/news.1fabf7a9.gif",m=function(e){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:p,alt:"news"}),Object(r.jsx)("h3",{children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})]})},O=n.p+"static/media/music.42b7452b.gif",g=function(e){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:O,alt:"music"}),Object(r.jsx)("h3",{children:"\u041c\u0443\u0437\u044b\u043a\u0430"})]})},x=n.p+"static/media/settings.2a0dfdbc.gif",v=function(e){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:x,alt:"settings"}),Object(r.jsx)("h3",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]})},w=n.p+"static/media/start.33df82b7.gif",N=function(){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:w,alt:w}),Object(r.jsx)("h3",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"})]})},C=n(3),y=n(25),S=(n(161),n.p+"static/media/logo.509cc660.png"),k=function(e){return Object(r.jsxs)("header",{className:"row bg-header-colour",children:[Object(r.jsx)("div",{className:"col-3 d-flex align-items-center",children:Object(r.jsx)("img",{className:"logo",alt:"logo",src:S})}),Object(r.jsx)("div",{className:"col-6 d-flex justify-content-center align-items-center",children:Object(r.jsx)("h1",{className:"text-white",children:"CatNet"})}),Object(r.jsx)("div",{className:"col-3 d-flex justify-content-end align-items-center link pr-3",children:e.isAuth?Object(r.jsxs)("div",{className:"d-flex justify-content-around align-items-center flex-wrap",children:[Object(r.jsx)("div",{className:"p-1 m-1",children:e.login}),Object(r.jsx)("button",{onClick:e.logoutThunkCreator,className:"btn btn-warning btn-sm mr-2",children:Object(r.jsx)("b",{children:"LOG OUT"})})]}):Object(r.jsx)(f.b,{to:"/login",children:Object(r.jsx)("button",{className:"btn btn-warning btn-sm mr-2",children:Object(r.jsx)("b",{children:"LOG IN"})})})})]})},E=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(k,Object(C.a)({},this.props))}}]),n}(a.a.Component),T={logoutThunkCreator:y.d},P=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),T)(E),_=n(18),U="INITIALIZED_SUCCESS",I={initialized:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},L=n(36),D=(n(162),function(e){return Object(r.jsx)("footer",{className:"row d-flex justify-content-center align-items-center",children:Object(r.jsxs)("small",{className:"item text-white text-center",children:["Made by ",Object(r.jsx)(f.b,{to:"/profile/12627",children:"\u041d\u0435\u043f\u043e\u043c\u043d\u044f\u0449\u0438\u0445 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440"})," in 2020"]})})}),G=function(e){return function(t){return Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(L.a,{}),children:Object(r.jsx)(e,Object(C.a)({},t))})}},R=n.p+"static/media/games.932fc109.gif",F=function(e){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:R,alt:"games"}),Object(r.jsx)("h3",{children:"\u0418\u0433\u0440\u044b"})]})},z=n.p+"static/media/about.6e4bc382.gif",M=function(e){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:z,alt:"about"}),Object(r.jsx)("h3",{children:"\u041e \u0441\u043e\u0446\u0441\u0435\u0442\u0438:"}),Object(r.jsxs)("div",{className:"card bg-dark p-2",children:[Object(r.jsx)("div",{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u0441\u043e\u0446\u0441\u0435\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 API \u0441\u0430\u0439\u0442\u0430"}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)("a",{href:"https://social-network.samuraijs.com",children:"https://social-network.samuraijs.com"})}),Object(r.jsx)("div",{children:"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u043e\u0439\u0442\u0438 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435:"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043b\u043e\u0433\u0438\u043d:"})," free@samuraijs.com"]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c:"})," free"]})]})]})},q=n.p+"static/media/error.a6ea8901.gif",J=function(){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:q,alt:q}),Object(r.jsx)("h3",{children:"404: \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430!"})]})},W=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,298))})),B=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,297))})),H=a.a.lazy((function(){return n.e(6).then(n.bind(null,299))})),V=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,300))})),X=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(e){console.error("\u041a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430:"+e)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppThunkCreator(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"container-lg",children:[Object(r.jsx)(P,{}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-3 col-md-2 bg-navbar-colour",children:Object(r.jsx)(b,{})}),Object(r.jsx)("div",{className:"col-9 col-md-10 bg-content-colour",children:Object(r.jsxs)(h.d,{children:[Object(r.jsx)(h.a,{from:"/CatNet",to:"/"}),Object(r.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(r.jsx)(N,{})}}),Object(r.jsx)(h.b,{path:"/profile/:userId?",render:G(B)}),Object(r.jsx)(h.b,{path:"/dialogs/:dialogId?",render:G(W)}),Object(r.jsx)(h.b,{path:"/news",component:m}),Object(r.jsx)(h.b,{path:"/music",component:g}),Object(r.jsx)(h.b,{path:"/settings",component:v}),Object(r.jsx)(h.b,{path:"/games",component:F}),Object(r.jsx)(h.b,{path:"/users",render:G(H)}),Object(r.jsx)(h.b,{path:"/login",component:G(V)}),Object(r.jsx)(h.b,{path:"/about",component:M}),Object(r.jsx)(h.b,{path:"*",component:J})]})}),Object(r.jsx)(D,{})]})]}):Object(r.jsx)(L.a,{})}}]),n}(a.a.Component),Z={initializeAppThunkCreator:function(){return function(e){e(Object(y.b)()).then((function(){e({type:U})}))}}},K=Object(_.d)(h.g,Object(j.b)((function(e){return{initialized:e.app.initialized}}),Z))(X),Q=(n(163),n(58)),Y=n(73),$=n(59),ee=n(81),te=n(79),ne=Object(_.c)({profilePage:Q.b,messagesPage:Y.a,usersPage:$.a,auth:y.a,app:A,form:te.a}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,ce=Object(_.e)(ne,re(Object(_.a)(ee.a)));window.store=ce;var ae=ce;n(224);i.a.render(Object(r.jsx)(f.a,{children:Object(r.jsx)(j.a,{store:ae,children:Object(r.jsx)(K,{})})}),document.getElementById("root"))},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return p}));var r=n(6),c=n.n(r),a=n(9),s=n(3),i=n(27),o=n(10),u="auth/SET_USER_DATA",l="auth/GET_CAPTCHA_URL_SUCCESS",d={userId:null,email:null,login:null,isAuth:!1,isFetching:!1,captchaUrl:null},j=function(e,t,n,r){return{type:u,payload:{userId:e,login:t,email:n,isAuth:r}}},f=function(e){return{type:l,payload:{captchaUrl:e}}},b=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,s=r.login,i=r.email,t(j(a,s,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e,t,n,r){return function(){var s=Object(a.a)(c.a.mark((function a(s){var u,l;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,o.a.login(e,t,n,r);case 2:0===(u=c.sent).resultCode?(s(b()),s(f(null))):(10===u.resultCode&&s(m()),l=u.messages.length>0?u.messages[0]:"Some error!",s(Object(i.a)("login",{_error:l})));case 4:case"end":return c.stop()}}),a)})));return function(e){return s.apply(this,arguments)}}()},p=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.getCaptchaUrl();case 2:n=e.sent,r=n.url,t(f(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:case l:return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}},36:function(e,t,n){"use strict";var r=n(0);n(1);t.a=function(){return Object(r.jsx)("img",{className:"w-25",src:"https://\u043a\u0430\u043d\u0446\u0442\u043e\u0440\u0433.com/image/data/loading.gif",alt:"loading"})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return x})),n.d(t,"h",(function(){return v})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return N}));var r=n(6),c=n.n(r),a=n(9),s=n(45),i=n(3),o=n(27),u=n(10),l="ADD_POST",d="SET_USER_PROFILE",j="SET_STATUS",f="DELETE_POST",b="SAVE_PHOTO_SUCCESS",h={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!",likeCount:5},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?",likeCount:7},{id:3,message:"\u042d\u0439!",likeCount:122},{id:4,message:"\u0427\u0451 \u043c\u043e\u043b\u0447\u0438\u0448\u044c?",likeCount:6}],profile:null,status:""},p=function(e){return{type:l,newPostText:e}},m=function(e){return{type:j,status:e}},O=function(e){return{type:f,postId:e}},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("GetProfileThunkCreator"),t.next=3,u.b.getProfile(e);case 3:r=t.sent,n({type:d,profile:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("GetStatusThunkCreator"),t.next=3,u.b.getStatus(e);case 3:r=t.sent,n(m(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("UpdateStatusThunkCreator"),t.prev=1,t.next=4,u.b.updateStatus(e);case 4:0===t.sent.resultCode&&n(m(e)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("SavePhotoThunkCreator"),t.next=3,u.b.savePhoto(e);case 3:0===(r=t.sent).resultCode&&n((c=r.data.photos,{type:b,photos:c}));case 5:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("SaveProfileThunkCreator"),a=r().auth.userId,t.next=4,u.b.saveProfile(e);case 4:if(0!==(s=t.sent).resultCode){t.next=9;break}n(g(a)),t.next=11;break;case 9:return n(Object(o.a)("editContacts",{_error:s.messages[0]})),t.abrupt("return",Promise.reject(s.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:e.posts.length?e.posts[e.posts.length-1].id+1:0,message:t.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case f:return console.log("delete post"),Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},59:function(e,t,n){"use strict";n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return w})),n.d(t,"f",(function(){return N})),n.d(t,"b",(function(){return C}));var r=n(6),c=n.n(r),a=n(9),s=n(45),i=n(3),o=n(10),u="FOLLOW",l="UNFOLLOW",d="SET_USERS",j="SET_CURRENT_PAGE",f="SET_TOTAL_USERS_COUNT",b="TOGGLE_IS_FETCHING",h="TOGGLE_IS_FOLLOWING_PROGRESS",p={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},m=function(e){return{type:u,userId:e}},O=function(e){return{type:l,userId:e}},g=function(e){return{type:j,currentPage:e}},x=function(e){return{type:b,isFetching:e}},v=function(e,t){return{type:h,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(a.a)(c.a.mark((function n(r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),n.next=3,o.d.getUsers(e,t);case 3:a=n.sent,r(x(!1)),r((s=a.items,{type:d,users:s})),r((c=a.totalCount,{type:f,totalUsersCount:c}));case 7:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v(!0,e)),t.next=3,o.d.unfollowRequest(e);case 3:0===t.sent.resultCode&&n(O(e)),n(v(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v(!0,e)),t.next=3,o.d.followRequest(e);case 3:0===t.sent.resultCode&&n(m(e)),n(v(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case l:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case j:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case f:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case b:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case h:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u}));var r=n(3),c="SEND_MESSAGE",a="SET_ACTIVE_DIALOG",s={dialogs:[{id:8,name:"Nastya",messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:3,message:"\u042d\u0439!"}]},{id:2,name:"samurai dimych",messages:[{id:1,message:"\u0417\u0434\u0430\u0440\u043e\u0432\u0430!"},{id:2,message:"\u0427\u0435 \u0434\u0435\u043b\u0430\u0435\u0448\u044c?"},{id:3,message:"\u041f\u043e\u043c\u043e\u0436\u0435\u0448\u044c \u043c\u043d\u0435 \u043a\u043e\u0435 \u0441 \u0447\u0435\u043c?"},{id:4,message:"\u0427\u0451 \u043c\u043e\u043b\u0447\u0438\u0448\u044c?"}]},{id:11,name:"Sol",messages:[{id:1,message:"\u0425\u0430\u0439!"},{id:2,message:"\u042f \u043d\u0430 \u0441\u0432\u044f\u0437\u0438"},{id:3,message:"\u0422\u044b \u0433\u0434\u0435?"}]},{id:14,name:"Den4ik",messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,message:"\u042f \u0433\u043e\u0442\u043e\u0432"},{id:3,message:"\u0410 \u0442\u044b?"},{id:4,message:"\u041e\u0442\u0432\u0435\u0442\u044c!"}]}],activeDialog:null},i=function(e){for(var t=0;t<e.dialogs.length;t++)if(+e.dialogs[t].id===+e.activeDialog)return t;return-1},o=function(e){return{type:c,newMessageBody:e}},u=function(e){return{type:a,activeDialogNumber:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=JSON.parse(JSON.stringify(e)),o=i(n),u={id:e.dialogs[o].messages.length+1,message:t.newMessageBody};return n.dialogs[o].messages.push(u),n;case a:return Object(r.a)(Object(r.a)({},e),{},{activeDialog:t.activeDialogNumber});default:return e}}},97:function(e,t,n){}},[[225,2,3]]]);
//# sourceMappingURL=main.77600c31.chunk.js.map