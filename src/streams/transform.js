import { stdin, stdout } from "process";
import { Transform, pipeline } from "node:stream";

const transform = async () => {
  const transform = new Transform({
    transform(data, _, callback) {
      const reversedData = data.toString().trim().split``.reverse().join``;
      this.push(`${reversedData}\n`);
      callback();
    },
  });

  pipeline(stdin, transform, stdout, (error) => {
    throw error;
  });
};

await transform();
