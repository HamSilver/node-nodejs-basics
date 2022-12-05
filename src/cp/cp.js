import { spawn } from "node:child_process";
import { execPath, stdin, stdout, argv } from "node:process";

const childFile = "./files/script.js";
const stdio = [null, null, null, "ipc"];

const spawnChildProcess = async (args) => {
  const argSliced = args.slice(2);
  const childProcess = spawn(execPath, [childFile, ...argSliced], { stdio });
  stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(stdout);
};

spawnChildProcess(argv);
