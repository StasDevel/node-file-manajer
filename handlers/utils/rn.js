import fsPromise from "node:fs/promises";
import path from "node:path";
import process from "node:process";

export async function rn(fileName, newFileName) {
  try {
    const fileWay = path.join(process.cwd(), fileName);
    const newFileWay = path.join(process.cwd(), newFileName);

    const res = await fsPromise.rename(fileWay, newFileWay);
  } catch {
    console.log("Operation failed");
  }
}
