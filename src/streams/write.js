import { createWriteStream } from "node:fs";
import { stdin } from "process";

const fileToWrite = "./files/fileToWrite.txt";

const write = async () => {
  const stream = createWriteStream(fileToWrite, { encoding: "utf8" });

  stdin.on("data", (data) => {
    stream.end(data.toString());
    process.exit();
  });
};

await write();
