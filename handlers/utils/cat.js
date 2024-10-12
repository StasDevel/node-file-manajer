const fs = require("fs");
const path = require("path");

function cat(fileName) {
  const fileWay = path.join(process.cwd(), "testfiles", fileName);

  const readableStream = fs.createReadStream(fileWay);
  const res = [];
  readableStream.on("error", (error) => {
    console.log("Ошибка при чтении файла"); // Изменить вывод
  });
  readableStream.on("data", (chunk) => {
    res.push(chunk);
  });
  readableStream.on("end", () => {
    const fileContent = Buffer.concat(res);
    console.log(fileContent.toString());
  });
}

exports.cat = cat;
