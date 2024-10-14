const fsPromise = require("node:fs/promises");
const path = require("path");

async function rn(fileName, newFileName) {
  try {
    const fileWay = path.join(process.cwd(), fileName);
    const newFileWay = path.join(process.cwd(), newFileName);

    const res = await fsPromise.rename(fileWay, newFileWay);
  } catch {
    console.log("Operation failed");
  }
}

exports.rn = rn;
