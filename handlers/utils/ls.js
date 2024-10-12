const fs = require("node:fs/promises");

function ls() {
  let listOfFiles = [];
  const path = process.cwd();
  fs.readdir(path).then(async (data) => {
    for (let elem of data) {
      const res = await fs.lstat(elem);
      listOfFiles.push({
        Name: elem,
        Type: res.isFile() ? "file" : "directory",
      });
    }
    console.table(listOfFiles, ["Name", "Type"]);
  });
}

exports.ls = ls;
