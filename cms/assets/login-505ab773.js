import{d as lt}from"./pinia-008b66ec.js";import{l as B,L as pe,E as Ke,r as ve}from"./index-1cfa6bc8.js";import{a0 as ut,u as Y,N as M,a1 as Qe,a2 as ft,d as We,O as q,h as Fe,a3 as ue,M as ht,L as dt}from"./_plugin-vue_export-helper-33f8d7e1.js";import"./base-fea03ce8.js";const pt="modulepreload",mt=function(e){return"/"+e},Ce={},T=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(c=>{if(c=mt(c),c in Ce)return;Ce[c]=!0;const h=c.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(!!r)for(let s=o.length-1;s>=0;s--){const l=o[s];if(l.href===c&&(!h||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":pt,h||(u.as="script",u.crossOrigin=""),u.href=c,document.head.appendChild(u),h)return new Promise((s,l)=>{u.addEventListener("load",s),u.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>t())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const H=typeof window<"u";function gt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const b=Object.assign;function fe(e,t){const n={};for(const r in t){const o=t[r];n[r]=j(o)?o.map(e):e(o)}return n}const X=()=>{},j=Array.isArray,_t=/\/$/,vt=e=>e.replace(_t,"");function he(e,t,n="/"){let r,o={},c="",h="";const m=t.indexOf("#");let a=t.indexOf("?");return m<a&&m>=0&&(a=-1),a>-1&&(r=t.slice(0,a),c=t.slice(a+1,m>-1?m:t.length),o=e(c)),m>-1&&(r=r||t.slice(0,m),h=t.slice(m,t.length)),r=Pt(r??t,n),{fullPath:r+(c&&"?")+c+h,path:r,query:o,hash:h}}function yt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ae(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Et(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&G(t.matched[r],n.matched[o])&&Ye(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ye(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Rt(e[n],t[n]))return!1;return!0}function Rt(e,t){return j(e)?Le(e,t):j(t)?Le(t,e):e===t}function Le(e,t){return j(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Pt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,c,h;for(c=0;c<r.length;c++)if(h=r[c],h!==".")if(h==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(c-(c===r.length?1:0)).join("/")}var J;(function(e){e.pop="pop",e.push="push"})(J||(J={}));var Z;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Z||(Z={}));function bt(e){if(!e)if(H){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),vt(e)}const St=/^[^#]+#/;function Ot(e,t){return e.replace(St,"#")+t}function wt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const re=()=>({left:window.pageXOffset,top:window.pageYOffset});function kt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=wt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Te(e,t){return(history.state?history.state.position-t:-1)+e}const me=new Map;function Ct(e,t){me.set(e,t)}function At(e){const t=me.get(e);return me.delete(e),t}let Lt=()=>location.protocol+"//"+location.host;function Xe(e,t){const{pathname:n,search:r,hash:o}=t,c=e.indexOf("#");if(c>-1){let m=o.includes(e.slice(c))?e.slice(c).length:1,a=o.slice(m);return a[0]!=="/"&&(a="/"+a),Ae(a,"")}return Ae(n,e)+r+o}function Tt(e,t,n,r){let o=[],c=[],h=null;const m=({state:f})=>{const g=Xe(e,location),y=n.value,w=t.value;let O=0;if(f){if(n.value=g,t.value=f,h&&h===y){h=null;return}O=w?f.position-w.position:0}else r(g);o.forEach(E=>{E(n.value,y,{delta:O,type:J.pop,direction:O?O>0?Z.forward:Z.back:Z.unknown})})};function a(){h=n.value}function u(f){o.push(f);const g=()=>{const y=o.indexOf(f);y>-1&&o.splice(y,1)};return c.push(g),g}function s(){const{history:f}=window;f.state&&f.replaceState(b({},f.state,{scroll:re()}),"")}function l(){for(const f of c)f();c=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",s),{pauseListeners:a,listen:u,destroy:l}}function Ie(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?re():null}}function It(e){const{history:t,location:n}=window,r={value:Xe(e,n)},o={value:t.state};o.value||c(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function c(a,u,s){const l=e.indexOf("#"),f=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+a:Lt()+e+a;try{t[s?"replaceState":"pushState"](u,"",f),o.value=u}catch(g){console.error(g),n[s?"replace":"assign"](f)}}function h(a,u){const s=b({},t.state,Ie(o.value.back,a,o.value.forward,!0),u,{position:o.value.position});c(a,s,!0),r.value=a}function m(a,u){const s=b({},o.value,t.state,{forward:a,scroll:re()});c(s.current,s,!0);const l=b({},Ie(r.value,a,null),{position:s.position+1},u);c(a,l,!1),r.value=a}return{location:r,state:o,push:m,replace:h}}function Mt(e){e=bt(e);const t=It(e),n=Tt(e,t.state,t.location,t.replace);function r(c,h=!0){h||n.pauseListeners(),history.go(c)}const o=b({location:"",base:e,go:r,createHref:Ot.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function jt(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Mt(e)}function xt(e){return typeof e=="string"||e&&typeof e=="object"}function Ze(e){return typeof e=="string"||typeof e=="symbol"}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Je=Symbol("");var Me;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Me||(Me={}));function U(e,t){return b(new Error,{type:e,[Je]:!0},t)}function N(e,t){return e instanceof Error&&Je in e&&(t==null||!!(e.type&t))}const je="[^/]+?",Nt={sensitive:!1,strict:!1,start:!0,end:!0},$t=/[.+*?^${}()[\]/\\]/g;function Vt(e,t){const n=b({},Nt,t),r=[];let o=n.start?"^":"";const c=[];for(const u of e){const s=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let l=0;l<u.length;l++){const f=u[l];let g=40+(n.sensitive?.25:0);if(f.type===0)l||(o+="/"),o+=f.value.replace($t,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:w,optional:O,regexp:E}=f;c.push({name:y,repeatable:w,optional:O});const P=E||je;if(P!==je){g+=10;try{new RegExp(`(${P})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+I.message)}}let A=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;l||(A=O&&u.length<2?`(?:/${A})`:"/"+A),O&&(A+="?"),o+=A,g+=20,O&&(g+=-8),w&&(g+=-20),P===".*"&&(g+=-50)}s.push(g)}r.push(s)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function m(u){const s=u.match(h),l={};if(!s)return null;for(let f=1;f<s.length;f++){const g=s[f]||"",y=c[f-1];l[y.name]=g&&y.repeatable?g.split("/"):g}return l}function a(u){let s="",l=!1;for(const f of e){(!l||!s.endsWith("/"))&&(s+="/"),l=!1;for(const g of f)if(g.type===0)s+=g.value;else if(g.type===1){const{value:y,repeatable:w,optional:O}=g,E=y in u?u[y]:"";if(j(E)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=j(E)?E.join("/"):E;if(!P)if(O)f.length<2&&(s.endsWith("/")?s=s.slice(0,-1):l=!0);else throw new Error(`Missing required param "${y}"`);s+=P}}return s||"/"}return{re:h,score:r,keys:c,parse:m,stringify:a}}function zt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Bt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const c=zt(r[n],o[n]);if(c)return c;n++}if(Math.abs(o.length-r.length)===1){if(xe(r))return 1;if(xe(o))return-1}return o.length-r.length}function xe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Dt={type:0,value:""},Ht=/[a-zA-Z0-9_]/;function qt(e){if(!e)return[[]];if(e==="/")return[[Dt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const o=[];let c;function h(){c&&o.push(c),c=[]}let m=0,a,u="",s="";function l(){u&&(n===0?c.push({type:0,value:u}):n===1||n===2||n===3?(c.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:u,regexp:s,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}for(;m<e.length;){if(a=e[m++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(u&&l(),h()):a===":"?(l(),n=1):f();break;case 4:f(),n=r;break;case 1:a==="("?n=2:Ht.test(a)?f():(l(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&m--);break;case 2:a===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+a:n=3:s+=a;break;case 3:l(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&m--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),l(),h(),o}function Gt(e,t,n){const r=Vt(qt(e.path),n),o=b(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Ut(e,t){const n=[],r=new Map;t=Ve({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function c(s,l,f){const g=!f,y=Kt(s);y.aliasOf=f&&f.record;const w=Ve(t,s),O=[y];if("alias"in s){const A=typeof s.alias=="string"?[s.alias]:s.alias;for(const I of A)O.push(b({},y,{components:f?f.record.components:y.components,path:I,aliasOf:f?f.record:y}))}let E,P;for(const A of O){const{path:I}=A;if(l&&I[0]!=="/"){const z=l.record.path,x=z[z.length-1]==="/"?"":"/";A.path=l.record.path+(I&&x+I)}if(E=Gt(A,l,w),f?f.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),g&&s.name&&!$e(E)&&h(s.name)),y.children){const z=y.children;for(let x=0;x<z.length;x++)c(z[x],E,f&&f.children[x])}f=f||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&a(E)}return P?()=>{h(P)}:X}function h(s){if(Ze(s)){const l=r.get(s);l&&(r.delete(s),n.splice(n.indexOf(l),1),l.children.forEach(h),l.alias.forEach(h))}else{const l=n.indexOf(s);l>-1&&(n.splice(l,1),s.record.name&&r.delete(s.record.name),s.children.forEach(h),s.alias.forEach(h))}}function m(){return n}function a(s){let l=0;for(;l<n.length&&Bt(s,n[l])>=0&&(s.record.path!==n[l].record.path||!et(s,n[l]));)l++;n.splice(l,0,s),s.record.name&&!$e(s)&&r.set(s.record.name,s)}function u(s,l){let f,g={},y,w;if("name"in s&&s.name){if(f=r.get(s.name),!f)throw U(1,{location:s});w=f.record.name,g=b(Ne(l.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),s.params&&Ne(s.params,f.keys.map(P=>P.name))),y=f.stringify(g)}else if("path"in s)y=s.path,f=n.find(P=>P.re.test(y)),f&&(g=f.parse(y),w=f.record.name);else{if(f=l.name?r.get(l.name):n.find(P=>P.re.test(l.path)),!f)throw U(1,{location:s,currentLocation:l});w=f.record.name,g=b({},l.params,s.params),y=f.stringify(g)}const O=[];let E=f;for(;E;)O.unshift(E.record),E=E.parent;return{name:w,path:y,params:g,matched:O,meta:Wt(O)}}return e.forEach(s=>c(s)),{addRoute:c,resolve:u,removeRoute:h,getRoutes:m,getRecordMatcher:o}}function Ne(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Kt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Qt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Qt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function $e(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wt(e){return e.reduce((t,n)=>b(t,n.meta),{})}function Ve(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function et(e,t){return t.children.some(n=>n===e||et(e,n))}const tt=/#/g,Ft=/&/g,Yt=/\//g,Xt=/=/g,Zt=/\?/g,nt=/\+/g,Jt=/%5B/g,en=/%5D/g,rt=/%5E/g,tn=/%60/g,ot=/%7B/g,nn=/%7C/g,st=/%7D/g,rn=/%20/g;function ye(e){return encodeURI(""+e).replace(nn,"|").replace(Jt,"[").replace(en,"]")}function on(e){return ye(e).replace(ot,"{").replace(st,"}").replace(rt,"^")}function ge(e){return ye(e).replace(nt,"%2B").replace(rn,"+").replace(tt,"%23").replace(Ft,"%26").replace(tn,"`").replace(ot,"{").replace(st,"}").replace(rt,"^")}function sn(e){return ge(e).replace(Xt,"%3D")}function cn(e){return ye(e).replace(tt,"%23").replace(Zt,"%3F")}function an(e){return e==null?"":cn(e).replace(Yt,"%2F")}function ne(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ln(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const c=r[o].replace(nt," "),h=c.indexOf("="),m=ne(h<0?c:c.slice(0,h)),a=h<0?null:ne(c.slice(h+1));if(m in t){let u=t[m];j(u)||(u=t[m]=[u]),u.push(a)}else t[m]=a}return t}function ze(e){let t="";for(let n in e){const r=e[n];if(n=sn(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(j(r)?r.map(c=>c&&ge(c)):[r&&ge(r)]).forEach(c=>{c!==void 0&&(t+=(t.length?"&":"")+n,c!=null&&(t+="="+c))})}return t}function un(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=j(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const fn=Symbol(""),Be=Symbol(""),Ee=Symbol(""),Re=Symbol(""),_e=Symbol("");function F(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function V(e,t,n,r,o){const c=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((h,m)=>{const a=l=>{l===!1?m(U(4,{from:n,to:t})):l instanceof Error?m(l):xt(l)?m(U(2,{from:t,to:l})):(c&&r.enterCallbacks[o]===c&&typeof l=="function"&&c.push(l),h())},u=e.call(r&&r.instances[o],t,n,a);let s=Promise.resolve(u);e.length<3&&(s=s.then(a)),s.catch(l=>m(l))})}function de(e,t,n,r){const o=[];for(const c of e)for(const h in c.components){let m=c.components[h];if(!(t!=="beforeRouteEnter"&&!c.instances[h]))if(hn(m)){const u=(m.__vccOpts||m)[t];u&&o.push(V(u,n,r,c,h))}else{let a=m();o.push(()=>a.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${h}" at "${c.path}"`));const s=gt(u)?u.default:u;c.components[h]=s;const f=(s.__vccOpts||s)[t];return f&&V(f,n,r,c,h)()}))}}return o}function hn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function De(e){const t=q(Ee),n=q(Re),r=M(()=>t.resolve(Y(e.to))),o=M(()=>{const{matched:a}=r.value,{length:u}=a,s=a[u-1],l=n.matched;if(!s||!l.length)return-1;const f=l.findIndex(G.bind(null,s));if(f>-1)return f;const g=He(a[u-2]);return u>1&&He(s)===g&&l[l.length-1].path!==g?l.findIndex(G.bind(null,a[u-2])):f}),c=M(()=>o.value>-1&&gn(n.params,r.value.params)),h=M(()=>o.value>-1&&o.value===n.matched.length-1&&Ye(n.params,r.value.params));function m(a={}){return mn(a)?t[Y(e.replace)?"replace":"push"](Y(e.to)).catch(X):Promise.resolve()}return{route:r,href:M(()=>r.value.href),isActive:c,isExactActive:h,navigate:m}}const dn=We({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:De,setup(e,{slots:t}){const n=Qe(De(e)),{options:r}=q(Ee),o=M(()=>({[qe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=t.default&&t.default(n);return e.custom?c:Fe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},c)}}}),pn=dn;function mn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function gn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!j(o)||o.length!==r.length||r.some((c,h)=>c!==o[h]))return!1}return!0}function He(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qe=(e,t,n)=>e??t??n,_n=We({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=q(_e),o=M(()=>e.route||r.value),c=q(Be,0),h=M(()=>{let u=Y(c);const{matched:s}=o.value;let l;for(;(l=s[u])&&!l.components;)u++;return u}),m=M(()=>o.value.matched[h.value]);ue(Be,M(()=>h.value+1)),ue(fn,m),ue(_e,o);const a=ht();return dt(()=>[a.value,m.value,e.name],([u,s,l],[f,g,y])=>{s&&(s.instances[l]=u,g&&g!==s&&u&&u===f&&(s.leaveGuards.size||(s.leaveGuards=g.leaveGuards),s.updateGuards.size||(s.updateGuards=g.updateGuards))),u&&s&&(!g||!G(s,g)||!f)&&(s.enterCallbacks[l]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=o.value,s=e.name,l=m.value,f=l&&l.components[s];if(!f)return Ge(n.default,{Component:f,route:u});const g=l.props[s],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,O=Fe(f,b({},y,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(l.instances[s]=null)},ref:a}));return Ge(n.default,{Component:O,route:u})||O}}});function Ge(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const vn=_n;function yn(e){const t=Ut(e.routes,e),n=e.parseQuery||ln,r=e.stringifyQuery||ze,o=e.history,c=F(),h=F(),m=F(),a=ut($);let u=$;H&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=fe.bind(null,i=>""+i),l=fe.bind(null,an),f=fe.bind(null,ne);function g(i,p){let d,_;return Ze(i)?(d=t.getRecordMatcher(i),_=p):_=i,t.addRoute(_,d)}function y(i){const p=t.getRecordMatcher(i);p&&t.removeRoute(p)}function w(){return t.getRoutes().map(i=>i.record)}function O(i){return!!t.getRecordMatcher(i)}function E(i,p){if(p=b({},p||a.value),typeof i=="string"){const v=he(n,i,p.path),C=t.resolve({path:v.path},p),W=o.createHref(v.fullPath);return b(v,C,{params:f(C.params),hash:ne(v.hash),redirectedFrom:void 0,href:W})}let d;if("path"in i)d=b({},i,{path:he(n,i.path,p.path).path});else{const v=b({},i.params);for(const C in v)v[C]==null&&delete v[C];d=b({},i,{params:l(i.params)}),p.params=l(p.params)}const _=t.resolve(d,p),S=i.hash||"";_.params=s(f(_.params));const k=yt(r,b({},i,{hash:on(S),path:_.path})),R=o.createHref(k);return b({fullPath:k,hash:S,query:r===ze?un(i.query):i.query||{}},_,{redirectedFrom:void 0,href:R})}function P(i){return typeof i=="string"?he(n,i,a.value.path):b({},i)}function A(i,p){if(u!==i)return U(8,{from:p,to:i})}function I(i){return K(i)}function z(i){return I(b(P(i),{replace:!0}))}function x(i){const p=i.matched[i.matched.length-1];if(p&&p.redirect){const{redirect:d}=p;let _=typeof d=="function"?d(i):d;return typeof _=="string"&&(_=_.includes("?")||_.includes("#")?_=P(_):{path:_},_.params={}),b({query:i.query,hash:i.hash,params:"path"in _?{}:i.params},_)}}function K(i,p){const d=u=E(i),_=a.value,S=i.state,k=i.force,R=i.replace===!0,v=x(d);if(v)return K(b(P(v),{state:typeof v=="object"?b({},S,v.state):S,force:k,replace:R}),p||d);const C=d;C.redirectedFrom=p;let W;return!k&&Et(r,_,d)&&(W=U(16,{to:C,from:_}),we(_,_,!0,!1)),(W?Promise.resolve(W):Pe(C,_)).catch(L=>N(L)?N(L,2)?L:ie(L):se(L,C,_)).then(L=>{if(L){if(N(L,2))return K(b({replace:R},P(L.to),{state:typeof L.to=="object"?b({},S,L.to.state):S,force:k}),p||C)}else L=Se(C,_,!0,R,S);return be(C,_,L),L})}function it(i,p){const d=A(i,p);return d?Promise.reject(d):Promise.resolve()}function Pe(i,p){let d;const[_,S,k]=En(i,p);d=de(_.reverse(),"beforeRouteLeave",i,p);for(const v of _)v.leaveGuards.forEach(C=>{d.push(V(C,i,p))});const R=it.bind(null,i,p);return d.push(R),D(d).then(()=>{d=[];for(const v of c.list())d.push(V(v,i,p));return d.push(R),D(d)}).then(()=>{d=de(S,"beforeRouteUpdate",i,p);for(const v of S)v.updateGuards.forEach(C=>{d.push(V(C,i,p))});return d.push(R),D(d)}).then(()=>{d=[];for(const v of i.matched)if(v.beforeEnter&&!p.matched.includes(v))if(j(v.beforeEnter))for(const C of v.beforeEnter)d.push(V(C,i,p));else d.push(V(v.beforeEnter,i,p));return d.push(R),D(d)}).then(()=>(i.matched.forEach(v=>v.enterCallbacks={}),d=de(k,"beforeRouteEnter",i,p),d.push(R),D(d))).then(()=>{d=[];for(const v of h.list())d.push(V(v,i,p));return d.push(R),D(d)}).catch(v=>N(v,8)?v:Promise.reject(v))}function be(i,p,d){for(const _ of m.list())_(i,p,d)}function Se(i,p,d,_,S){const k=A(i,p);if(k)return k;const R=p===$,v=H?history.state:{};d&&(_||R?o.replace(i.fullPath,b({scroll:R&&v&&v.scroll},S)):o.push(i.fullPath,S)),a.value=i,we(i,p,d,R),ie()}let Q;function ct(){Q||(Q=o.listen((i,p,d)=>{if(!ke.listening)return;const _=E(i),S=x(_);if(S){K(b(S,{replace:!0}),_).catch(X);return}u=_;const k=a.value;H&&Ct(Te(k.fullPath,d.delta),re()),Pe(_,k).catch(R=>N(R,12)?R:N(R,2)?(K(R.to,_).then(v=>{N(v,20)&&!d.delta&&d.type===J.pop&&o.go(-1,!1)}).catch(X),Promise.reject()):(d.delta&&o.go(-d.delta,!1),se(R,_,k))).then(R=>{R=R||Se(_,k,!1),R&&(d.delta&&!N(R,8)?o.go(-d.delta,!1):d.type===J.pop&&N(R,20)&&o.go(-1,!1)),be(_,k,R)}).catch(X)}))}let oe=F(),Oe=F(),ee;function se(i,p,d){ie(i);const _=Oe.list();return _.length?_.forEach(S=>S(i,p,d)):console.error(i),Promise.reject(i)}function at(){return ee&&a.value!==$?Promise.resolve():new Promise((i,p)=>{oe.add([i,p])})}function ie(i){return ee||(ee=!i,ct(),oe.list().forEach(([p,d])=>i?d(i):p()),oe.reset()),i}function we(i,p,d,_){const{scrollBehavior:S}=e;if(!H||!S)return Promise.resolve();const k=!d&&At(Te(i.fullPath,0))||(_||!d)&&history.state&&history.state.scroll||null;return ft().then(()=>S(i,p,k)).then(R=>R&&kt(R)).catch(R=>se(R,i,p))}const ce=i=>o.go(i);let ae;const le=new Set,ke={currentRoute:a,listening:!0,addRoute:g,removeRoute:y,hasRoute:O,getRoutes:w,resolve:E,options:e,push:I,replace:z,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:c.add,beforeResolve:h.add,afterEach:m.add,onError:Oe.add,isReady:at,install(i){const p=this;i.component("RouterLink",pn),i.component("RouterView",vn),i.config.globalProperties.$router=p,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>Y(a)}),H&&!ae&&a.value===$&&(ae=!0,I(o.location).catch(S=>{}));const d={};for(const S in $)d[S]=M(()=>a.value[S]);i.provide(Ee,p),i.provide(Re,Qe(d)),i.provide(_e,a);const _=i.unmount;le.add(i),i.unmount=function(){le.delete(i),le.size<1&&(u=$,Q&&Q(),Q=null,a.value=$,ae=!1,ee=!1),_()}}};return ke}function D(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function En(e,t){const n=[],r=[],o=[],c=Math.max(t.matched.length,e.matched.length);for(let h=0;h<c;h++){const m=t.matched[h];m&&(e.matched.find(u=>G(u,m))?r.push(m):n.push(m));const a=e.matched[h];a&&(t.matched.find(u=>G(u,a))||o.push(a))}return[n,r,o]}function Xn(){return q(Re)}const Rn=[{path:"/",redirect:"/main"},{path:"/login",component:()=>T(()=>import("./Login-cbfa8433.js"),["assets/Login-cbfa8433.js","assets/base-fea03ce8.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-3111e043.css","assets/el-button-a5400fd7.js","assets/index-7842665d.js","assets/index-1cfa6bc8.js","assets/index-f448e6ff.css","assets/el-button-2cb60ae5.css","assets/el-link-3acd6f42.js","assets/el-link-abec4f6c.css","assets/el-input-9d919cf6.js","assets/error-78e43d3e.js","assets/isNil-c75b1b34.js","assets/el-input-588b8d36.css","assets/el-form-item-5acb0a27.js","assets/el-form-item-d10bb01f.css","assets/vnode-7cc962c9.js","assets/pinia-008b66ec.js","assets/Login-a26bd6f8.css","assets/el-icon-b1770749.css"])},{path:"/main",name:"main",component:()=>T(()=>import("./main-a8629961.js"),["assets/main-a8629961.js","assets/base-fea03ce8.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-3111e043.css","assets/el-button-a5400fd7.js","assets/index-7842665d.js","assets/index-1cfa6bc8.js","assets/index-f448e6ff.css","assets/el-button-2cb60ae5.css","assets/el-tooltip-ea3857ca.js","assets/isNil-c75b1b34.js","assets/el-tooltip-b17b6765.css","assets/el-scrollbar-fb408054.js","assets/error-78e43d3e.js","assets/el-scrollbar-df5aa9a0.css","assets/refs-bfa8f37a.js","assets/index-401947bc.js","assets/vnode-7cc962c9.js","assets/pinia-008b66ec.js","assets/main-71724058.css","assets/el-icon-b1770749.css"])},{path:"/:pathMatch(.*)",component:()=>T(()=>import("./NotFond-ce77131c.js"),["assets/NotFond-ce77131c.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/NotFond-130e4396.css"])}],te=yn({history:jt(),routes:Rn});te.beforeEach((e,t,n)=>{const r=B.getCache(pe);e.path==="/main"?r?n():(Ke.warning("您还未登录，请先登录"),n("/login")):n()});function Pn(e){return ve.post({url:"/login",data:e})}function bn(e){return ve.get({url:"/users/"+e})}function Sn(e){return ve.get({url:`/role/${e}/menu`})}const On={path:"/main/analysis/dashboard",component:()=>T(()=>import("./dashboard-69ff6ecc.js"),["assets/dashboard-69ff6ecc.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-fea03ce8.js","assets/base-3111e043.css","assets/el-card-a01e4dcb.js","assets/el-card-208b2445.css","assets/el-col-5a6da4ad.js","assets/index-1cfa6bc8.js","assets/index-f448e6ff.css","assets/el-col-6b49831e.css","assets/pinia-008b66ec.js","assets/el-tooltip-ea3857ca.js","assets/isNil-c75b1b34.js","assets/index-7842665d.js","assets/el-tooltip-b17b6765.css","assets/dashboard-0e4e6154.css","assets/el-icon-b1770749.css"])},wn=Object.freeze(Object.defineProperty({__proto__:null,default:On},Symbol.toStringTag,{value:"Module"})),kn={path:"/main/analysis/overview",component:()=>T(()=>import("./overview-77acfc71.js"),["assets/overview-77acfc71.js","assets/base-fea03ce8.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-3111e043.css","assets/el-link-3acd6f42.js","assets/el-link-abec4f6c.css","assets/el-card-a01e4dcb.js","assets/el-card-208b2445.css","assets/overview-3098e6f2.css"])},Cn=Object.freeze(Object.defineProperty({__proto__:null,default:kn},Symbol.toStringTag,{value:"Module"})),An={path:"/main/product/category",component:()=>T(()=>import("./category-f32ed1fc.js"),["assets/category-f32ed1fc.js","assets/usePageContentHook-c3d4a05e.js","assets/base-fea03ce8.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-3111e043.css","assets/el-card-a01e4dcb.js","assets/el-card-208b2445.css","assets/el-form-item-5acb0a27.js","assets/index-1cfa6bc8.js","assets/index-f448e6ff.css","assets/error-78e43d3e.js","assets/index-7842665d.js","assets/el-input-9d919cf6.js","assets/el-button-a5400fd7.js","assets/el-button-2cb60ae5.css","assets/isNil-c75b1b34.js","assets/el-input-588b8d36.css","assets/el-form-item-d10bb01f.css","assets/el-col-5a6da4ad.js","assets/el-col-6b49831e.css","assets/page-content-023146c0.js","assets/el-scrollbar-fb408054.js","assets/el-scrollbar-df5aa9a0.css","assets/el-tooltip-ea3857ca.js","assets/el-tooltip-b17b6765.css","assets/pinia-008b66ec.js","assets/main-dbe8f02a.js","assets/page-content-c153ad99.css","assets/usePageContentHook-36d253e4.css","assets/usePageModalHook-a7d196cb.js","assets/vnode-7cc962c9.js","assets/refs-bfa8f37a.js","assets/usePageModalHook-b2600883.css"])},Ln=Object.freeze(Object.defineProperty({__proto__:null,default:An},Symbol.toStringTag,{value:"Module"})),Tn={path:"/main/product/goods",component:()=>T(()=>import("./goods-4c4a5c12.js"),["assets/goods-4c4a5c12.js","assets/base-fea03ce8.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-3111e043.css","assets/el-button-a5400fd7.js","assets/index-7842665d.js","assets/index-1cfa6bc8.js","assets/index-f448e6ff.css","assets/el-button-2cb60ae5.css","assets/el-tooltip-ea3857ca.js","assets/isNil-c75b1b34.js","assets/el-tooltip-b17b6765.css","assets/usePageContentHook-c3d4a05e.js","assets/el-card-a01e4dcb.js","assets/el-card-208b2445.css","assets/el-form-item-5acb0a27.js","assets/error-78e43d3e.js","assets/el-input-9d919cf6.js","assets/el-input-588b8d36.css","assets/el-form-item-d10bb01f.css","assets/el-col-5a6da4ad.js","assets/el-col-6b49831e.css","assets/page-content-023146c0.js","assets/el-scrollbar-fb408054.js","assets/el-scrollbar-df5aa9a0.css","assets/pinia-008b66ec.js","assets/main-dbe8f02a.js","assets/page-content-c153ad99.css","assets/usePageContentHook-36d253e4.css","assets/usePageModalHook-a7d196cb.js","assets/vnode-7cc962c9.js","assets/refs-bfa8f37a.js","assets/usePageModalHook-b2600883.css","assets/goods-19f2a42d.css"])},In=Object.freeze(Object.defineProperty({__proto__:null,default:Tn},Symbol.toStringTag,{value:"Module"})),Mn={path:"/main/story/chat",component:()=>T(()=>import("./chat-ebcf124e.js"),["assets/chat-ebcf124e.js","assets/base-fea03ce8.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-3111e043.css","assets/el-button-a5400fd7.js","assets/index-7842665d.js","assets/index-1cfa6bc8.js","assets/index-f448e6ff.css","assets/el-button-2cb60ae5.css","assets/chat-626f7da0.css"])},jn=Object.freeze(Object.defineProperty({__proto__:null,default:Mn},Symbol.toStringTag,{value:"Module"})),xn={path:"/main/story/list",component:()=>T(()=>import("./list-0729a248.js"),["assets/list-0729a248.js","assets/page-content-023146c0.js","assets/base-fea03ce8.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-3111e043.css","assets/el-card-a01e4dcb.js","assets/el-card-208b2445.css","assets/el-input-9d919cf6.js","assets/index-1cfa6bc8.js","assets/index-f448e6ff.css","assets/el-button-a5400fd7.js","assets/index-7842665d.js","assets/el-button-2cb60ae5.css","assets/error-78e43d3e.js","assets/isNil-c75b1b34.js","assets/el-input-588b8d36.css","assets/el-scrollbar-fb408054.js","assets/el-scrollbar-df5aa9a0.css","assets/el-tooltip-ea3857ca.js","assets/el-tooltip-b17b6765.css","assets/pinia-008b66ec.js","assets/main-dbe8f02a.js","assets/page-content-c153ad99.css"])},Nn=Object.freeze(Object.defineProperty({__proto__:null,default:xn},Symbol.toStringTag,{value:"Module"})),$n={path:"/main/system/department",component:()=>T(()=>import("./department-4a364663.js"),["assets/department-4a364663.js","assets/page-content-023146c0.js","assets/base-fea03ce8.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-3111e043.css","assets/el-card-a01e4dcb.js","assets/el-card-208b2445.css","assets/el-input-9d919cf6.js","assets/index-1cfa6bc8.js","assets/index-f448e6ff.css","assets/el-button-a5400fd7.js","assets/index-7842665d.js","assets/el-button-2cb60ae5.css","assets/error-78e43d3e.js","assets/isNil-c75b1b34.js","assets/el-input-588b8d36.css","assets/el-scrollbar-fb408054.js","assets/el-scrollbar-df5aa9a0.css","assets/el-tooltip-ea3857ca.js","assets/el-tooltip-b17b6765.css","assets/pinia-008b66ec.js","assets/main-dbe8f02a.js","assets/page-content-c153ad99.css","assets/usePageContentHook-c3d4a05e.js","assets/el-form-item-5acb0a27.js","assets/el-form-item-d10bb01f.css","assets/el-col-5a6da4ad.js","assets/el-col-6b49831e.css","assets/usePageContentHook-36d253e4.css","assets/usePageModalHook-a7d196cb.js","assets/vnode-7cc962c9.js","assets/refs-bfa8f37a.js","assets/usePageModalHook-b2600883.css"])},Vn=Object.freeze(Object.defineProperty({__proto__:null,default:$n},Symbol.toStringTag,{value:"Module"})),zn={path:"/main/system/menu",component:()=>T(()=>import("./menu-db905d9f.js"),["assets/menu-db905d9f.js","assets/page-content-023146c0.js","assets/base-fea03ce8.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-3111e043.css","assets/el-card-a01e4dcb.js","assets/el-card-208b2445.css","assets/el-input-9d919cf6.js","assets/index-1cfa6bc8.js","assets/index-f448e6ff.css","assets/el-button-a5400fd7.js","assets/index-7842665d.js","assets/el-button-2cb60ae5.css","assets/error-78e43d3e.js","assets/isNil-c75b1b34.js","assets/el-input-588b8d36.css","assets/el-scrollbar-fb408054.js","assets/el-scrollbar-df5aa9a0.css","assets/el-tooltip-ea3857ca.js","assets/el-tooltip-b17b6765.css","assets/pinia-008b66ec.js","assets/main-dbe8f02a.js","assets/page-content-c153ad99.css","assets/usePageModalHook-a7d196cb.js","assets/el-form-item-5acb0a27.js","assets/el-form-item-d10bb01f.css","assets/vnode-7cc962c9.js","assets/refs-bfa8f37a.js","assets/usePageModalHook-b2600883.css"])},Bn=Object.freeze(Object.defineProperty({__proto__:null,default:zn},Symbol.toStringTag,{value:"Module"})),Dn={path:"/main/system/role",component:()=>T(()=>import("./role-0f939169.js"),["assets/role-0f939169.js","assets/base-fea03ce8.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-3111e043.css","assets/el-input-9d919cf6.js","assets/index-1cfa6bc8.js","assets/index-f448e6ff.css","assets/el-button-a5400fd7.js","assets/index-7842665d.js","assets/el-button-2cb60ae5.css","assets/error-78e43d3e.js","assets/isNil-c75b1b34.js","assets/el-input-588b8d36.css","assets/pinia-008b66ec.js","assets/main-dbe8f02a.js","assets/usePageContentHook-c3d4a05e.js","assets/el-card-a01e4dcb.js","assets/el-card-208b2445.css","assets/el-form-item-5acb0a27.js","assets/el-form-item-d10bb01f.css","assets/el-col-5a6da4ad.js","assets/el-col-6b49831e.css","assets/page-content-023146c0.js","assets/el-scrollbar-fb408054.js","assets/el-scrollbar-df5aa9a0.css","assets/el-tooltip-ea3857ca.js","assets/el-tooltip-b17b6765.css","assets/page-content-c153ad99.css","assets/usePageContentHook-36d253e4.css","assets/usePageModalHook-a7d196cb.js","assets/vnode-7cc962c9.js","assets/refs-bfa8f37a.js","assets/usePageModalHook-b2600883.css","assets/index-401947bc.js","assets/role-ffd66896.css"])},Hn=Object.freeze(Object.defineProperty({__proto__:null,default:Dn},Symbol.toStringTag,{value:"Module"})),qn={path:"/main/system/user",component:()=>T(()=>import("./users-1716f208.js"),["assets/users-1716f208.js","assets/base-fea03ce8.js","assets/_plugin-vue_export-helper-33f8d7e1.js","assets/base-3111e043.css","assets/el-input-9d919cf6.js","assets/index-1cfa6bc8.js","assets/index-f448e6ff.css","assets/el-button-a5400fd7.js","assets/index-7842665d.js","assets/el-button-2cb60ae5.css","assets/error-78e43d3e.js","assets/isNil-c75b1b34.js","assets/el-input-588b8d36.css","assets/page-content-023146c0.js","assets/el-card-a01e4dcb.js","assets/el-card-208b2445.css","assets/el-scrollbar-fb408054.js","assets/el-scrollbar-df5aa9a0.css","assets/el-tooltip-ea3857ca.js","assets/el-tooltip-b17b6765.css","assets/pinia-008b66ec.js","assets/main-dbe8f02a.js","assets/page-content-c153ad99.css","assets/usePageContentHook-c3d4a05e.js","assets/el-form-item-5acb0a27.js","assets/el-form-item-d10bb01f.css","assets/el-col-5a6da4ad.js","assets/el-col-6b49831e.css","assets/usePageContentHook-36d253e4.css","assets/usePageModalHook-a7d196cb.js","assets/vnode-7cc962c9.js","assets/refs-bfa8f37a.js","assets/usePageModalHook-b2600883.css"])},Gn=Object.freeze(Object.defineProperty({__proto__:null,default:qn},Symbol.toStringTag,{value:"Module"}));function Un(){const e=[],t=Object.assign({"/src/router/main/analysis/dashboard.ts":wn,"/src/router/main/analysis/overview.ts":Cn,"/src/router/main/product/category.ts":Ln,"/src/router/main/product/goods.ts":In,"/src/router/main/story/chat.ts":jn,"/src/router/main/story/list.ts":Nn,"/src/router/main/system/department.ts":Vn,"/src/router/main/system/menu.ts":Bn,"/src/router/main/system/role.ts":Hn,"/src/router/main/system/user.ts":Gn});for(let n in t)e.push(t[n].default);return e}function Ue(e){const t=[],n=Un();for(let r of e)for(let o of r.children){const c=n.find(h=>h.path===o.url);c&&(t.find(h=>h.path==r.url)||t.push({path:r.url,redirect:o.url}),t.push(c))}return t}function Zn(e,t){for(let n of t)for(let r of n.children)if(e===r.url)return[{name:n.name,path:n.url},{name:r.name,path:r.url}]}function Jn(e){const t=[];n(e);function n(r){for(let o of r)o.children?n(o.children):t.push(o.id)}return t}function Kn(e){const t=[];function n(r){for(let o of r)o.children?n(o.children):o.type===3&&t.push(o.permission)}return n(e),t}const er=lt("login",{state:()=>({token:"",userInfo:{},menuList:[],permissionList:[]}),actions:{async accountLoginAction(e){try{const t=await Pn(e),n=t.data.id;this.token=t.data.token,B.setCache(pe,this.token);const r=await bn(n);this.userInfo=r.data,B.setCache("userInfo",r.data);const o=await Sn(this.userInfo.role.id);this.menuList=o.data,B.setCache("menuList",o.data),Ue(this.menuList).forEach(h=>te.addRoute("main",h)),te.push("/main"),Ke.success("登陆成功!")}catch(t){console.log(t)}},async loadLocalCacheACtion(){const e=B.getCache(pe),t=B.getCache("userInfo"),n=B.getCache("menuList");if(e&&t&&n){this.token=e,this.userInfo=t,this.menuList=n;const r=Kn(this.menuList);this.permissionList=r,Ue(this.menuList).forEach(c=>te.addRoute("main",c))}}}});export{Xn as a,Jn as b,Zn as m,te as r,er as u};
