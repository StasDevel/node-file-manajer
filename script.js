const { getUserName } = require("./helpers/getUserName");
const { greeting } = require("./handlers/greeting");

const username = getUserName();

greeting(username);

const stdinStream = process.stdin;
stdinStream.on("data", (data) => {
  let chunk = data.toString().replace("\n", "");
  if (chunk === ".exit") {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit();
  }
});

process.on("SIGINT", () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});

// console.table(
//   [
//     { a: 1, b: 2 },
//     { a: 3, b: 7, c: "y" },
//   ],
//   ["a", "b"]
// );
