const fsPromise = require("node:fs/promises");
const path = require("path");

function rm(pathToFile) {
  const deleFile = path.join(process.cwd(), "testfiles", pathToFile);

  fsPromise.rm(deleFile);
}

exports.rm = rm;
