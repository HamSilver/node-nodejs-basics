import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

const archive = "./files/archive.gz";
const extractedFile = "./files/fileToCompress.txt";

const decompress = async () => {
  const gunzip = createUnzip();
  const streamFrom = createReadStream(archive);
  const streamTo = createWriteStream(extractedFile);

  try {
    await pipeline(streamFrom, gunzip, streamTo);
  } catch (error) {
    throw error;
  }
};

await decompress();
