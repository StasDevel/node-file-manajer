const process = require("node:process");
function greeting(userName) {
  process.stdout.write(`Welcome to the File Manager, ${userName} \n`);
}

exports.greeting = greeting;
