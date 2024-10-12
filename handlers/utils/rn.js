const fsPromise = require("node:fs/promises");
const path = require("path");

function rn(fileName, newFileName) {
  const fileWay = path.join(process.cwd(), "testfiles", fileName);
  const newFileWay = path.join(process.cwd(), "testfiles", newFileName);

  fsPromise.rename(fileWay, newFileWay);
}

exports.rn = rn;
