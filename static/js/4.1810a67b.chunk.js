(this.webpackJsonpsocialweb=this.webpackJsonpsocialweb||[]).push([[4],{226:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var c=function(e){if(!e)return"error message"},s=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},a=function(e){return function(t){if(t&&t.length<e)return"Max length is ".concat(e," symbols")}}},227:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var c=n(3),s=n(232),a=n(0),r=(n(1),n(228),function(e){e.input;var t=e.meta,n=(e.child,Object(s.a)(e,["input","meta","child"])),c=t.touched&&t.error;return Object(a.jsxs)("div",{className:"formControl"+(c?" error":""),children:[Object(a.jsx)("div",{children:n.children}),c&&Object(a.jsxs)("span",{children:['"',t.error,'"']})]})}),i=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(a.jsx)(r,Object(c.a)(Object(c.a)({},e),{},{children:Object(a.jsx)("textarea",Object(c.a)(Object(c.a)({},t),n))}))},u=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(a.jsx)(r,Object(c.a)(Object(c.a)({},e),{},{children:Object(a.jsx)("input",Object(c.a)(Object(c.a)({},t),n))}))}},228:function(e,t,n){},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n(3),s=n(32),a=n(33),r=n(35),i=n(34),u=n(0),j=n(1),o=n.n(j),l=n(19),b=n(6),d=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(r.a)(j,t);var n=Object(i.a)(j);function j(){return Object(s.a)(this,j),n.apply(this,arguments)}return Object(a.a)(j,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(c.a)({},this.props)):Object(u.jsx)(b.a,{to:"/login"})}}]),j}(o.a.Component);return Object(l.b)(d)(t)}},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);var c=n(19),s=n(18),a=n(231),r=n(73),i=n(0),u=(n(1),n(8)),j=(n(254),function(e){var t=e.name,n=e.id,c=e.userAvatar;return Object(i.jsx)("div",{className:"dialog mb-2",children:Object(i.jsx)(u.b,{to:"/dialogs/"+n,children:Object(i.jsx)("div",{className:"card bg-light",children:Object(i.jsxs)("div",{className:"d-flex justify-content-around flex-wrap",children:[Object(i.jsx)("div",{className:"",children:Object(i.jsx)("img",{className:"w-100 rounded",src:c,alt:"userAvatar"})}),Object(i.jsx)("div",{className:"p-2",children:t})]})})})})}),o=(n(255),n(256),function(e){var t=e.text;return Object(i.jsx)("div",{className:"m-1 overflowHack",children:t})}),l=n(104),b=n(105),d=n(226),m=n(227),O=Object(d.a)(100),h=Object(b.a)({form:"message"})((function(e){return Object(i.jsx)("div",{className:"list-group-item bg-light",children:Object(i.jsx)("form",{onSubmit:e.handleSubmit,children:Object(i.jsx)("div",{className:"raw",children:Object(i.jsxs)("div",{className:"col-12 col-md-9",children:[Object(i.jsx)(l.a,{name:"message",component:m.b,className:"form-control",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",validate:[d.c,O]}),Object(i.jsx)("div",{className:"mt-1",children:Object(i.jsx)("button",{className:"btn btn-sm btn-warning btn-block",children:"Add message"})})]})})})})})),f=function(e){return Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-4 col-md-3",children:Object(i.jsxs)("div",{className:"card bg-dark p-2 m-2",children:[e.messagesPage.dialogs.map((function(e){return Object(i.jsx)(j,{name:e.name,id:e.id,userAvatar:e.userAvatar},e.id)})),Object(i.jsx)("button",{className:"btn btn-warning btn-sm",children:"***"})]})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsxs)("div",{className:"list-group m-2",children:[Object(i.jsx)("div",{className:"list-group-item",children:e.messagesPage.messages.map((function(e){return Object(i.jsx)(o,{text:e.message},e.id)}))}),Object(i.jsx)(h,{onSubmit:function(t){e.sendMessage(t.message)}})]})})]})};t.default=Object(s.d)(Object(c.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(t){e(Object(r.b)(t))}}})),a.a)(f)}}]);
//# sourceMappingURL=4.1810a67b.chunk.js.map