import{_ as e,a as s,b as t}from"../../../chunks/paths-f6ce10f8.js";import{S as r,i as n,s as a,l as o,f as l,d as c,e as i,t as h,k as f,c as d,a as u,g as m,n as p,b as g,F as v,G as _,O as j,H as y,z as E}from"../../../chunks/vendor-974ea28c.js";import{p as D}from"../../../chunks/stores-c284218b.js";import{d as b}from"../../../chunks/OMG_THIS_IS_HACKY_BUT_ITD_BE_A_DATABASE-85255ead.js";function A(e,s,t){const r=e.slice();return r[6]=s[t][0],r[7]=s[t][1],r}function k(e){let s,t,r,n,a,o,_=e[6]+"",j=e[7]+"",y=b.filter((function(...s){return e[1](e[6],e[7],...s)})).length>1;let E=y&&function(e){let s,t,r,n,a=b.filter(o).length-1+"";function o(...s){return e[2](e[6],e[7],...s)}return{c(){s=i("a"),t=h("("),r=h(a),n=h(" other items.)"),this.h()},l(e){s=d(e,"A",{href:!0});var o=u(s);t=m(o,"("),r=m(o,a),n=m(o," other items.)"),o.forEach(c),this.h()},h(){g(s,"href","../items/"+e[6]+"/"+e[7]+"/")},m(e,a){l(e,s,a),v(s,t),v(s,r),v(s,n)},p(s,t){e=s},d(e){e&&c(s)}}}(e);return{c(){s=i("dt"),t=h(_),r=i("dd"),n=h(j),a=f(),E&&E.c(),o=f(),this.h()},l(e){s=d(e,"DT",{class:!0});var l=u(s);t=m(l,_),l.forEach(c),r=d(e,"DD",{class:!0});var i=u(r);n=m(i,j),a=p(i),E&&E.l(i),o=p(i),i.forEach(c),this.h()},h(){g(s,"class","svelte-11yzdpy"),g(r,"class","svelte-11yzdpy")},m(e,c){l(e,s,c),v(s,t),l(e,r,c),v(r,n),v(r,a),E&&E.m(r,null),v(r,o)},p(s,t){e=s,y&&E.p(e,t)},d(e){e&&c(s),e&&c(r),E&&E.d()}}}function T(e){let s,t=e[7]&&k(e);return{c(){t&&t.c(),s=o()},l(e){t&&t.l(e),s=o()},m(e,r){t&&t.m(e,r),l(e,s,r)},p(e,s){e[7]&&t.p(e,s)},d(e){t&&t.d(e),e&&c(s)}}}function z(e){let s,t,r,n,a,o,y=e[0].label+"",E=Object.entries(e[0]),D=[];for(let l=0;l<E.length;l+=1)D[l]=T(A(e,E,l));return{c(){s=i("h1"),t=h(y),r=f(),n=i("div"),a=f(),o=i("dl");for(let e=0;e<D.length;e+=1)D[e].c();this.h()},l(e){s=d(e,"H1",{});var l=u(s);t=m(l,y),l.forEach(c),r=p(e),n=d(e,"DIV",{id:!0,class:!0}),u(n).forEach(c),a=p(e),o=d(e,"DL",{class:!0});var i=u(o);for(let s=0;s<D.length;s+=1)D[s].l(i);i.forEach(c),this.h()},h(){g(n,"id","osd"),g(n,"class","image-viewer svelte-11yzdpy"),g(o,"class","svelte-11yzdpy")},m(e,c){l(e,s,c),v(s,t),l(e,r,c),l(e,n,c),l(e,a,c),l(e,o,c);for(let s=0;s<D.length;s+=1)D[s].m(o,null)},p(e,[s]){if(1&s){let t;for(E=Object.entries(e[0]),t=0;t<E.length;t+=1){const r=A(e,E,t);D[t]?D[t].p(r,s):(D[t]=T(r),D[t].c(),D[t].m(o,null))}for(;t<D.length;t+=1)D[t].d(1);D.length=E.length}},i:_,o:_,d(e){e&&c(s),e&&c(r),e&&c(n),e&&c(a),e&&c(o),j(D,e)}}}function I(r,n,a){let o;y(r,D,(e=>a(3,o=e)));const{collection:l,pid:c}=o.params,i=b.filter((e=>e.pid==o.params.pid))[0];E((async()=>{const r=e((()=>import("../../../chunks/openseadragon-c1836331.js").then((function(e){return e.o}))),void 0),n=fetch(`${t}/iiif/${c}/manifest.json`).then((e=>e.json())).then((e=>(console.log(e),e.sequences[0].canvases.map((e=>(console.log(e.images[0].resource.service["@id"]),e.images[0].resource.service["@id"]+"/info.json"))))));Promise.all([r,n]).then((([e,t])=>{e.default({id:"osd",prefixUrl:`${s}/assets/openseadragon/images/`,preserveViewport:!0,visibilityRatio:1,minZoomLevel:1,defaultZoomLevel:1,sequenceMode:!0,tileSources:t})}))}));return[i,(e,s,t)=>t[e]==s,(e,s,t)=>t[e]==s]}export default class extends r{constructor(e){super(),n(this,e,I,z,a,{})}}