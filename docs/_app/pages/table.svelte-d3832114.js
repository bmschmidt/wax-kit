import{S as t,i as l,s as n,O as e,k as r,e as a,t as o,l as c,N as h,d as s,n as f,c as u,a as i,g,f as d,F as m,P as p,G as b,Q as v,b as k}from"../chunks/vendor-33472b1e.js";import{d as E}from"../chunks/OMG_THIS_IS_HACKY_BUT_ITD_BE_A_DATABASE-fe59ab0b.js";function T(t,l,n){const e=t.slice();return e[2]=l[n],e}function _(t,l,n){const e=t.slice();return e[5]=l[n],e}function D(t,l,n){const e=t.slice();return e[5]=l[n],e}function A(t){return{c:b,l:b,m:b,p:b,d:b}}function B(t){let l,n,e,o,c=t[0],h=[];for(let r=0;r<c.length;r+=1)h[r]=H(D(t,c,r));let g=E,p=[];for(let r=0;r<g.length;r+=1)p[r]=S(T(t,g,r));return{c(){l=a("div"),n=a("table"),e=a("tr");for(let t=0;t<h.length;t+=1)h[t].c();o=r();for(let t=0;t<p.length;t+=1)p[t].c();this.h()},l(t){l=u(t,"DIV",{class:!0});var r=i(l);n=u(r,"TABLE",{});var a=i(n);e=u(a,"TR",{});var c=i(e);for(let l=0;l<h.length;l+=1)h[l].l(c);c.forEach(s),o=f(a);for(let l=0;l<p.length;l+=1)p[l].l(a);a.forEach(s),r.forEach(s),this.h()},h(){k(l,"class","table")},m(t,r){d(t,l,r),m(l,n),m(n,e);for(let l=0;l<h.length;l+=1)h[l].m(e,null);m(n,o);for(let l=0;l<p.length;l+=1)p[l].m(n,null)},p(t,l){if(1&l){let n;for(c=t[0],n=0;n<c.length;n+=1){const r=D(t,c,n);h[n]?h[n].p(r,l):(h[n]=H(r),h[n].c(),h[n].m(e,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=c.length}if(1&l){let e;for(g=E,e=0;e<g.length;e+=1){const r=T(t,g,e);p[e]?p[e].p(r,l):(p[e]=S(r),p[e].c(),p[e].m(n,null))}for(;e<p.length;e+=1)p[e].d(1);p.length=g.length}},d(t){t&&s(l),v(h,t),v(p,t)}}}function H(t){let l,n,e=t[5]+"";return{c(){l=a("th"),n=o(e)},l(t){l=u(t,"TH",{});var r=i(l);n=g(r,e),r.forEach(s)},m(t,e){d(t,l,e),m(l,n)},p:b,d(t){t&&s(l)}}}function I(t){let l,n,e=t[2][t[5]]+"";return{c(){l=a("td"),n=o(e)},l(t){l=u(t,"TD",{});var r=i(l);n=g(r,e),r.forEach(s)},m(t,e){d(t,l,e),m(l,n)},p:b,d(t){t&&s(l)}}}function S(t){let l,n,e=t[0],o=[];for(let r=0;r<e.length;r+=1)o[r]=I(_(t,e,r));return{c(){l=a("tr");for(let t=0;t<o.length;t+=1)o[t].c();n=r()},l(t){l=u(t,"TR",{});var e=i(l);for(let l=0;l<o.length;l+=1)o[l].l(e);n=f(e),e.forEach(s)},m(t,e){d(t,l,e);for(let n=0;n<o.length;n+=1)o[n].m(l,null);m(l,n)},p(t,r){if(1&r){let a;for(e=t[0],a=0;a<e.length;a+=1){const c=_(t,e,a);o[a]?o[a].p(c,r):(o[a]=I(c),o[a].c(),o[a].m(l,n))}for(;a<o.length;a+=1)o[a].d(1);o.length=e.length}},d(t){t&&s(l),v(o,t)}}}function j(t){let l;return{c(){l=o("Waiting for data....")},l(t){l=g(t,"Waiting for data....")},m(t,n){d(t,l,n)},p:b,d(t){t&&s(l)}}}function x(t){let l,n,v,k,T,_={ctx:t,current:null,token:null,hasCatch:!1,pending:j,then:B,catch:A};return e(E,_),{c(){l=r(),n=a("h1"),v=o("Data table"),k=r(),T=c(),_.block.c(),this.h()},l(t){h('[data-svelte="svelte-7kviul"]',document.head).forEach(s),l=f(t),n=u(t,"H1",{});var e=i(n);v=g(e,"Data table"),e.forEach(s),k=f(t),T=c(),_.block.l(t),this.h()},h(){document.title="Data table"},m(t,e){d(t,l,e),d(t,n,e),m(n,v),d(t,k,e),d(t,T,e),_.block.m(t,_.anchor=e),_.mount=()=>T.parentNode,_.anchor=T},p(l,[n]){p(_,t=l,n)},i:b,o:b,d(t){t&&s(l),t&&s(n),t&&s(k),t&&s(T),_.block.d(t),_.token=null,_=null}}}function O(t){return[Object.keys(E[0])]}export default class extends t{constructor(t){super(),l(this,t,O,x,n,{})}}
