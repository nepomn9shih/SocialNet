(this.webpackJsonpsocialweb=this.webpackJsonpsocialweb||[]).push([[1],{136:function(e,t,n){},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var r=n(143).default.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"api-key":"9cf92053-f480-493b-a7cf-c3d9c728c87e"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followRequest:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowRequest:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},s={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))}},a={getMe:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}}},140:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(44),i=n.n(a),u=n(32),o=n(33),l=n(35),d=n(34),j=(n(136),n(19)),b=n(8),f=(n(140),Object(j.b)((function(e){return{messages:e.messagesPage.messages,totalUsersCount:e.usersPage.totalUsersCount}}))((function(e){return Object(r.jsxs)("nav",{className:"p-3",children:[Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(b.b,{to:"/profile",activeClassName:"active",children:"Profile"})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsxs)(b.b,{to:"/dialogs",activeClassName:"active",children:["Messages ",Object(r.jsx)("span",{className:"badge badge-light",children:e.messages.length})]})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(b.b,{to:"/news",activeClassName:"active",children:"News"})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(b.b,{to:"/music",activeClassName:"active",children:"Music"})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(b.b,{to:"/games",activeClassName:"active",children:"Games"})}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(b.b,{to:"/settings",activeClassName:"active",children:"Settings"})}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"item",children:Object(r.jsxs)(b.b,{to:"/users",activeClassName:"active",children:["Users ",e.totalUsersCount?Object(r.jsx)("span",{className:"badge badge-light",children:e.totalUsersCount}):""]})}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(b.b,{to:"/about",activeClassName:"active",children:"About"})})]})}))),h=n(6),m=n.p+"static/media/news.1fabf7a9.gif",O=function(e){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:m,alt:"news"}),Object(r.jsx)("h3",{children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})]})},p=n.p+"static/media/music.42b7452b.gif",g=function(e){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:p,alt:"music"}),Object(r.jsx)("h3",{children:"\u041c\u0443\u0437\u044b\u043a\u0430"})]})},x=n.p+"static/media/settings.2a0dfdbc.gif",v=function(e){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:x,alt:"settings"}),Object(r.jsx)("h3",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]})},w=n.p+"static/media/start.33df82b7.gif",N=function(){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:w,alt:w}),Object(r.jsx)("h3",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"})]})},y=n(3),C=n(25),S=(n(161),n.p+"static/media/logo.509cc660.png"),_=function(e){return Object(r.jsxs)("header",{className:"row bg-header-colour",children:[Object(r.jsx)("div",{className:"col-3 d-flex align-items-center",children:Object(r.jsx)("img",{className:"logo",alt:"logo",src:S})}),Object(r.jsx)("div",{className:"col-6 d-flex justify-content-center align-items-center",children:Object(r.jsx)("h1",{className:"text-white",children:"CatNet"})}),Object(r.jsx)("div",{className:"col-3 d-flex justify-content-end align-items-center link pr-3",children:e.isAuth?Object(r.jsxs)("div",{className:"d-flex justify-content-around align-items-center flex-wrap",children:[Object(r.jsx)("div",{className:"p-1 m-1",children:e.login}),Object(r.jsx)("button",{onClick:e.logoutThunkCreator,className:"btn btn-warning btn-sm mr-2",children:Object(r.jsx)("b",{children:"Log out"})})]}):Object(r.jsx)(b.b,{to:"/login",children:Object(r.jsx)("button",{className:"btn btn-warning btn-sm mr-2",children:Object(r.jsx)("b",{children:"Log in"})})})})]})},k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)(_,Object(y.a)({},this.props))}}]),n}(s.a.Component),E={logoutThunkCreator:C.d},I=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),E)(k),P=n(18),T="INITIALIZED_SUCCESS",A={initialized:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}},L=n(36),R=(n(162),function(e){return Object(r.jsx)("footer",{className:"row d-flex justify-content-center align-items-center",children:Object(r.jsxs)("small",{className:"item text-white text-center",children:["Made by ",Object(r.jsx)(b.b,{to:"/profile/12627",children:"\u041d\u0435\u043f\u043e\u043c\u043d\u044f\u0449\u0438\u0445 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440"})," in 2020"]})})}),z=function(e){return function(t){return Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(L.a,{}),children:Object(r.jsx)(e,Object(y.a)({},t))})}},F=n.p+"static/media/games.932fc109.gif",M=function(e){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:F,alt:"games"}),Object(r.jsx)("h3",{children:"\u0418\u0433\u0440\u044b"})]})},G=n.p+"static/media/about.6e4bc382.gif",D=function(e){return Object(r.jsxs)("div",{className:"m-3 text-center text-white",children:[Object(r.jsx)("img",{className:"w-50 rounded-circle",src:G,alt:"about"}),Object(r.jsx)("h3",{children:"\u041e \u0441\u043e\u0446\u0441\u0435\u0442\u0438:"}),Object(r.jsxs)("div",{className:"card bg-dark p-2",children:[Object(r.jsx)("div",{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u0441\u043e\u0446\u0441\u0435\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 API \u0441\u0430\u0439\u0442\u0430"}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)("a",{href:"https://social-network.samuraijs.com",children:"https://social-network.samuraijs.com"})}),Object(r.jsx)("div",{children:"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u043e\u0439\u0442\u0438 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435:"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043b\u043e\u0433\u0438\u043d:"})," free@samuraijs.com"]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c:"})," free"]})]})]})},q=s.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,298))})),B=s.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,297))})),W=s.a.lazy((function(){return n.e(6).then(n.bind(null,299))})),J=s.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,300))})),X=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppThunkCreator()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"container-lg",children:[Object(r.jsx)(I,{}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-3 col-md-2 bg-navbar-colour",children:Object(r.jsx)(f,{})}),Object(r.jsxs)("div",{className:"col-9 col-md-10 bg-content-colour",children:[Object(r.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(r.jsx)(N,{})}}),Object(r.jsx)(h.b,{path:"/CatNet",render:function(){return Object(r.jsx)(N,{})}}),Object(r.jsx)(h.b,{path:"/profile/:userId?",render:z(B)}),Object(r.jsx)(h.b,{path:"/dialogs",render:z(q)}),Object(r.jsx)(h.b,{path:"/news",component:O}),Object(r.jsx)(h.b,{path:"/music",component:g}),Object(r.jsx)(h.b,{path:"/settings",component:v}),Object(r.jsx)(h.b,{path:"/games",component:M}),Object(r.jsx)(h.b,{path:"/users",render:z(W)}),Object(r.jsx)(h.b,{path:"/login",component:z(J)}),Object(r.jsx)(h.b,{path:"/about",component:D})]}),Object(r.jsx)(R,{})]})]}):Object(r.jsx)(L.a,{})}}]),n}(s.a.Component),H={initializeAppThunkCreator:function(){return function(e){e(Object(C.b)()).then((function(){e({type:T})}))}}},V=Object(P.d)(h.f,Object(j.b)((function(e){return{initialized:e.app.initialized}}),H))(X),Z=(n(163),n(58)),K=n(73),Q=n(59),Y=n(81),$=n(79),ee=Object(P.c)({profilePage:Z.b,messagesPage:K.a,usersPage:Q.a,auth:C.a,app:U,form:$.a}),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.d,ne=Object(P.e)(ee,te(Object(P.a)(Y.a)));window.store=ne;var re=ne;n(224);i.a.render(Object(r.jsx)(b.a,{children:Object(r.jsx)(j.a,{store:re,children:Object(r.jsx)(V,{})})}),document.getElementById("root"))},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return f}));var r=n(7),c=n.n(r),s=n(13),a=n(3),i=n(45),u=n(14),o="auth/SET_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1,isFetching:!1},d=function(e,t,n,r){return{type:o,payload:{userId:e,login:t,email:n,isAuth:r}}},j=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r,s,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.getMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,a=r.login,i=r.email,t(d(s,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n){return function(){var r=Object(s.a)(c.a.mark((function r(s){var a,o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.login(e,t,n);case 2:0===(a=r.sent).resultCode?s(j()):(o=a.messages.length>0?a.messages[0]:"Some error!",s(Object(i.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},f=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(a.a)(Object(a.a)({},e),t.payload);default:return e}}},36:function(e,t,n){"use strict";var r=n(0);n(1);t.a=function(){return Object(r.jsx)("img",{className:"w-25",src:"https://\u043a\u0430\u043d\u0446\u0442\u043e\u0440\u0433.com/image/data/loading.gif",alt:"loading"})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return p}));var r=n(7),c=n.n(r),s=n(13),a=n(26),i=n(3),u=n(14),o="ADD_POST",l="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",b={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!",likeCount:5},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?",likeCount:7},{id:3,message:"\u042d\u0439!",likeCount:122},{id:4,message:"\u0427\u0451 \u043c\u043e\u043b\u0447\u0438\u0448\u044c?",likeCount:6}],profile:null,status:""},f=function(e){return{type:o,newPostText:e}},h=function(e){return{type:d,status:e}},m=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(h(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:e.posts[e.posts.length-1].id+1,message:t.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[n])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}},59:function(e,t,n){"use strict";n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return w})),n.d(t,"f",(function(){return N})),n.d(t,"b",(function(){return y}));var r=n(7),c=n.n(r),s=n(13),a=n(26),i=n(3),u=n(14),o="FOLLOW",l="UNFOLLOW",d="SET_USERS",j="SET_CURRENT_PAGE",b="SET_TOTAL_USERS_COUNT",f="TOGGLE_IS_FETCHING",h="TOGGLE_IS_FOLLOWING_PROGRESS",m={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},O=function(e){return{type:o,userId:e}},p=function(e){return{type:l,userId:e}},g=function(e){return{type:j,currentPage:e}},x=function(e){return{type:f,isFetching:e}},v=function(e,t){return{type:h,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(s.a)(c.a.mark((function n(r){var s;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),n.next=3,u.c.getUsers(e,t);case 3:s=n.sent,r(x(!1)),r((a=s.items,{type:d,users:a})),r((c=s.totalCount,{type:b,totalUsersCount:c}));case 7:case"end":return n.stop()}var c,a}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v(!0,e)),t.next=3,u.c.unfollowRequest(e);case 3:0===t.sent.resultCode&&n(p(e)),n(v(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v(!0,e)),t.next=3,u.c.followRequest(e);case 3:0===t.sent.resultCode&&n(O(e)),n(v(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case l:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case j:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case f:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case h:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(a.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(26),c=n(3),s="SEND_MESSAGE",a={dialogs:[{id:1,name:"Andrey",userAvatar:"https://www.eastbaytimes.com/wp-content/uploads/2018/10/GettyImages-9015747841.jpg?w=620"},{id:2,name:"Sergey",userAvatar:"https://d885f4fd1763c7c53b88-b63a7d70fba6d58f32f6d8cf64fba882.ssl.cf1.rackcdn.com/Cats-1518-1.jpg"},{id:3,name:"Ivan",userAvatar:"https://thumbs.dreamstime.com/b/oosterse-cat-big-ears-op-zwarte-ge%C3%AFsoleerde-achtergrond-96766870.jpg"},{id:4,name:"Masha",userAvatar:"https://images2.minutemediacdn.com/image/upload/c_crop,h_1350,w_2400,x_0,y_303/f_auto,q_auto,w_1100/v1576269707/shape/mentalfloss/610356-gettyimages-1018078858.jpg"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:3,message:"\u042d\u0439!"},{id:4,message:"\u0427\u0451 \u043c\u043e\u043b\u0447\u0438\u0448\u044c?"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:e.messages.length+1,message:t.newMessageBody};return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}}},[[225,2,3]]]);
//# sourceMappingURL=main.df0e7ad8.chunk.js.map