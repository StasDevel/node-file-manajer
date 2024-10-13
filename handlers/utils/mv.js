const { rm } = require("./rm");
const fs = require("node:fs");
const path = require("path");

function mv(pathToFile, pathToNewFile) {
  const takeFrom = path.join(process.cwd(), pathToFile);
  const putInto = path.join(process.cwd(), pathToNewFile);

  let resData = [];
  const readableStream = fs.createReadStream(takeFrom);
  const writebleStream = fs.createWriteStream(putInto);
  readableStream.on("data", (data) => {
    resData.push(data);
  });
  readableStream.on("end", () => {
    const writeData = Buffer.concat(resData);
    writebleStream.write(writeData);
    rm(pathToFile);
  });
}

exports.mv = mv;
