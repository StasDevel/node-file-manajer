const fs = require("node:fs");
const path = require("path");

async function cp(pathToFile, pathToNewFile) {
  const takeFrom = path.join(process.cwd(), pathToFile);
  const putInto = path.join(process.cwd(), pathToNewFile);

  const readableStream = fs.createReadStream(takeFrom);
  readableStream.on("error", () => {
    console.log("Operation failed");
  });
  const writebleStream = fs.createWriteStream(putInto);
  readableStream.pipe(writebleStream).on("error", () => {
    console.log("Operation failed");
  });
}

exports.cp = cp;
