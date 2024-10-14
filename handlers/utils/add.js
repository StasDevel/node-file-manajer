import fsPromise from "node:fs/promises";
import path from "node:path";

export function add(fileName) {
  try {
    const fileWay = path.join(process.cwd(), fileName);

    fsPromise.appendFile(fileWay, "");
  } catch {
    console.log("Operation failed");
  }
}
