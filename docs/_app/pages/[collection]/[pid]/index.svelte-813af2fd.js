import{_ as e}from"../../../chunks/preload-helper-9f12a5fd.js";import{S as s,i as t,s as r,l as n,f as a,d as o,e as l,t as c,k as i,c as h,a as f,g as d,n as u,b as m,F as p,G as g,O as v,H as _,z as j}from"../../../chunks/vendor-974ea28c.js";import{p as y}from"../../../chunks/stores-c284218b.js";import{d as E}from"../../../chunks/OMG_THIS_IS_HACKY_BUT_ITD_BE_A_DATABASE-85255ead.js";import{a as D,b}from"../../../chunks/paths-2c73d5fe.js";function k(e,s,t){const r=e.slice();return r[6]=s[t][0],r[7]=s[t][1],r}function A(e){let s,t,r,n,g,v,_=e[6]+"",j=e[7]+"",y=E.filter((function(...s){return e[1](e[6],e[7],...s)})).length>1;let D=y&&function(e){let s,t,r,n,i=E.filter(u).length-1+"";function u(...s){return e[2](e[6],e[7],...s)}return{c(){s=l("a"),t=c("("),r=c(i),n=c(" other items.)"),this.h()},l(e){s=h(e,"A",{href:!0});var a=f(s);t=d(a,"("),r=d(a,i),n=d(a," other items.)"),a.forEach(o),this.h()},h(){m(s,"href","../items/"+e[6]+"/"+e[7]+"/")},m(e,o){a(e,s,o),p(s,t),p(s,r),p(s,n)},p(s,t){e=s},d(e){e&&o(s)}}}(e);return{c(){s=l("dt"),t=c(_),r=l("dd"),n=c(j),g=i(),D&&D.c(),v=i(),this.h()},l(e){s=h(e,"DT",{class:!0});var a=f(s);t=d(a,_),a.forEach(o),r=h(e,"DD",{class:!0});var l=f(r);n=d(l,j),g=u(l),D&&D.l(l),v=u(l),l.forEach(o),this.h()},h(){m(s,"class","svelte-11yzdpy"),m(r,"class","svelte-11yzdpy")},m(e,o){a(e,s,o),p(s,t),a(e,r,o),p(r,n),p(r,g),D&&D.m(r,null),p(r,v)},p(s,t){e=s,y&&D.p(e,t)},d(e){e&&o(s),e&&o(r),D&&D.d()}}}function T(e){let s,t=e[7]&&A(e);return{c(){t&&t.c(),s=n()},l(e){t&&t.l(e),s=n()},m(e,r){t&&t.m(e,r),a(e,s,r)},p(e,s){e[7]&&t.p(e,s)},d(e){t&&t.d(e),e&&o(s)}}}function z(e){let s,t,r,n,_,j,y=e[0].label+"",E=Object.entries(e[0]),D=[];for(let a=0;a<E.length;a+=1)D[a]=T(k(e,E,a));return{c(){s=l("h1"),t=c(y),r=i(),n=l("div"),_=i(),j=l("dl");for(let e=0;e<D.length;e+=1)D[e].c();this.h()},l(e){s=h(e,"H1",{});var a=f(s);t=d(a,y),a.forEach(o),r=u(e),n=h(e,"DIV",{id:!0,class:!0}),f(n).forEach(o),_=u(e),j=h(e,"DL",{class:!0});var l=f(j);for(let s=0;s<D.length;s+=1)D[s].l(l);l.forEach(o),this.h()},h(){m(n,"id","osd"),m(n,"class","image-viewer svelte-11yzdpy"),m(j,"class","svelte-11yzdpy")},m(e,o){a(e,s,o),p(s,t),a(e,r,o),a(e,n,o),a(e,_,o),a(e,j,o);for(let s=0;s<D.length;s+=1)D[s].m(j,null)},p(e,[s]){if(1&s){let t;for(E=Object.entries(e[0]),t=0;t<E.length;t+=1){const r=k(e,E,t);D[t]?D[t].p(r,s):(D[t]=T(r),D[t].c(),D[t].m(j,null))}for(;t<D.length;t+=1)D[t].d(1);D.length=E.length}},i:g,o:g,d(e){e&&o(s),e&&o(r),e&&o(n),e&&o(_),e&&o(j),v(D,e)}}}function I(s,t,r){let n;_(s,y,(e=>r(3,n=e)));const{collection:a,pid:o}=n.params,l=E.filter((e=>e.pid==n.params.pid))[0];j((async()=>{const s=e((()=>import("../../../chunks/openseadragon-c1836331.js").then((function(e){return e.o}))),void 0),t=fetch(`${b}/iiif/${o}/manifest.json`).then((e=>e.json())).then((e=>(console.log(e),e.sequences[0].canvases.map((e=>(console.log(e.images[0].resource.service["@id"]),e.images[0].resource.service["@id"]+"/info.json"))))));Promise.all([s,t]).then((([e,s])=>{e.default({id:"osd",prefixUrl:`${D}/assets/openseadragon/images/`,preserveViewport:!0,visibilityRatio:1,minZoomLevel:1,defaultZoomLevel:1,sequenceMode:!0,tileSources:s})}))}));return[l,(e,s,t)=>t[e]==s,(e,s,t)=>t[e]==s]}export default class extends s{constructor(e){super(),t(this,e,I,z,r,{})}}