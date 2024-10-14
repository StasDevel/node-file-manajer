import { brotliCompress } from "zlib";
import fs from "node:fs";
import path from "path";
import process from "node:process";

export async function compress(wayToFile, wayToDestination) {
  const fileUrl = path.join(process.cwd(), wayToFile);
  const destinationUrl = path.join(process.cwd(), wayToDestination);

  const readData = [];
  const readableStream = fs.createReadStream(fileUrl);
  readableStream.on("error", () => {
    console.log("Operation failed");
  });
  readableStream.on("data", (chunk) => {
    readData.push(chunk);
  });
  readableStream.on("end", () => {
    const combinedData = Buffer.concat(readData);
    brotliCompress(combinedData, (err, data) => {
      const writebleStream = fs.createWriteStream(destinationUrl);
      writebleStream.write(data);
    });
  });
}
