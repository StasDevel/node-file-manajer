const { brotliCompress } = require("zlib");
const fs = require("fs");
const path = require("path");

async function compress(wayToFile, wayToDestination) {
  const fileUrl = path.join(process.cwd(), wayToFile);
  const destinationUrl = path.join(process.cwd(), wayToDestination);

  const readData = [];
  const readableStream = fs.createReadStream(fileUrl);
  readableStream.on("data", (chunk) => {
    readData.push(chunk);
  });
  readableStream.on("end", () => {
    const combinedData = Buffer.concat(readData);
    console.log(combinedData.length);
    brotliCompress(combinedData, (err, data) => {
      const writebleStream = fs.createWriteStream(destinationUrl);
      writebleStream.write(data);
    });
  });
}

exports.compress = compress;
