!function(){"use strict";var o=document.querySelector("#i"),e=document.querySelector("#o"),r=[{from:/\^\.\{14\} (?=\d)/g,to:"^.{14} (?:\\w+ |)"},{from:/\^\.\{15\}(?=\d)/g,to:"^.{15}(?:\\w+ |)"},{from:/(?<=00:[^:]+):(?!:)/g,to:"::?"},{from:/\^\.\{/g,to:"(?i)^.{"}];o.addEventListener("keyup",(function(){var t=o.value;for(var u in r){var n=r[u];t=t.replace(n.from,n.to)}e.value=t}))}();