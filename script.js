const os = require('os');

const { getUserName } = require("./helpers/getUserName");
const { greeting } = require("./handlers/greeting");
const { dirWork } = require("./handlers/dirWork");

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
