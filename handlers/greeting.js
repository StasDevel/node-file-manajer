const process = require("node:process");
function greeting(userName) {
  process.stdout.write(`Welcome to the File Manager, ${userName} \n`);
  console.log(`You are currently in ${process.cwd()}`);
}

exports.greeting = greeting;
