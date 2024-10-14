import os from "os";

import { getUserName } from "./helpers/getUserName.js";
import { greeting } from "./handlers/greeting.js";
import { dirWork } from "./handlers/dirWork.js";

const username = getUserName();

greeting(username);

const stdinStream = process.stdin;
stdinStream.on("data", (data) => {
  let chunk = data.toString().replace(os.EOL, "");
  if (chunk === ".exit") {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit();
  }

  dirWork(chunk);
});

process.on("SIGINT", () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});
