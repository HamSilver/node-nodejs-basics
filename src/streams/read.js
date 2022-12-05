import { stdout } from "process";
import { createReadStream } from "node:fs";

const fileToRead = "./files/fileToRead.txt";

const read = async () => {
  const stream = createReadStream(fileToRead, { encoding: "utf8" });

  stream.on("data", (data) => {
    stdout.write(data);
  });

  stream.on("error", (error) => {
    throw error;
  });
};

await read();
