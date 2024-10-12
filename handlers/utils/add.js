const fsPromise = require("node:fs/promises");
const path = require("path");

function add(fileName) {
  const fileWay = path.join(process.cwd(), "testfiles", fileName);

  fsPromise.appendFile(fileWay, "");
}

exports.add = add;
