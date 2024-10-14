import os from "os";

export function OS(argument) {
  if (argument === "--EOL") {
    console.log(JSON.stringify(os.EOL));
    return;
  }

  if (argument === "--cpus") {
    console.log(os.cpus());
    return;
  }

  if (argument === "--homedir") {
    console.log(os.homedir());
    return;
  }

  if (argument === "--username") {
    console.log(os.userInfo().username);
    return;
  }

  if (argument === "--architecture") {
    console.log(os.arch());
    return;
  }
  console.log("Operation failed");
}
