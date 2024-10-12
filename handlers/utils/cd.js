const fs = require("node:fs/promises");

function cd(dirName) {
  fs.lstat(dirName)
    .then((data) => {
      if (data.isDirectory()) {
        process.chdir(`${dirName}`);
      }
      console.log(`You are currently in ${process.cwd()}`);
    })
    .catch(() => console.log("Invalid input"));
}

exports.cd = cd;
