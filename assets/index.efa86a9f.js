import{d as f,r as w,w as O,v as b,u as L,o as v,c as h,p as A,a as F,b as P,e as S,f as y,F as k,g as I,h as T,i as D,j as x}from"./vendor.e055c356.js";import"https://overlay.diemoe.net/common/common.min.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};j();var V=(l,s)=>{const o=l.__vccOpts||l;for(const[a,t]of s)o[a]=t;return o};const C=l=>(A("data-v-1f65b95e"),l=l(),F(),l),N={class:"unlocked"},R=C(()=>P("h3",null,"\u{1F513} \u5DF2\u89E3\u9664\u9501\u5B9A (\u4F60\u9700\u8981\u5C06\u6B64\u60AC\u6D6E\u7A97\u9501\u5B9A\u540E\u4F7F\u7528)",-1)),q=[R],B=f({setup(l){let s=w(!1);return document.addEventListener("onOverlayStateUpdate",o=>s.value=!o.detail.isLocked),startOverlayEvents(),(o,a)=>O((v(),h("div",N,q,512)),[[b,L(s)]])}});var $=V(B,[["__scopeId","data-v-1f65b95e"]]);const H=f({setup(l){return(s,o)=>{const a=S("router-view");return v(),h(k,null,[y($),y(a)],64)}}}),J="modulepreload",g={},W="/",d=function(s,o){return!o||o.length===0?s():Promise.all(o.map(a=>{if(a=`${W}${a}`,a in g)return;g[a]=!0;const t=a.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":J,t||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),t)return new Promise((m,p)=>{i.addEventListener("load",m),i.addEventListener("error",p)})})).then(()=>s())},E=I({history:T(),routes:[{path:"/",component:()=>d(()=>import("./Home.2df178cc.js"),["assets/Home.2df178cc.js","assets/Home.df04b161.css","assets/vendor.e055c356.js"])},{path:"/index.html",redirect:"/"},{path:"/timeline",component:()=>d(()=>import("./Timeline.5327fbc5.js"),["assets/Timeline.5327fbc5.js","assets/Timeline.4c9e19a2.css","assets/sweetalert2.6e640675.js","assets/sweetalert2.9f066f74.css","assets/hasOverlayPluginApi.ecf97ca4.js","assets/timeline.2ddfc605.js","assets/timeline.3102a89a.css","assets/vendor.e055c356.js"]),meta:{title:"\u65F6\u95F4\u8F74"}},{path:"/timeline/settings",component:()=>d(()=>import("./TimelineSettings.d04cb766.js"),["assets/TimelineSettings.d04cb766.js","assets/TimelineSettings.1abf6f4b.css","assets/vendor.e055c356.js","assets/sweetalert2.6e640675.js","assets/sweetalert2.9f066f74.css","assets/timeline.2ddfc605.js","assets/timeline.3102a89a.css"]),meta:{title:"\u65F6\u95F4\u8F74\u7F16\u8F91"}},{path:"/instancedAreaInfo",component:()=>d(()=>import("./InstancedAreaInfo.25c24295.js"),["assets/InstancedAreaInfo.25c24295.js","assets/InstancedAreaInfo.07dbc3bc.css","assets/hasOverlayPluginApi.ecf97ca4.js","assets/sweetalert2.6e640675.js","assets/sweetalert2.9f066f74.css","assets/vendor.e055c356.js"]),meta:{title:"\u526F\u672C\u533A\u4FE1\u606F"}},{path:"/stageProgramme",component:()=>d(()=>import("./StageProgramme.ebcaeb3b.js"),["assets/StageProgramme.ebcaeb3b.js","assets/StageProgramme.4ab37c5f.css","assets/vendor.e055c356.js"]),meta:{title:"\u821E\u53F0\u8282\u76EE\u5355"}},{path:"/mpTick",component:()=>d(()=>import("./MpTick.f8b975e8.js"),["assets/MpTick.f8b975e8.js","assets/MpTick.016d510e.css","assets/vendor.e055c356.js"]),meta:{title:"\u56DE\u84DD\u76D1\u63A7"}}]});E.afterEach(l=>{l.meta.title&&(document.title=l.meta.title)});window.addOverlayListener||function(){let l=/[\?&]OVERLAY_WS=([^&]+)/.exec(location.href),s=null,o=[],a=0,t={},n={},i=null,m=!1;l?(i=r=>{o?o.push(r):s.send(JSON.stringify(r))},function r(){s=new WebSocket(l[1]),s.addEventListener("error",e=>{console.error(e)}),s.addEventListener("open",()=>{console.log("Connected!");let e=o;o=null;for(let c of e)i(c)}),s.addEventListener("message",e=>{try{e=JSON.parse(e.data)}catch{return void console.error("Invalid message received: ",e)}e.rseq!==void 0&&t[e.rseq]?(t[e.rseq](e),delete t[e.rseq]):p(e)}),s.addEventListener("close",()=>{o=[],console.log("Trying to reconnect..."),setTimeout(()=>{r()},300)})}()):(i=(r,e)=>{o?o.push([r,e]):OverlayPluginApi.callHandler(JSON.stringify(r),e)},function r(){if(!window.OverlayPluginApi||!window.OverlayPluginApi.ready)return void setTimeout(r,300);let e=o;o=null,window.__OverlayCallback=p;for(let[c,u]of e)i(c,u)}());function p(r){if(n[r.type])for(let e of n[r.type])e(r)}window.dispatchOverlayEvent=p,window.addOverlayListener=(r,e)=>{m&&n[r]&&console.warn(`A new listener for ${r} has been registered after event transmission has already begun.
Some events might have been missed and no cached values will be transmitted.
Please register your listeners before calling startOverlayEvents().`),n[r]||(n[r]=[]),n[r].push(e)},window.removeOverlayListener=(r,e)=>{if(n[r]){let c=n[r],u=c.indexOf(e);u>-1&&c.splice(u,1)}},window.callOverlayHandler=r=>{let e;return s?(r.rseq=a++,e=new Promise(c=>{t[r.rseq]=c}),i(r)):e=new Promise(c=>{i(r,u=>{c(u==null?null:JSON.parse(u))})}),e},window.startOverlayEvents=()=>{m=!1,i({call:"subscribe",events:Object.keys(n)})}}();const _=D(H);_.use(E);_.use(x());_.mount("#app");export{V as _};
