import process from "node:process";
import fsPromise from "node:fs/promises";
import path from "node:path";

export async function rm(pathToFile) {
  try {
    const deleFile = path.join(process.cwd(), pathToFile);

    const res = await fsPromise.rm(deleFile);
  } catch {
    console.log("Operation failed");
  }
}
