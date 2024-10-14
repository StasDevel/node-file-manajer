import fs from "node:fs";
import path from "node:path";
import process from "node:process";

export function cat(fileName) {
  try {
    const fileWay = path.join(process.cwd(), fileName);

    const readableStream = fs.createReadStream(fileWay);
    const res = [];
    readableStream.on("error", () => {
      console.log("Operation failed");
    });
    readableStream.on("data", (chunk) => {
      res.push(chunk);
    });
    readableStream.on("end", () => {
      const fileContent = Buffer.concat(res);
      console.log(fileContent.toString());
    });
  } catch {
    console.log("Operation failed");
  }
}
