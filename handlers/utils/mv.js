import { rm } from "./rm.js";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

export function mv(pathToFile, pathToNewFile) {
  const takeFrom = path.join(process.cwd(), pathToFile);
  const putInto = path.join(
    process.cwd(),
    pathToNewFile,
    path.basename(pathToFile)
  );

  let resData = [];
  const readableStream = fs.createReadStream(takeFrom);
  const writebleStream = fs.createWriteStream(putInto);
  readableStream.on("error", () => {
    console.log("Operation failed");
    return;
  });
  writebleStream.on("error", () => {
    console.log("Operation failed");
    return;
  });
  readableStream.on("data", (data) => {
    resData.push(data);
  });
  readableStream.on("end", () => {
    const writeData = Buffer.concat(resData);
    writebleStream.write(writeData);
    rm(pathToFile);
  });
}
