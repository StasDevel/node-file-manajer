const fs = require("node:fs");
const path = require("path");

function cp(pathToFile, pathToNewFile) {
  const takeFrom = path.join(process.cwd(), pathToFile);
  const putInto = path.join(process.cwd(), pathToNewFile);

  const readableStream = fs.createReadStream(takeFrom);
  const writebleStream = fs.createWriteStream(putInto);
  readableStream.pipe(writebleStream);
}

exports.cp = cp;
