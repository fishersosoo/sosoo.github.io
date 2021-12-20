"use strict";

import "./index.scss";
import IMGcastingMonitor from "./images/castingMonitor.png";
import IMGkeigennRecord from "./images/keigennRecord.png";
import IMGkeySkillTimer from "./images/keySkillTimer.png";
import IMGteamWatch from "./images/teamWatch.png";
import IMGcastingToChinese from "./images/castingToChinese.png";
const table = document.querySelector("table");
const list = {
  "fflogsUploaderDownload": { type: "HTML网页", describe: "FFLOGS上传器下载", img: "", useful: "永久", params: "" },
  "triggerConverter": { type: "HTML网页", describe: "旧触发器正则转换", img: "", useful: "before 6.0", params: "" },
  "castingMonitor": {
    type: "ACT悬浮窗",
    describe: "6.0施法监控",
    img: IMGcastingMonitor,
    useful: "6.X",
    params: "?duration=15&tetris=false",
  },
  "keigennRecord": {
    type: "ACT悬浮窗",
    describe: "6.0减伤监控",
    img: IMGkeigennRecord,
    useful: "6.X",
    params: "?maxLength=800&24Mode=false&bgOpacity=0.45&bodyOpacity=1&fontSize=12px",
  },
  "keySkillTimer": {
    type: "ACT悬浮窗",
    describe: "6.0团辅监控",
    img: IMGkeySkillTimer,
    useful: "6.X",
    params: "?dajinengTTS=true&tuanfuTTS=true&inPartyOnly=true",
  },
  "teamWatch": { type: "ACT悬浮窗", describe: "6.0技能监控", img: IMGteamWatch, useful: "6.X", params: "?scale=1" },
  "mpTick": { type: "ACT悬浮窗", describe: "回蓝计时", img: "", useful: "All", params: "" },
  "castingToChinese": {
    type: "ACT悬浮窗",
    describe: "读条汉化",
    img: IMGcastingToChinese,
    useful: "6.0",
    params: "?focus=false&advance=8",
  },
};
let thead = document.createElement("tr");
const theadChild = ["类型", "适用版本", "点击跳转", "预览"];
theadChild.forEach((value) => {
  let theadChildNode = document.createElement("th");
  theadChildNode.innerText = value;
  thead.appendChild(theadChildNode);
});
table.appendChild(thead);

for (const key in list) {
  const project = list[key];
  let tr = document.createElement("tr");
  let tdType = document.createElement("td");
  let tdUseful = document.createElement("td");
  let tdText = document.createElement("td");
  let tdImg = document.createElement("td");
  let td3A = document.createElement("a");
  td3A.href = `./${key}.html${project.params}`;
  td3A.innerText = project.describe;
  if (project.type === "ACT悬浮窗") {
    td3A.addEventListener("click", () => {
      alert(
        `
如何添加悬浮窗：ACT-插件-OverlayPlugin（NGLD），左下方“新建”，任意起名，类型选择“自订 - 数据统计”。添加完成后，在右侧窗体的路径中，填入跳转后的页面地址。

如何自定义属性：修改url链接中".html?"后方的字符串，若没有则无法自定义或有单独设置页面。
        `
      );
    });
  }
  let td4Img = new Image();
  td4Img.src = project.img;
  tdImg.appendChild(td4Img);
  tdType.innerText = project.type;
  tdUseful.innerText = project.useful;
  tr.appendChild(tdType);
  tr.appendChild(tdUseful);
  tr.appendChild(tdText);
  tdText.appendChild(td3A);
  tr.appendChild(tdImg);
  table.appendChild(tr);
}