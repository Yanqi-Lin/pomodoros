(this.webpackJsonppomodoros=this.webpackJsonppomodoros||[]).push([[0],{71:function(e,n,t){},76:function(e,n,t){},77:function(e,n,t){},79:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var s=t(0),c=t.n(s),r=t(20),i=t.n(r),a=(t(71),t(49)),o=t(57),u=t(13),j="START_STOP",b="RESET",d="BREAK_DECREMENT",l="BREAK_INCREMENT",O="SESSION_DECREMENT",f="SESSION_INCREMENT",p="COUNTDOWN",h="beep",m=function(e){document.getElementById(e).play()},x=function(e){var n=document.getElementById(e);n.pause(),n.currentTime=0},k={break:5,session:25,current:1500,isRunning:!1,isSession:!0};var g=Object(o.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return e.isRunning?e.current<1&&e.isSession?(m(h),Object(u.a)(Object(u.a)({},e),{},{current:60*e.break,isSession:!1})):e.current<1&&!e.isSession?(m(h),Object(u.a)(Object(u.a)({},e),{},{current:60*e.break,isSession:!0})):Object(u.a)(Object(u.a)({},e),{},{current:e.current-1}):e;case j:return Object(u.a)(Object(u.a)({},e),{},{isRunning:!e.isRunning});case b:return x(h),k;case d:return!e.isRunning&&e.break>1?Object(u.a)(Object(u.a)({},e),{},{break:e.break-1}):e;case l:return!e.isRunning&&e.break<60?Object(u.a)(Object(u.a)({},e),{},{break:e.break+1}):e;case O:return!e.isRunning&&e.session>1?Object(u.a)(Object(u.a)({},e),{},{session:e.session-1,current:60*(e.session-1)}):e;case f:return!e.isRunning&&e.session<60?Object(u.a)(Object(u.a)({},e),{},{session:e.session+1,current:60*(e.session+1)}):e;default:return e}})),y=(t(76),t(85)),S=t(40),v=t(23),E=t(88),A=t(89),C=t(90),R=t(91),N=t(92),T=t(86),I=(t(77),t(6));var w=function(e){var n=Math.floor(e.current/60),t=e.current-60*n;function s(e){return e<10?"0"+e:e}var c=s(n)+":"+s(t),r=e.isSession?e.session:e.break,i=100*(1-e.current/60/r);return Object(I.jsx)("div",{id:"time-left",children:Object(I.jsx)(T.a,{type:"circle",percent:i,format:function(){return c}})})};t(79);var B={startStopAction:function(){return{type:j}},countDownAction:function(){return{type:p}},resetAction:function(){return{type:b}},breakDcrementAction:function(e){return{type:d,payload:e}},breakIncrementAction:function(e){return{type:l,payload:e}},sessionDecrementAction:function(e){return{type:O,payload:e}},sessionIncrementAction:function(e){return{type:f,payload:e}}},D=Object(a.b)((function(e){return e}),B)((function(e){return c.a.useEffect((function(){var n=function(){setTimeout((function(){return e.countDownAction()}),1e3)};e.isRunning&&(n(),clearTimeout(n))})),Object(I.jsxs)(y.a,{className:"mainCard",children:[Object(I.jsxs)(S.a,{gutter:[16,20],children:[Object(I.jsxs)(v.a,{span:12,children:[Object(I.jsx)(S.a,{justify:"center",children:Object(I.jsx)("div",{id:"break-label",children:"Break Length"})}),Object(I.jsxs)(S.a,{justify:"space-around",children:[Object(I.jsx)(E.a,{id:"break-increment",onClick:function(){return e.breakIncrementAction()},shape:"round",size:"small",icon:Object(I.jsx)(A.a,{})}),Object(I.jsx)("div",{id:"break-length",className:"count-num",children:e.break}),Object(I.jsx)(E.a,{id:"break-decrement",onClick:function(){return e.breakDcrementAction()},shape:"round",size:"small",icon:Object(I.jsx)(C.a,{})})]})]}),Object(I.jsxs)(v.a,{span:12,children:[Object(I.jsx)(S.a,{justify:"center",children:Object(I.jsx)("div",{id:"session-label",children:"Session Length"})}),Object(I.jsxs)(S.a,{justify:"space-around",children:[Object(I.jsx)(E.a,{id:"session-increment",onClick:function(){return e.sessionIncrementAction()},shape:"round",size:"small",icon:Object(I.jsx)(A.a,{})}),Object(I.jsx)("div",{id:"session-length",className:"count-num",children:e.session}),Object(I.jsx)(E.a,{id:"session-decrement",onClick:function(){return e.sessionDecrementAction()},shape:"round",size:"small",icon:Object(I.jsx)(C.a,{})})]})]})]}),Object(I.jsx)(S.a,{justify:"center",gutter:[16,24],children:Object(I.jsx)("div",{id:"timer-label",children:e.isSession?"Start working !":"Have a Break !"})}),Object(I.jsx)(S.a,{justify:"center",gutter:[16,24],children:Object(I.jsx)(w,{current:e.current,isSession:e.isSession,session:e.session,break:e.break})}),Object(I.jsxs)("audio",{id:"beep",children:[Object(I.jsx)("source",{src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",type:"audio/wav"}),Object(I.jsx)("source",{src:"%PUBLIC_URL%/build_testable-projects-fcc_audio_BeepSound.wav",type:"audio/wav"})]}),Object(I.jsxs)(S.a,{justify:"space-around",gutter:[16,24],children:[Object(I.jsx)(E.a,{id:"start_stop",onClick:function(){return e.startStopAction()},shape:"round",icon:Object(I.jsx)(R.a,{})}),Object(I.jsx)(E.a,{id:"reset",onClick:function(){return e.resetAction()},shape:"round",icon:Object(I.jsx)(N.a,{})})]})]})}));var _=function(){return Object(I.jsx)(a.a,{store:g,children:Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(D,{})})})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,93)).then((function(n){var t=n.getCLS,s=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),s(e),c(e),r(e),i(e)}))};i.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(_,{})}),document.getElementById("root")),L()}},[[82,1,2]]]);
//# sourceMappingURL=main.293bc81a.chunk.js.map