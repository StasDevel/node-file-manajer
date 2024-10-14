const fs = require("fs");
const crypto = require("crypto");
const process = require("node:process");
const path = require("path");

function hash(way) {
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

exports.hash = hash;
