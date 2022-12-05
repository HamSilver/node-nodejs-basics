import { readFile } from "node:fs/promises";

const fileToRead = "./files/fileToRead.txt";
const errorMsg = "FS operation failed";

const read = async () => {
  try {
    const data = await readFile(fileToRead, { encoding: 'utf8' });
    console.log(data);
  } catch (_) {
    throw new Error(errorMsg);
  }
};

await read();
