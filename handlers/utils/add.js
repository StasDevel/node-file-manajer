const fsPromise = require("node:fs/promises");
const path = require("path");

function add(fileName) {
  try {
    const fileWay = path.join(process.cwd(), fileName);

    fsPromise.appendFile(fileWay, "");
  } catch {
    console.log("Operation failed");
  }
}

exports.add = add;
