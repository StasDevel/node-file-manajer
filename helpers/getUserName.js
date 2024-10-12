const process = require("node:process");

function getUserName() {
  const enteredArguments = process.argv;
  let userName;
  enteredArguments.map((elem) => {
    if (elem.includes("username")) {
      userName = elem.split("=")[1];
    }
  });
  return userName;
}

exports.getUserName = getUserName;
