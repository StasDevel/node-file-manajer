const { up } = require("./utils/up");
const { ls } = require("./utils/ls");
const { cd } = require("./utils/cd");
const { cat } = require("./utils/cat");
const { add } = require("./utils/add");
const { rn } = require("./utils/rn");
const { cp } = require("./utils/cp");
const { rm } = require("./utils/rm");

function dirWork(command) {
  if (command === "up") {
    up();
  }

  if (command === "ls") {
    ls();
  }

  if (command.startsWith("cd ")) {
    const dirName = command.split(" ")[1];
    cd(dirName);
  }

  if (command.startsWith("cat ")) {
    const fileName = command.split(" ")[1];
    cat(fileName);
  }

  if (command.startsWith("add ")) {
    const fileName = command.split(" ")[1];
    add(fileName);
  }

  if (command.startsWith("rn ")) {
    const fileName = command.split(" ")[1];
    const newFileName = command.split(" ")[2];

    rn(fileName, newFileName);
  }

  if (command.startsWith("cp ")) {
    const pathToFile = command.split(" ")[1];
    const newDir = command.split(" ")[2];

    cp(pathToFile, newDir);
  }

  if (command.startsWith("rm ")) {
    const pathToFile = command.split(" ")[1];

    rm(pathToFile);
  }
}

exports.dirWork = dirWork;
