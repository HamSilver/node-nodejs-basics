import { argv } from "process";

const parseArgs = () => {
  const result = [];
  for (let i = 2; i < argv.length; i += 2) {
    result.push(`${argv[i].slice(2)} is ${argv[i + 1]}`);
  }
  if (result.length) {
    console.log(result.join`, `);
  }
};

parseArgs();
