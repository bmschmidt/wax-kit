import{_ as e}from"../../../chunks/preload-helper-08cc8e69.js";import{S as s,i as t,s as r,l as n,f as o,d as a,e as l,t as c,k as i,c as h,a as f,g as d,n as u,b as m,F as p,G as g,Q as v,H as _,z as j}from"../../../chunks/vendor-33472b1e.js";import{p as b}from"../../../chunks/stores-1cac51d3.js";import{d as y}from"../../../chunks/OMG_THIS_IS_HACKY_BUT_ITD_BE_A_DATABASE-fe59ab0b.js";import{a as E,b as D}from"../../../chunks/paths-2c73d5fe.js";function k(e,s,t){const r=e.slice();return r[6]=s[t][0],r[7]=s[t][1],r}function A(e){let s,t,r,n,g,v,_=e[6]+"",j=e[7]+"",b=y.filter((function(...s){return e[1](e[6],e[7],...s)})).length>1;let E=b&&function(e){let s,t,r,n,i=y.filter(u).length-1+"";function u(...s){return e[2](e[6],e[7],...s)}return{c(){s=l("a"),t=c("("),r=c(i),n=c(" other items.)"),this.h()},l(e){s=h(e,"A",{href:!0});var o=f(s);t=d(o,"("),r=d(o,i),n=d(o," other items.)"),o.forEach(a),this.h()},h(){m(s,"href","../items/"+e[6]+"/"+e[7]+"/")},m(e,a){o(e,s,a),p(s,t),p(s,r),p(s,n)},p(s,t){e=s},d(e){e&&a(s)}}}(e);return{c(){s=l("dt"),t=c(_),r=l("dd"),n=c(j),g=i(),E&&E.c(),v=i(),this.h()},l(e){s=h(e,"DT",{class:!0});var o=f(s);t=d(o,_),o.forEach(a),r=h(e,"DD",{class:!0});var l=f(r);n=d(l,j),g=u(l),E&&E.l(l),v=u(l),l.forEach(a),this.h()},h(){m(s,"class","svelte-11yzdpy"),m(r,"class","svelte-11yzdpy")},m(e,a){o(e,s,a),p(s,t),o(e,r,a),p(r,n),p(r,g),E&&E.m(r,null),p(r,v)},p(s,t){e=s,b&&E.p(e,t)},d(e){e&&a(s),e&&a(r),E&&E.d()}}}function T(e){let s,t=e[7]&&A(e);return{c(){t&&t.c(),s=n()},l(e){t&&t.l(e),s=n()},m(e,r){t&&t.m(e,r),o(e,s,r)},p(e,s){e[7]&&t.p(e,s)},d(e){t&&t.d(e),e&&a(s)}}}function z(e){let s,t,r,n,_,j,b=e[0].label+"",y=Object.entries(e[0]),E=[];for(let o=0;o<y.length;o+=1)E[o]=T(k(e,y,o));return{c(){s=l("h1"),t=c(b),r=i(),n=l("div"),_=i(),j=l("dl");for(let e=0;e<E.length;e+=1)E[e].c();this.h()},l(e){s=h(e,"H1",{});var o=f(s);t=d(o,b),o.forEach(a),r=u(e),n=h(e,"DIV",{id:!0,class:!0}),f(n).forEach(a),_=u(e),j=h(e,"DL",{class:!0});var l=f(j);for(let s=0;s<E.length;s+=1)E[s].l(l);l.forEach(a),this.h()},h(){m(n,"id","osd"),m(n,"class","image-viewer svelte-11yzdpy"),m(j,"class","svelte-11yzdpy")},m(e,a){o(e,s,a),p(s,t),o(e,r,a),o(e,n,a),o(e,_,a),o(e,j,a);for(let s=0;s<E.length;s+=1)E[s].m(j,null)},p(e,[s]){if(1&s){let t;for(y=Object.entries(e[0]),t=0;t<y.length;t+=1){const r=k(e,y,t);E[t]?E[t].p(r,s):(E[t]=T(r),E[t].c(),E[t].m(j,null))}for(;t<E.length;t+=1)E[t].d(1);E.length=y.length}},i:g,o:g,d(e){e&&a(s),e&&a(r),e&&a(n),e&&a(_),e&&a(j),v(E,e)}}}function I(s,t,r){let n;_(s,b,(e=>r(3,n=e)));const{collection:o,pid:a}=n.params,l=y.filter((e=>e.pid==n.params.pid))[0]||{label:"Not found"};j((async()=>{const s=e((()=>import("../../../chunks/openseadragon-c1836331.js").then((function(e){return e.o}))),[]),t=fetch(`${D}/iiif/${a}/manifest.json`).then((e=>e.json())).then((e=>(console.log(e),e.sequences[0].canvases.map((e=>(console.log(e.images[0].resource.service["@id"]),e.images[0].resource.service["@id"]+"/info.json"))))));Promise.all([s,t]).then((([e,s])=>{e.default({id:"osd",prefixUrl:`${E}/assets/openseadragon/images/`,preserveViewport:!0,visibilityRatio:1,minZoomLevel:1,defaultZoomLevel:1,sequenceMode:!0,tileSources:s})}))}));return[l,(e,s,t)=>t[e]==s,(e,s,t)=>t[e]==s]}export default class extends s{constructor(e){super(),t(this,e,I,z,r,{})}}