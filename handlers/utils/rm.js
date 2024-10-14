const fsPromise = require("node:fs/promises");
const path = require("path");

async function rm(pathToFile) {
  try {
    const deleFile = path.join(process.cwd(), pathToFile);

    const res = await fsPromise.rm(deleFile);
  } catch {
    console.log("Operation failed");
  }
}

exports.rm = rm;
