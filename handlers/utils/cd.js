import process from "node:process";
import fs from "node:fs/promises";

export function cd(dirName) {
  fs.lstat(dirName)
    .then((data) => {
      if (data.isDirectory()) {
        process.chdir(`${dirName}`);
      }
      console.log(`You are currently in ${process.cwd()}`);
    })
    .catch(() => console.log("Operation failed"));
}
