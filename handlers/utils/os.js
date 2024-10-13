const os = require("node:os");

function OS(argument) {
  if (argument === "--EOL") {
    console.log(JSON.stringify(os.EOL));
  }

  if (argument === "--cpus") {
    console.log(os.cpus());
  }

  if (argument === "--homedir") {
    console.log(os.homedir());
  }

  if (argument === "--username") {
    console.log(os.userInfo().username);
  }

  if (argument === "--architecture") {
    console.log(os.arch());
  }
}

exports.OS = OS;
