(this.webpackJsonpsocialweb=this.webpackJsonpsocialweb||[]).push([[1],{136:function(e,t,n){},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(146).default.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"api-key":"9cf92053-f480-493b-a7cf-c3d9c728c87e"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followRequest:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowRequest:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},a={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))}},s={getMe:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}}},140:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(44),i=n.n(s),u=n(32),o=n(33),l=n(35),d=n(34),f=(n(136),n(19)),j=n(8),b=(n(140),Object(f.b)((function(e){return{messages:e.messagesPage.messages,totalUsersCount:e.usersPage.totalUsersCount}}))((function(e){return Object(r.jsxs)("nav",{className:"p-3",children:[Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(j.b,{to:"/profile",activeClassName:"active",children:"Profile"})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsxs)(j.b,{to:"/dialogs",activeClassName:"active",children:["Messages ",Object(r.jsx)("span",{className:"badge badge-light",children:e.messages.length})]})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(j.b,{to:"/news",activeClassName:"active",children:"News"})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(j.b,{to:"/music",activeClassName:"active",children:"Music"})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(j.b,{to:"/settings",activeClassName:"active",children:"Settings"})}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"item",children:Object(r.jsxs)(j.b,{to:"/users",activeClassName:"active",children:["Users ",e.totalUsersCount?Object(r.jsx)("span",{className:"badge badge-light",children:e.totalUsersCount}):""]})})]})}))),p=n(6),h=(n(142),function(e){return Object(r.jsx)("div",{children:"News"})}),g=(n(143),function(e){return Object(r.jsx)("div",{children:"Music"})}),O=(n(144),function(e){return Object(r.jsx)("div",{children:"Settings"})}),m=n.p+"static/media/start.33df82b7.gif",v=function(){return Object(r.jsxs)("div",{className:"container m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:m,alt:m}),Object(r.jsx)("h3",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"})]})},x=n(3),w=n(25),y=(n(164),n.p+"static/media/logo.509cc660.png"),N=function(e){return Object(r.jsxs)("header",{className:"row bg-header-colour",children:[Object(r.jsx)("div",{className:"col-3 d-flex align-items-center",children:Object(r.jsx)("img",{className:"logo",alt:"logo",src:y})}),Object(r.jsx)("div",{className:"col-6 d-flex justify-content-center align-items-center",children:Object(r.jsx)("h1",{className:"text-white",children:"CatNet"})}),Object(r.jsx)("div",{className:"col-3 d-flex justify-content-end align-items-center link pr-3",children:e.isAuth?Object(r.jsxs)("div",{className:"d-flex justify-content-around align-items-center flex-wrap",children:[Object(r.jsx)("div",{className:"p-1 m-1",children:e.login}),Object(r.jsx)("button",{onClick:e.logoutThunkCreator,className:"btn btn-warning btn-sm mr-2",children:"Log out"})]}):Object(r.jsx)(j.b,{to:"/login",children:Object(r.jsx)("button",{className:"btn btn-warning btn-sm mr-2",children:"Log in"})})})]})},C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)(N,Object(x.a)({},this.props))}}]),n}(a.a.Component),S={logoutThunkCreator:w.d},_=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),S)(C),E=n(18),k="INITIALIZED_SUCCESS",I={initialized:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(x.a)(Object(x.a)({},e),{},{initialized:!0});default:return e}},P=n(36),U=(n(165),function(e){return Object(r.jsx)("footer",{className:"row d-flex justify-content-center align-items-center",children:Object(r.jsxs)("small",{className:"item text-white text-center",children:["Made by ",Object(r.jsx)(j.b,{to:"/profile/12627",children:"\u041d\u0435\u043f\u043e\u043c\u043d\u044f\u0449\u0438\u0445 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440"})," in 2020"]})})}),A=function(e){return function(t){return Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(P.a,{}),children:Object(r.jsx)(e,Object(x.a)({},t))})}},L=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,302))})),R=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,301))})),z=a.a.lazy((function(){return n.e(6).then(n.bind(null,303))})),F=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,304))})),M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppThunkCreator()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"container-lg",children:[Object(r.jsx)(_,{}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-3 col-md-2 bg-navbar-colour",children:Object(r.jsx)(b,{})}),Object(r.jsxs)("div",{className:"col-9 col-md-10 bg-content-colour",children:[Object(r.jsx)(p.b,{path:"/",exact:!0,render:function(){return Object(r.jsx)(v,{})}}),Object(r.jsx)(p.b,{path:"/CatNet",render:function(){return Object(r.jsx)(v,{})}}),Object(r.jsx)(p.b,{path:"/profile/:userId?",render:A(R)}),Object(r.jsx)(p.b,{path:"/dialogs",render:A(L)}),Object(r.jsx)(p.b,{path:"/news",component:h}),Object(r.jsx)(p.b,{path:"/music",component:g}),Object(r.jsx)(p.b,{path:"/settings",component:O}),Object(r.jsx)(p.b,{path:"/users",render:A(z)}),Object(r.jsx)(p.b,{path:"/login",component:A(F)})]}),Object(r.jsx)(U,{})]})]}):Object(r.jsx)(P.a,{})}}]),n}(a.a.Component),G={initializeAppThunkCreator:function(){return function(e){e(Object(w.b)()).then((function(){e({type:k})}))}}},D=Object(E.d)(p.f,Object(f.b)((function(e){return{initialized:e.app.initialized}}),G))(M),q=(n(166),n(58)),B=n(73),W=n(59),J=n(81),X=n(79),H=Object(E.c)({profilePage:q.b,messagesPage:B.a,usersPage:W.a,auth:w.a,app:T,form:X.a}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.d,Z=Object(E.e)(H,V(Object(E.a)(J.a)));window.store=Z;var K=Z;n(227);i.a.render(Object(r.jsx)(j.a,{children:Object(r.jsx)(f.a,{store:K,children:Object(r.jsx)(D,{})})}),document.getElementById("root"))},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return b}));var r=n(7),c=n.n(r),a=n(13),s=n(3),i=n(45),u=n(14),o="auth/SET_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1,isFetching:!1},d=function(e,t,n,r){return{type:o,payload:{userId:e,login:t,email:n,isAuth:r}}},f=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.getMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,s=r.login,i=r.email,t(d(a,s,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e,t,n){return function(){var r=Object(a.a)(c.a.mark((function r(a){var s,o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.login(e,t,n);case 2:0===(s=r.sent).resultCode?a(f()):(o=s.messages.length>0?s.messages[0]:"Some error!",a(Object(i.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},b=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}},36:function(e,t,n){"use strict";var r=n(1);n(0);t.a=function(){return Object(r.jsx)("img",{className:"w-25",src:"https://\u043a\u0430\u043d\u0446\u0442\u043e\u0440\u0433.com/image/data/loading.gif",alt:"loading"})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(7),c=n.n(r),a=n(13),s=n(26),i=n(3),u=n(14),o="ADD_POST",l="SET_USER_PROFILE",d="SET_STATUS",f="DELETE_POST",j={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!",likeCount:5},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?",likeCount:7},{id:3,message:"\u042d\u0439!",likeCount:12},{id:4,message:"\u0427\u0451 \u043c\u043e\u043b\u0447\u0438\u0448\u044c?",likeCount:6}],profile:null,status:""},b=function(e){return{type:o,newPostText:e}},p=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(p(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:e.posts[e.posts.length-1].id+1,message:t.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case f:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}},59:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"c",(function(){return w})),n.d(t,"f",(function(){return y})),n.d(t,"b",(function(){return N}));var r=n(7),c=n.n(r),a=n(13),s=n(26),i=n(3),u=n(14),o="FOLLOW",l="UNFOLLOW",d="SET_USERS",f="SET_CURRENT_PAGE",j="SET_TOTAL_USERS_COUNT",b="TOGGLE_IS_FETCHING",p="TOGGLE_IS_FOLLOWING_PROGRESS",h={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},g=function(e){return{type:o,userId:e}},O=function(e){return{type:l,userId:e}},m=function(e){return{type:f,currentPage:e}},v=function(e){return{type:b,isFetching:e}},x=function(e,t){return{type:p,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(a.a)(c.a.mark((function n(r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v(!0)),n.next=3,u.c.getUsers(e,t);case 3:a=n.sent,r(v(!1)),r((s=a.items,{type:d,users:s})),r((c=a.totalCount,{type:j,totalUsersCount:c}));case 7:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x(!0,e)),t.next=3,u.c.unfollowRequest(e);case 3:0===t.sent.resultCode&&n(O(e)),n(x(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x(!0,e)),t.next=3,u.c.followRequest(e);case 3:0===t.sent.resultCode&&n(g(e)),n(x(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case l:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case f:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case j:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case b:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case p:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(26),c=n(3),a="SEND_MESSAGE",s={dialogs:[{id:1,name:"Andrey",userAvatar:"https://www.eastbaytimes.com/wp-content/uploads/2018/10/GettyImages-9015747841.jpg?w=620"},{id:2,name:"Sergey",userAvatar:"https://d885f4fd1763c7c53b88-b63a7d70fba6d58f32f6d8cf64fba882.ssl.cf1.rackcdn.com/Cats-1518-1.jpg"},{id:3,name:"Ivan",userAvatar:"https://thumbs.dreamstime.com/b/oosterse-cat-big-ears-op-zwarte-ge%C3%AFsoleerde-achtergrond-96766870.jpg"},{id:4,name:"Masha",userAvatar:"https://images2.minutemediacdn.com/image/upload/c_crop,h_1350,w_2400,x_0,y_303/f_auto,q_auto,w_1100/v1576269707/shape/mentalfloss/610356-gettyimages-1018078858.jpg"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:3,message:"\u042d\u0439!"},{id:4,message:"\u0427\u0451 \u043c\u043e\u043b\u0447\u0438\u0448\u044c?"}]},i=function(e){return{type:a,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n={id:e.messages.length+1,message:t.newMessageBody};return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}}},[[228,2,3]]]);
//# sourceMappingURL=main.c4431a72.chunk.js.map