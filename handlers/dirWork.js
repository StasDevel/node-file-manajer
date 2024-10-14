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
const { decompress } = require("./utils/decompress");

function dirWork(command) {
  if (command === "up") {
    return up();
  }

  if (command === "ls") {
    return ls();
  }

  if (command.startsWith("cd ")) {
    const commandArray = command.split(" ");

    if (commandArray.length === 2) {
      const dirName = commandArray[1];
      return cd(dirName);
    }
  }

  if (command.startsWith("cat ")) {
    const commandArray = command.split(" ");

    if (commandArray.length === 2) {
      const fileName = commandArray[1];
      return cat(fileName);
    }
  }

  if (command.startsWith("add ")) {
    const commandArray = command.split(" ");

    if (commandArray.length === 2) {
      const fileName = commandArray[1];
      return add(fileName);
    }
  }

  if (command.startsWith("rn ")) {
    const commandArray = command.split(" ");
    if (commandArray.length === 3) {
      const fileName = commandArray[1];
      const newFileName = commandArray[2];

      return rn(fileName, newFileName);
    }
  }

  if (command.startsWith("cp ")) {
    const commandArray = command.split(" ");
    if (commandArray.length === 3) {
      const pathToFile = commandArray[1];
      const newDir = commandArray[2];

      return cp(pathToFile, newDir).catch(() => console.log("error"));
    }
  }

  if (command.startsWith("rm ")) {
    const commandArray = command.split(" ");
    if (commandArray.length === 2) {
      const pathToFile = commandArray[1];

      return rm(pathToFile);
    }
  }

  if (command.startsWith("mv ")) {
    const commandArray = command.split(" ");
    if (commandArray.length === 3) {
      const pathToFile = commandArray[1];
      const newDir = commandArray[2];

      return mv(pathToFile, newDir);
    }
  }

  if (command.startsWith("os ")) {
    const commandArray = command.split(" ");
    if (commandArray.length === 2) {
      const argument = commandArray[1];

      return OS(argument);
    }
  }

  if (command.startsWith("hash ")) {
    const commandArray = command.split(" ");
    if (commandArray.length === 2) {
      const argument = commandArray[1];

      return hash(argument);
    }
  }

  if (command.startsWith("compress ")) {
    const commandArray = command.split(" ");
    if (commandArray.length === 3) {
      const pathToFile = commandArray[1];
      const newDestination = commandArray[2];

      return compress(pathToFile, newDestination);
    }
  }

  if (command.startsWith("decompress ")) {
    const commandArray = command.split(" ");
    if (commandArray.length === 3) {
      const pathToFile = commandArray[1];
      const newDestination = commandArray[2];

      return decompress(pathToFile, newDestination);
    }
  }

  console.log("Invalid input");
}

exports.dirWork = dirWork;
