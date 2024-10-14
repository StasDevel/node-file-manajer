import fs from "node:fs";
import path from "node:path";
import process from "node:process";

export async function cp(pathToFile, pathToNewFile) {
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
