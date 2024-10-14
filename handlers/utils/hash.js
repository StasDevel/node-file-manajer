import fs from "node:fs";
import crypto from "crypto";
import process from "node:process";
import path from "node:path";

export function hash(way) {
  const hash = crypto.createHash("sha256");
  hash.setEncoding("hex");
  const file = path.join(process.cwd(), way);

  const readStream = fs.createReadStream(file);
  readStream.on("error", () => {
    console.log("Operation failed");
  });
  readStream.on("data", (data) => {
    hash.update(data);
  });
  readStream.on("end", () => {
    console.log(hash.digest("hex"));
  });
}
