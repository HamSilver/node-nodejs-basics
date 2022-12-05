import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

const fileToCompress = "./files/fileToCompress.txt";
const archive = "./files/archive.gz";

const compress = async () => {
  const gzip = createGzip();
  const streamFrom = createReadStream(fileToCompress);
  const streamTo = createWriteStream(archive);

  try {
    await pipeline(streamFrom, gzip, streamTo);
  } catch (error) {
    throw error;
  }
};

await compress();
