import { Worker } from "node:worker_threads";
import { cpus } from "node:os";

const START_NUMBER = 10;

const workerFile = "./worker.js";
const cores = cpus().length;
let number = START_NUMBER;

const makeWorker = () =>
  new Promise((resolve, reject) => {
    const worker = new Worker(workerFile, { workerData: number++ });
    worker.on("message", (message) =>
      resolve({ status: "resolved", data: message })
    );
    worker.on("error", (_) => reject({ status: "error", data: null }));
  });

const performCalculations = async () => {
  const results = (
    await Promise.allSettled([...Array(cores)].map(() => makeWorker()))
  ).map((data) => {
    return data.value;
  });

  console.log(results);
};

performCalculations();
