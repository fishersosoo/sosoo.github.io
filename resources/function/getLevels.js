"use strict";

let levels = {};
addOverlayListener("LogLine", (e) => {
  if (e.line[0] === "03" && e.line[2].substring(0, 1) === "1") {
    levels[e.line[2]] = { level: parseInt(e.line[5], 16), name: e.line[3] };
  } else if (e.line[0] === "04" && e.line[2].substring(0, 1) === "1") {
    delete levels[e.line[2]];
  }
});
export { levels };
