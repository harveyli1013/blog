/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-17 00:39:46
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-09-17 15:57:52
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */
const fs = require("fs");
const tree = require("tree-node-cli");

const PROJECT_STRUCTURE_LABEL = "项目结构";
const PROJECT_STRUCTURE_START = "project_structure_start";

const dirs = tree(".", {
  allFiles: true,
  exclude: [/node_modules/, /^.git$/, /dist/, /build/],
  trailingSlash: true,
  maxDepth: 4,
  dirsFirst: true,
  lineAscii: true,
});

try {
  const data = fs.readFileSync("./README.md", "utf8").split("\n");
  const regex = /^##\s(.+)/;
  const index = data.findIndex(
    (str) =>
      str.match(regex) &&
      str.match(regex)[1] &&
      str.match(regex)[1].trim() === PROJECT_STRUCTURE_LABEL
  );
  let startIndex = 0,
    endIndex = 0;

  if (index >= 0) {
    startIndex = data.indexOf("```text=" + PROJECT_STRUCTURE_START, index);
  }
  if (startIndex > 0) {
    endIndex =
      data.indexOf("```", startIndex) > 0 ? data.indexOf("```", startIndex) : 0;
  } else {
    startIndex = 0;
  }

  let dirSection =
    "```text=" + PROJECT_STRUCTURE_START + "\n" + dirs + "\n" + "```";
  startIndex;
  if (index > 0) {
    data.splice(startIndex, endIndex - startIndex + 1, dirSection);
  } else {
    data.splice(
      data.length,
      0,
      `## ${PROJECT_STRUCTURE_LABEL}\r\n${dirSection}`
    );
  }

  fs.writeFileSync("./README.md", data.join("\n"));
  console.log("******************************");
  console.log("*    project tree updated    *");
  console.log("******************************");
} catch (err) {
  console.error(err);
}
