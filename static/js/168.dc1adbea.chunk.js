"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{6123:function(n,e,t){t.d(e,{z:function(){return o}});var r,a=t(168),i=t(5867),u=t(184),c=i.default.button(r||(r=(0,a.Z)(["\n  height: 36px;\n\n  padding: 10px 20px;\n\n  font-size: 16px;\n\n  border: 1px solid #000;\n  border-radius: 4px;\n\n  background-color: transparent;\n\n  &:focus,\n  &:hover {\n    background-color: #efefef;\n  }\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),o=function(n){var e=n.type,t=void 0===e?"button":e,r=n.onClick,a=n.children;return(0,u.jsx)(c,{type:t,onClick:r,children:a})}},7255:function(n,e,t){t.d(e,{e:function(){return j}});var r,a,i,u,c,o,s=t(168),d=t(7689),p=t(1087),l=t(5867),f=l.default.div(r||(r=(0,s.Z)(["\n  width: 280px;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: #efefef;\n\n  transition: transform 100ms ease;\n\n  &:hover,\n  &focus {\n    transform: scale(1.01);\n  }\n"]))),x=l.default.div(a||(a=(0,s.Z)(["\n  width: 100%;\n  height: 390px;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),h=l.default.div(i||(i=(0,s.Z)(["\n  padding-top: 10px;\n  height: 100px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),v=l.default.h2(u||(u=(0,s.Z)(["\n  font-size: 20px;\n"]))),m=l.default.div(c||(c=(0,s.Z)(["\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n"]))),g=t(184),b=function(n){var e,t=n.movie,r=t.original_title,a=t.poster_path,i=t.release_date,u=t.vote_average;return(0,g.jsxs)(f,{children:[(0,g.jsx)(x,{children:(0,g.jsx)("img",{width:"100%",src:"https://image.tmdb.org/t/p/w342".concat(a),alt:r})}),(0,g.jsxs)(h,{children:[(0,g.jsx)(v,{children:r}),(0,g.jsxs)(m,{children:[(0,g.jsx)("p",{children:(e=i,new Date(e).toLocaleDateString())}),(0,g.jsx)("p",{children:u})]})]})]})};var Z=l.default.ul(o||(o=(0,s.Z)(["\n  margin: auto;\n\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),j=function(n){var e=n.movies,t=(0,d.TH)();return(0,g.jsx)(Z,{children:e.map((function(n){return(0,g.jsx)("li",{children:(0,g.jsx)(p.rU,{to:"/movies/".concat(n.id),state:{from:t},children:(0,g.jsx)(b,{movie:n})})},n.id)}))})}},2032:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,i,u,c,o=t(3433),s=t(5861),d=t(9439),p=t(7757),l=t.n(p),f=t(2791),x=t(1087),h=t(3424),v=t(6123),m=t(3484),g=t(168),b=t(5867),Z=b.default.form(r||(r=(0,g.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n"]))),j=b.default.input(a||(a=(0,g.Z)(["\n  display: block;\n  width: 300px;\n  height: 36px;\n\n  padding: 10px;\n\n  font-size: 16px;\n\n  border: 1px solid #000;\n  border-radius: 4px;\n\n  color: #2e2e2e;\n"]))),w=t(184),y=function(n){var e=n.value,t=n.onSubmit,r=(0,f.useState)(e),a=(0,d.Z)(r,2),i=a[0],u=a[1];return(0,w.jsx)(m.W,{children:(0,w.jsxs)(Z,{onSubmit:function(n){n.preventDefault(),i.trim()&&t(i)},children:[(0,w.jsx)(j,{type:"text",value:i,onChange:function(n){return u(n.target.value)},placeholder:"Please input movie title..."}),(0,w.jsx)(v.z,{type:"submit",children:" Search "})]})})},k=t(7255),S=t(9129),_=t(5218),C=b.default.div(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),z=b.default.div(u||(u=(0,g.Z)(["\n  padding-bottom: 10px;\n\n  display: flex;\n  align-items: baseline;\n\n  border-bottom: 1px solid #2e2e2e;\n"]))),L=b.default.p(c||(c=(0,g.Z)(["\n  width: 200px;\n  margin: 10px;\n\n  text-align: right;\n"]))),U=function(){var n=(0,x.lr)(),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=t.get("query")||"",i=(0,f.useState)([]),u=(0,d.Z)(i,2),c=u[0],p=u[1],g=(0,f.useState)(1),b=(0,d.Z)(g,2),Z=b[0],j=b[1],U=(0,f.useState)(0),q=(0,d.Z)(U,2),D=q[0],A=q[1],N=(0,f.useState)(!1),P=(0,d.Z)(N,2),T=P[0],W=P[1],E=(0,f.useCallback)(function(){var n=(0,s.Z)(l().mark((function n(e,t){var r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return W(!0),n.prev=1,n.next=4,(0,h.UN)(e,t);case 4:0===(r=n.sent).results.length&&_.Am.error("Can't find anything"),p((function(n){return[].concat((0,o.Z)(n),(0,o.Z)(r.results))})),A(r.total_results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),_.Am.error(n.t0);case 13:return n.prev=13,W(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})));return function(e,t){return n.apply(this,arguments)}}(),[]);(0,f.useEffect)((function(){a&&E(a,Z)}),[E,a,Z]);return(0,w.jsx)(m.W,{children:(0,w.jsxs)(C,{children:[(0,w.jsxs)(z,{children:[(0,w.jsx)(y,{onSubmit:function(n){r({query:n}),j(1),A(0),p([])},value:a}),D>0&&(0,w.jsxs)(L,{children:["Found ",D," results."]})]}),c&&(0,w.jsx)(k.e,{movies:c}),(0,w.jsx)(S.a,{isLoading:T}),D>c.length&&(0,w.jsx)(v.z,{onClick:function(){j((function(n){return n+1}))},children:"Load more"})]})})}},3424:function(n,e,t){t.d(e,{JS:function(){return c},M1:function(){return d},TP:function(){return s},UN:function(){return o},tx:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),u=t(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"0c8681096739e4a460f088ce3d19cd4a"};var c=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("/trending/movie/week");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("/search/movie?query=".concat(e,"&page=").concat(t));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.dc1adbea.chunk.js.map