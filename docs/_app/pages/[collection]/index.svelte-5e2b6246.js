import{S as t,i as e,s as n,O as s,k as l,e as a,l as o,N as r,d as c,n as i,c as u,a as f,b as h,f as d,F as m,V as p,W as g,P as k,v as b,r as $,H as v,G as _,j,m as y,o as E,w as I,B as T,u as x,Q as A,t as B,g as C}from"../../chunks/vendor-33472b1e.js";import{d as D}from"../../chunks/OMG_THIS_IS_HACKY_BUT_ITD_BE_A_DATABASE-bda68cd3.js";import S from"../items/ClickableThumb.svelte-02d4bc96.js";import{p as w}from"../../chunks/stores-1cac51d3.js";import"../../chunks/paths-2c73d5fe.js";function H(t,e,n){const s=t.slice();return s[7]=e[n],s}function N(t){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function O(t){let e,n,s=t[1],l=[];for(let a=0;a<s.length;a+=1)l[a]=V(H(t,s,a));const o=t=>$(l[t],1,1,(()=>{l[t]=null}));return{c(){e=a("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=u(t,"DIV",{class:!0});var n=f(e);for(let e=0;e<l.length;e+=1)l[e].l(n);n.forEach(c),this.h()},h(){h(e,"class","gallery svelte-h2y16t")},m(t,s){d(t,e,s);for(let n=0;n<l.length;n+=1)l[n].m(e,null);n=!0},p(t,n){if(2&n){let a;for(s=t[1],a=0;a<s.length;a+=1){const o=H(t,s,a);l[a]?(l[a].p(o,n),b(l[a],1)):(l[a]=V(o),l[a].c(),b(l[a],1),l[a].m(e,null))}for(T(),a=s.length;a<l.length;a+=1)o(a);x()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)b(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let e=0;e<l.length;e+=1)$(l[e]);n=!1},d(t){t&&c(e),A(l,t)}}}function V(t){let e,n;return e=new S({props:{datum:t[7],pid:t[7].pid}}),{c(){j(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},p(t,n){const s={};2&n&&(s.datum=t[7]),2&n&&(s.pid=t[7].pid),e.$set(s)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function W(t){let e;return{c(){e=B("Waiting for data....")},l(t){e=C(t,"Waiting for data....")},m(t,n){d(t,e,n)},p:_,i:_,o:_,d(t){t&&c(e)}}}function G(t){let e,n,v,_,j,y,E,I,T={ctx:t,current:null,token:null,hasCatch:!1,pending:W,then:O,catch:N,blocks:[,,,]};return s(D,T),{c(){e=l(),n=a("div"),v=a("input"),_=l(),j=o(),T.block.c(),this.h()},l(t){r('[data-svelte="svelte-19kvbf7"]',document.head).forEach(c),e=i(t),n=u(t,"DIV",{id:!0,class:!0});var s=f(n);v=u(s,"INPUT",{}),s.forEach(c),_=i(t),j=o(),T.block.l(t),this.h()},h(){document.title="Collections index",h(n,"id","filter"),h(n,"class","svelte-h2y16t")},m(s,l){d(s,e,l),d(s,n,l),m(n,v),p(v,t[0]),d(s,_,l),d(s,j,l),T.block.m(s,T.anchor=l),T.mount=()=>j.parentNode,T.anchor=j,y=!0,E||(I=g(v,"input",t[3]),E=!0)},p(e,[n]){t=e,1&n&&v.value!==t[0]&&p(v,t[0]),k(T,t,n)},i(t){y||(b(T.block),y=!0)},o(t){for(let e=0;e<3;e+=1){const t=T.blocks[e];$(t)}y=!1},d(t){t&&c(e),t&&c(n),t&&c(_),t&&c(j),T.block.d(t),T.token=null,T=null,E=!1,I()}}}function P(t,e,n){let s,l,a;v(t,w,(t=>n(4,a=t)));const{collection:o,pid:r}=a.params;let c="";return t.$$.update=()=>{1&t.$$.dirty&&n(2,s=function(t){if(t.collection!==o)return!1;if(""===c)return!0;const e=new RegExp(c);for(let n of Object.keys(t))if(t[n].match&&t[n].match(e))return!0;return!1}),4&t.$$.dirty&&n(1,l=D.filter((t=>s(t))))},[c,l,s,function(){c=this.value,n(0,c)}]}export default class extends t{constructor(t){super(),e(this,t,P,G,n,{})}}
