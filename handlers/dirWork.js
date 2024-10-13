const { up } = require("./utils/up");
const { ls } = require("./utils/ls");
const { cd } = require("./utils/cd");
const { cat } = require("./utils/cat");
const { add } = require("./utils/add");
const { rn } = require("./utils/rn");
const { cp } = require("./utils/cp");
const { rm } = require("./utils/rm");
const { mv } = require("./utils/mv");
const { OS } = require("./utils/os");
const { hash } = require("./utils/hash");
const { compress } = require("./utils/compress");

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

  if (command.startsWith("mv ")) {
    const pathToFile = command.split(" ")[1];
    const newDir = command.split(" ")[2];

    mv(pathToFile, newDir);
  }

  if (command.startsWith("os ")) {
    const argument = command.split(" ")[1];

    OS(argument);
  }

  if (command.startsWith("hash ")) {
    const argument = command.split(" ")[1];

    hash(argument);
  }

  if (command.startsWith("compress ")) {
    const pathToFile = command.split(" ")[1];
    const newDestination = command.split(" ")[2];

    compress(pathToFile, newDestination);
  }
}

exports.dirWork = dirWork;
