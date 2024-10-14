import { up } from "./utils/up.js";
import { ls } from "./utils/ls.js";
import { cd } from "./utils/cd.js";
import { cat } from "./utils/cat.js";
import { add } from "./utils/add.js";
import { rn } from "./utils/rn.js";
import { cp } from "./utils/cp.js";
import { rm } from "./utils/rm.js";
import { mv } from "./utils/mv.js";
import { OS } from "./utils/os.js";
import { hash } from "./utils/hash.js";
import { compress } from "./utils/compress.js";
import { decompress } from "./utils/decompress.js";

export function dirWork(command) {
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
