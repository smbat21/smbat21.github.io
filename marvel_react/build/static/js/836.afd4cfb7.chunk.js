"use strict";(self.webpackChunkmarvel_react=self.webpackChunkmarvel_react||[]).push([[836],{704:function(e,s,n){n.r(s),n.d(s,{default:function(){return j}});var c=n(433),t=n(439),i=n(791),a=n(87),r=n(394),l=n(613),m=n(482),o=n(184),u=function(){var e=(0,i.useState)([]),s=(0,t.Z)(e,2),n=s[0],u=s[1],d=(0,i.useState)(!1),_=(0,t.Z)(d,2),x=_[0],j=_[1],v=(0,i.useState)(210),f=(0,t.Z)(v,2),g=f[0],h=f[1],p=(0,i.useState)(!1),b=(0,t.Z)(p,2),N=(b[0],b[1]),Z=(0,m.Z)(),k=Z.loading,A=Z.error,S=Z.getAllComics;(0,i.useEffect)((function(){w(g,!0)}),[]);var w=function(e,s){j(!s),S(e).then(C)},C=function(e){var s=!1;e.length<8&&(s=!0),u([].concat((0,c.Z)(n),(0,c.Z)(e))),j(!1),h(g+8),N(s)};var y=function(e){var s=e.map((function(e,s){return(0,o.jsx)("li",{className:"comics__item",children:(0,o.jsxs)(a.rU,{to:"/comics/".concat(e.id),children:[(0,o.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),(0,o.jsx)("div",{className:"comics__item-name",children:e.title}),(0,o.jsx)("div",{className:"comics__item-price",children:e.price})]})},s)}));return(0,o.jsx)("ul",{className:"comics__grid",children:s})}(n),E=A?(0,o.jsx)(l.Z,{}):null,F=k&&!x?(0,o.jsx)(r.Z,{}):null;return(0,o.jsxs)("div",{className:"comics__list",children:[E,F,y,(0,o.jsx)("button",{className:"button button__main button__long",onClick:function(){return w(g)},children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})},d=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",_=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",x=function(){return(0,o.jsxs)("div",{className:"app__banner",children:[(0,o.jsx)("img",{src:d,alt:"Avengers"}),(0,o.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,o.jsx)("br",{}),"Stay tuned!"]}),(0,o.jsx)("img",{src:_,alt:"Avengers logo"})]})},j=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{}),(0,o.jsx)(u,{})]})}}}]);
//# sourceMappingURL=836.afd4cfb7.chunk.js.map