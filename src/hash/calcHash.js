import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const fileToRead = "./files/fileToCalculateHashFor.txt";
const errorMsg = "File reading failed";

const calculateHash = async () => {
  try {
    const data = await readFile(fileToRead, { encoding: "utf8" });
    const hash = createHash("sha256");
    console.log(hash.update(data).digest("hex"));
  } catch (_) {
    throw new Error(errorMsg);
  }
};

await calculateHash();
