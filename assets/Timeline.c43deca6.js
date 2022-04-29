import{u as k,S as f,T as N}from"./timeline.4d80d599.js";import{_ as L}from"./index.66c40f32.js";import{k as M,l as P,m as w,o as T,f as g,u,F as z,n as $,q as J,h as Z,t as q}from"./vendor.7e063442.js";import"https://overlay.diemoe.net/common/common.min.js";const H={id:"wrapper"},R={key:0,class:"optionalTimelines"},U=["onClick"],G=M({setup(K){const n=k(),l=P({loadedTimeline:[],optionalTimeline:[]});let p=w(0),s=w(0-n.configValues.preBattle),h=w(0),v,m=!0,A=300,_,o={zoneId:"0",job:"NONE"},y,C=!1;F();function F(){addOverlayListener("onLogEvent",D),addOverlayListener("onPlayerChangedEvent",x),addOverlayListener("ChangeZone",I),addOverlayListener("BroadcastMessage",V),addOverlayListener("onInCombatChangedEvent",j),startOverlayEvents(),n.loadTimelineSettings(),o.job=n.playerJob,setTimeout(()=>{!l.loadedTimeline.length&&!l.optionalTimeline.length&&(c(o),f.fire({text:`${n.allTimelines.length}\u6761\u65F6\u95F4\u8F74\u5DF2\u5C31\u7EEA`,timer:1500,showConfirmButton:!1,backdrop:!1}),window.hasOwnProperty("OverlayPluginApi")||f.fire({title:"\u672A\u68C0\u6D4B\u5230OverlayPlugin\u73AF\u5883",text:"\u8BF7\u5728ACT\u7684\u60AC\u6D6E\u7A97\u63D2\u4EF6\u4E2D\u6DFB\u52A0\u672C\u7F51\u9875",icon:"warning",confirmButtonColor:"#d33",confirmButtonText:"\u6211\u5C31\u8981\u5728\u8FD9\u7528\uFF01"}))},1e3)}function c(e){b(),l.loadedTimeline.length=0,l.optionalTimeline.length=0;let t=n.getTimeline(e);t.length===1?d(t[0]):t.length>1&&(l.optionalTimeline=t)}function S(e){d(e)}function d(e){e&&(e==null?void 0:e.timeline)&&(l.loadedTimeline=n.parseTimeline(e.timeline),l.loadedTimeline.sort((t,i)=>t.time-i.time),f.fire({position:"top-end",icon:"success",text:`\u52A0\u8F7D\u4E86${e.name}~`,showConfirmButton:!1,timer:1e3,backdrop:!1}),y=e)}function b(){clearInterval(Number(v)),p.value=0,s.value=0-n.configValues.preBattle,h.value=0}function B(e){p.value=new Date().getTime()+e*1e3,clearInterval(Number(v)),v=setInterval(()=>{s.value=(new Date().getTime()-p.value+h.value)/1e3;let t;l.loadedTimeline.filter(i=>i.tts&&!i.alertAlready&&i.time-n.configValues.ttsAdvance<=s.value).forEach(i=>{i.alertAlready=!0,i.tts&&m&&(t=i.tts,m=!1),t&&O(t)})},n.configValues.refreshRateMs)}function D(e){for(const t of e.detail.logs){let i=t.match(/^.{14} (\w+ |)00:(?:00b9|0139)::?(?:距离战斗开始还有|Battle commencing in |戦闘開始まで)(?<cd>\d+)[^（(]+[（(]/i);if(i)B(parseInt(i.groups.cd));else if(o.zoneId==="1009"&&/^.{14} (?:Director |)21:.{8}:8.{5}1A/.test(t))c(o);else if(/^.{14} (?:Director |)21:.{8}:40000010/.test(t))b(),d(y);else{const r=l.loadedTimeline.find(a=>a.sync&&a.windowBefore&&a.windowAfter&&a.sync.test(t)&&s.value>=a.time-a.windowBefore&&s.value<=a.time+a.windowAfter);r&&E(r.jump||r.time)}}}function E(e){h.value+=(e-s.value)*1e3}function x(e){o.job=e.detail.job,n.playerJob=o.job}function I(e){o.zoneId=String(e.zoneID),c(o)}function O(e){m=!1,clearTimeout(Number(_)),callOverlayHandler({call:"cactbotSay",text:e}),_=setTimeout(()=>{m=!0},A)}function V(e){e.source==="soumuaTimelineSetting"&&e.msg.store&&f.fire({text:`\u63A5\u53D7\u5230${e.msg.store.allTimelines.length}\u4E2A\u65F6\u95F4\u8F74`,showDenyButton:!0,denyButtonText:"\u8986\u76D6",showConfirmButton:!0,confirmButtonText:"\u8FFD\u52A0",showCancelButton:!0,cancelButtonText:"\u653E\u5F03",backdrop:!1}).then(t=>{(t.isConfirmed||t.isDenied)&&(t.isDenied&&(n.allTimelines.length=0),n.allTimelines=e.msg.store.allTimelines,n.configValues=e.msg.store.configValues,n.showStyle=e.msg.store.showStyle,c(o),n.saveTimelineSettings())})}function j(e){!C&&e.detail.inACTCombat&&B(0),C&&!e.detail.inACTCombat&&d(y),C=e.detail.inACTCombat}return(e,t)=>(T(),g("div",H,[u(l).optionalTimeline.length&&u(s)<=-u(n).configValues.preBattle?(T(),g("ul",R,[(T(!0),g(z,null,$(u(l).optionalTimeline,(i,r)=>(T(),g("li",{key:r,onClick:a=>S(i)},q(i.name),9,U))),128))])):J("",!0),Z(N,{config:u(n).configValues,lines:u(l).loadedTimeline,runtime:u(s),"show-style":u(n).showStyle},null,8,["config","lines","runtime","show-style"])]))}});var ee=L(G,[["__scopeId","data-v-5cfd5b9c"]]);export{ee as default};
