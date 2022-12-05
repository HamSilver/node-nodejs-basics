import { readdir } from "node:fs/promises";

const folder = "./files";
const errorMsg = "FS operation failed";

const list = async () => {
  try {
    const files = await readdir(folder);
    files.forEach((file) => console.log(file));
  } catch (e) {
    throw new Error(errorMsg);
  }
};

await list();
