import{S as t,i as n,s as a,l,f as e,G as r,d as s,t as c,g as i,h as o,O as u,e as d,c as f,a as h,b as m,F as p,P as b,k as g,n as k,T as v,U as I}from"../../chunks/vendor-33472b1e.js";import{b as x}from"../../chunks/paths-2c73d5fe.js";import{d as _}from"../../chunks/OMG_THIS_IS_HACKY_BUT_ITD_BE_A_DATABASE-bda68cd3.js";let A="https://iiif.benschmidt.org/iiif/2/";const E=_,j={};async function T(t){const n=await async function(t){if(j[t])return j[t];let n;n=E.filter((n=>n.pid==t))[0]["wax:images"];const a=n.map((t=>`${A}/${t}/info.json`)).map((t=>fetch(t).then((t=>t.json())))),l=await Promise.all(a);return j[t]=l,l}(t);if(0===n.length)return"http://made-up.com/default.png";return`${n[0]["@id"]}/full/250,/0/default.jpg`}function C(t){let n,a,l;return{c(){n=c("Could not find an id for "),a=c(t[0]),l=c(";")},l(e){n=i(e,"Could not find an id for "),a=i(e,t[0]),l=i(e,";")},m(t,r){e(t,n,r),e(t,a,r),e(t,l,r)},p(t,n){1&n&&o(a,t[0])},d(t){t&&s(n),t&&s(a),t&&s(l)}}}function G(t){let n,a,l,r,c,i={ctx:t,current:null,token:null,hasCatch:!1,pending:S,then:w,catch:$,value:3};return u(r=t[2],i),{c(){n=d("div"),a=d("a"),l=d("figure"),i.block.c(),this.h()},l(t){n=f(t,"DIV",{class:!0,id:!0});var e=h(n);a=f(e,"A",{href:!0});var r=h(a);l=f(r,"FIGURE",{});var c=h(l);i.block.l(c),c.forEach(s),r.forEach(s),e.forEach(s),this.h()},h(){m(a,"href",c=x+"/"+t[1].collection+"/"+t[0]+"/"),m(n,"class","thumb svelte-4dxg8"),m(n,"id",t[0])},m(t,r){e(t,n,r),p(n,a),p(a,l),i.block.m(l,i.anchor=null),i.mount=()=>l,i.anchor=null},p(l,e){t=l,i.ctx=t,4&e&&r!==(r=t[2])&&u(r,i)||b(i,t,e),3&e&&c!==(c=x+"/"+t[1].collection+"/"+t[0]+"/")&&m(a,"href",c),1&e&&m(n,"id",t[0])},d(t){t&&s(n),i.block.d(),i.token=null,i=null}}}function $(t){return{c:r,l:r,m:r,p:r,d:r}}function w(t){let n,a,l,r,u,b,x=t[1].label+"";return{c(){n=d("img"),r=g(),u=d("figcaption"),b=c(x),this.h()},l(t){n=f(t,"IMG",{src:!0,alt:!0,style:!0}),r=k(t),u=f(t,"FIGCAPTION",{});var a=h(u);b=i(a,x),a.forEach(s),this.h()},h(){v(n.src,a=t[3])||m(n,"src",a),m(n,"alt",l="Improve alt-text: "+t[1].label),I(n,"width","100%")},m(t,a){e(t,n,a),e(t,r,a),e(t,u,a),p(u,b)},p(t,e){4&e&&!v(n.src,a=t[3])&&m(n,"src",a),2&e&&l!==(l="Improve alt-text: "+t[1].label)&&m(n,"alt",l),2&e&&x!==(x=t[1].label+"")&&o(b,x)},d(t){t&&s(n),t&&s(r),t&&s(u)}}}function S(t){let n;return{c(){n=c("[Looking for thumbnail]")},l(t){n=i(t,"[Looking for thumbnail]")},m(t,a){e(t,n,a)},p:r,d(t){t&&s(n)}}}function y(t){let n;function a(t,n){return t[1]&&t[0]?G:C}let c=a(t),i=c(t);return{c(){i.c(),n=l()},l(t){i.l(t),n=l()},m(t,a){i.m(t,a),e(t,n,a)},p(t,[l]){c===(c=a(t))&&i?i.p(t,l):(i.d(1),i=c(t),i&&(i.c(),i.m(n.parentNode,n)))},i:r,o:r,d(t){i.d(t),t&&s(n)}}}function B(t,n,a){let l,{datum:e}=n,{pid:r}=n;return r?l=T(r):null==e||(r=e.pid),t.$$set=t=>{"datum"in t&&a(1,e=t.datum),"pid"in t&&a(0,r=t.pid)},[r,e,l]}export default class extends t{constructor(t){super(),n(this,t,B,y,a,{datum:1,pid:0})}}
