!function(){"use strict";function e(e){var a=0;function t(){switch(e.line[8+a].substr(e.line[8+a].length-3,1)){case"1":return"暴击";case"2":return"直击";case"3":return"直暴";default:return"　　"}}"3C"!==e.line[8]&&"A10"!==e.line[8]||(a+=2);var n={type:"unknown",damageType:"unknown",damageEffect:"unknown",skillName:e.line[5],skillID:e.line[4],value:0,from:e.line[3],target:e.line[7]},l=e.line[9+a].padStart(8,"0");if("4"!==l[4])n.value=parseInt(l.substring(0,4),16);else{var i="0x"+l.substring(2,4),s="0x"+l.substring(6,8);n.value=parseInt(s.substring(2,4)+l.substring(0,2)+(i-s).toString(16).toUpperCase(),16)}if(/^F/.test(e.line[8+a]))return n;if(/1$/.test(e.line[8+a])){if(0!==n.value)return n;n.type="damage",n.damageType="dodge",n.damageEffect="回避"}else/33$/.test(e.line[8+a])?(n.type="damage",n.damageType="death",n.damageEffect="即死"):/[1-4].{2}(33|.[356])$/.test(e.line[8+a])?(n.type="damage",n.damageType="physics",n.damageEffect=t()):/5.{4}$/.test(e.line[8+a])?(n.type="damage",n.damageType="magic",n.damageEffect=t()):/6.{4}$/.test(e.line[8+a])?(n.type="damage",n.damageType="darkness",n.damageEffect=t()):/1.{3}4$/.test(e.line[8+a])?(n.type="heal",n.damageType="heal",n.damageEffect="暴疗"):/4$/.test(e.line[8+a])&&(n.type="heal",n.damageType="heal",n.damageEffect="　　");return console.log(a),console.log(e.line),console.log(e.line[8+a]),console.log(n),n}e({line:"22|2021-12-19T23:54:16.7400000+08:00|4000DE3C|ハイデリン|65A2|クリスタル・ウォタガ|10343005|Clairde Lune|650003|6FB10000|E|82E0000|1B|65A28000|0|0|0|0|0|0|0|0|0|0|39193|47837|8728|10000|||94.59|104.05|0.00|2.32|44|44|0|10000|||100.00|90.00|0.00|0.00|00007128|0|6aea8b24a0bd52c0".split("|")}),e({line:"22|2021-12-19T23:54:16.7400000+08:00|4000DE3C|ハイデリン|65A2|クリスタル・ウォタガ|1034976B|Sendou Erika|A10|4D00000|650003|ABEB0000|E|82E0000|1B|65A28000|0|0|0|0|0|0|0|0|46282|53206|10000|10000|||94.80|103.65|0.00|2.36|44|44|0|10000|||100.00|90.00|0.00|0.00|00007128|1|89ca4d42bd59327c".split("|")})}();