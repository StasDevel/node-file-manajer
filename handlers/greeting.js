import process from "node:process";

export function greeting(userName) {
  process.stdout.write(`Welcome to the File Manager, ${userName} \n`);
  console.log(`You are currently in ${process.cwd()}`);
}
