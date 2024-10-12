const { up } = require("./utils/up");
const { ls } = require("./utils/ls");
const { cd } = require("./utils/cd");

function dirWork(command) {
  if (command === "up") {
    up();
  } else if (command === "ls") {
    ls();
  } else if (command.includes("cd ")) {
    const dirName = command.split(" ")[1];
    cd(dirName);
  }
}

exports.dirWork = dirWork;
