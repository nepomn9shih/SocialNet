(this.webpackJsonpsocialweb=this.webpackJsonpsocialweb||[]).push([[6],{229:function(e,t,n){"use strict";var r=n(0),s=(n(1),n.p+"static/media/randomAvatar1.debd756e.jpg"),a=n.p+"static/media/randomAvatar2.51b603ca.jpg",o=n.p+"static/media/randomAvatar3.425f2b50.jpg",c=n.p+"static/media/randomAvatar4.d9ac67cd.jpg",i=n.p+"static/media/randomAvatar5.c0dacda5.jpg",u=n.p+"static/media/randomAvatar6.9c5275ab.jpg",l=n.p+"static/media/randomAvatar7.fb26aaed.jpg",d=n.p+"static/media/randomAvatar8.7ec704b8.jpg",b=n.p+"static/media/randomAvatar9.775f6832.jpg",g=n.p+"static/media/randomAvatar0.1a9a8fe7.jpg",f=function(e){switch(e){case 1:return s;case 2:return a;case 3:return o;case 4:return c;case 5:return i;case 6:return u;case 7:return l;case 8:return d;case 9:return b;default:return g}};t.a=function(e){var t=e.userId,n=String(t),s=parseInt(n[n.length-1])||"default";return Object(r.jsx)("img",{className:"w-100 rounded",src:f(s),alt:"randomAvatar"})}},238:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i}));var r=function(e){return e.usersPage.users},s=function(e){return e.usersPage.pageSize},a=function(e){return e.usersPage.totalUsersCount},o=function(e){return e.usersPage.currentPage},c=function(e){return e.usersPage.isFetching},i=function(e){return e.usersPage.followingInProgress}},239:function(e,t,n){"use strict";var r=n(0);n(1);t.a=function(e){var t=e.user,n=e.followingInProgress,s=e.unfollow,a=e.follow;return t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),className:"btn btn-block btn-warning",onClick:function(){s(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),className:"btn btn-block btn-success",onClick:function(){a(t.id)},children:"Follow"})}},253:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=n(32),s=n(33),a=n(35),o=n(34),c=n(0),i=n(1),u=n.n(i),l=n(19),d=n(59),b=n(36),g=function(e){for(var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,a=Math.ceil(t/n),o=[],i=r-2;i<=r+2;i++)i>0&&i<=a&&o.push(i);return Object(c.jsxs)("div",{class:"btn-group",role:"group",children:[Object(c.jsx)("button",{type:"button",disabled:1===r,onClick:function(){s(1)},className:1===r?"btn btn-warning btn-sm":"btn btn-light btn-sm",children:"<<"}),o.map((function(e){return Object(c.jsx)("button",{type:"button",onClick:function(){s(e)},className:e===r?"btn btn-warning btn-sm":"btn btn-light btn-sm",children:e},e)})),Object(c.jsx)("button",{type:"button",disabled:a===r,onClick:function(){s(a)},className:a===r?"btn btn-warning btn-sm":"btn btn-light btn-sm",children:">>"})]})},f=n(8),p=n(229),j=n(239),h=(n(253),function(e){var t=e.user,n=e.followingInProgress,r=e.follow,s=e.unfollow;return Object(c.jsxs)("div",{className:"mb-3 p-2 card text-center userCard",children:[Object(c.jsx)("div",{className:"",children:Object(c.jsxs)("div",{className:"card bg-dark userAvatar",children:[Object(c.jsx)(f.b,{to:"/profile/"+t.id,children:t.photos.small?Object(c.jsx)("img",{className:"card-img",src:t.photos.small,alt:"avatar"}):Object(c.jsx)(p.a,{userId:t.id})}),Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsxs)("span",{className:"badge text-white p-3",children:["ID: ",t.id]}),Object(c.jsx)("div",{className:"m-1",children:Object(c.jsx)(j.a,{user:t,followingInProgress:n,unfollow:s,follow:r})})]})]})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{className:"card-header",children:t.name}),Object(c.jsxs)("div",{className:"p-1",children:['"',t.status||"Chilling",'"']})]})]},t.id)}),m=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,a=e.followingInProgress,o=e.follow,i=e.unfollow,u=e.users,l=e.isFetching;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"mx-4 my-2 text-center d-flex justify-content-center align-items-center flex-wrap",children:[Object(c.jsx)(g,{totalUsersCount:t,pageSize:n,currentPage:r,onPageChanged:s}),Object(c.jsxs)("div",{className:"card bg-dark text-white mx-4 mt-1 p-1",children:["Users: ",t]})]}),l?Object(c.jsx)(b.a,{}):null,Object(c.jsx)("div",{className:"d-flex flex-wrap justify-content-around p-2",children:u.map((function(e){return Object(c.jsx)(h,{user:e,followingInProgress:a,follow:o,unfollow:i},e.id)}))})]})},w=n(238),v=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPageAC(t),e.props.getUsers(t,e.props.pageSize)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(c.jsx)(m,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.followThunkCreator,unfollow:this.props.unfollowThunkCreator,followingInProgress:this.props.followingInProgress,isFetching:this.props.isFetching})}}]),n}(u.a.Component),x={followThunkCreator:d.b,unfollowThunkCreator:d.f,setCurrentPageAC:d.d,setFollowingInProgressAC:d.e,getUsers:d.c};t.default=Object(l.b)((function(e){return{users:Object(w.f)(e),pageSize:Object(w.d)(e),totalUsersCount:Object(w.e)(e),currentPage:Object(w.a)(e),isFetching:Object(w.c)(e),followingInProgress:Object(w.b)(e)}}),x)(v)}}]);
//# sourceMappingURL=6.19e7804d.chunk.js.map