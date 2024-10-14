import process from "node:process";

export function getUserName() {
  const enteredArguments = process.argv;
  let userName;
  enteredArguments.map((elem) => {
    if (elem.includes("username")) {
      if (elem.split("=")[1]) {
        userName = elem.split("=")[1];
      } else {
        console.log("Operation failed. Enter your name");
        process.exit();
      }
    }
  });
  return userName;
}
