import{S as t,i as e,s,O as l,k as n,e as a,t as o,l as r,N as c,d as i,n as u,c as f,a as h,g as m,f as d,F as p,P as g,v as k,r as b,H as v,G as $,j as _,m as A,o as j,w,b as I,B,u as E,Q as T}from"../../../../chunks/vendor-33472b1e.js";import{d as H}from"../../../../chunks/OMG_THIS_IS_HACKY_BUT_ITD_BE_A_DATABASE-bda68cd3.js";import S from"../../ClickableThumb.svelte-619db283.js";import{p as x}from"../../../../chunks/stores-1cac51d3.js";import"../../../../chunks/paths-2c73d5fe.js";function C(t,e,s){const l=t.slice();return l[4]=e[s],l}function D(t){return{c:$,l:$,m:$,p:$,i:$,o:$,d:$}}function y(t){let e,s,l=t[2],n=[];for(let a=0;a<l.length;a+=1)n[a]=G(C(t,l,a));const o=t=>b(n[t],1,1,(()=>{n[t]=null}));return{c(){e=a("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=f(t,"DIV",{class:!0});var s=h(e);for(let e=0;e<n.length;e+=1)n[e].l(s);s.forEach(i),this.h()},h(){I(e,"class","gallery svelte-13h5z40")},m(t,l){d(t,e,l);for(let s=0;s<n.length;s+=1)n[s].m(e,null);s=!0},p(t,s){if(4&s){let a;for(l=t[2],a=0;a<l.length;a+=1){const o=C(t,l,a);n[a]?(n[a].p(o,s),k(n[a],1)):(n[a]=G(o),n[a].c(),k(n[a],1),n[a].m(e,null))}for(B(),a=l.length;a<n.length;a+=1)o(a);E()}},i(t){if(!s){for(let t=0;t<l.length;t+=1)k(n[t]);s=!0}},o(t){n=n.filter(Boolean);for(let e=0;e<n.length;e+=1)b(n[e]);s=!1},d(t){t&&i(e),T(n,t)}}}function G(t){let e,s;return e=new S({props:{datum:t[4],pid:t[4].pid}}),{c(){_(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p:$,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function N(t){let e;return{c(){e=o("Waiting for data....")},l(t){e=m(t,"Waiting for data....")},m(t,s){d(t,e,s)},p:$,i:$,o:$,d(t){t&&i(e)}}}function O(t){let e,s,v,$,_,A,j,w,I,B;document.title=e="Items where "+t[0]+" is "+t[1];let E={ctx:t,current:null,token:null,hasCatch:!1,pending:N,then:y,catch:D,blocks:[,,,]};return l(H,E),{c(){s=n(),v=a("h1"),$=o("All items where "),_=o(t[0]),A=o(" is "),j=o(t[1]),w=n(),I=r(),E.block.c()},l(e){c('[data-svelte="svelte-79ceyu"]',document.head).forEach(i),s=u(e),v=f(e,"H1",{});var l=h(v);$=m(l,"All items where "),_=m(l,t[0]),A=m(l," is "),j=m(l,t[1]),l.forEach(i),w=u(e),I=r(),E.block.l(e)},m(t,e){d(t,s,e),d(t,v,e),p(v,$),p(v,_),p(v,A),p(v,j),d(t,w,e),d(t,I,e),E.block.m(t,E.anchor=e),E.mount=()=>I.parentNode,E.anchor=I,B=!0},p(s,[l]){t=s,(!B||3&l)&&e!==(e="Items where "+t[0]+" is "+t[1])&&(document.title=e),g(E,t,l)},i(t){B||(k(E.block),B=!0)},o(t){for(let e=0;e<3;e+=1){const t=E.blocks[e];b(t)}B=!1},d(t){t&&i(s),t&&i(v),t&&i(w),t&&i(I),E.block.d(t),E.token=null,E=null}}}function W(t,e,s){let l;v(t,x,(t=>s(3,l=t)));const{field:n,value:a}=l.params,o=H.filter((t=>t[n]==a));return[n,a,o]}export default class extends t{constructor(t){super(),e(this,t,W,O,s,{})}}