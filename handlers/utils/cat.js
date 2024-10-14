const fs = require("fs");
const path = require("path");

function cat(fileName) {
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

exports.cat = cat;
