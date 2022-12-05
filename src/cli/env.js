import { env } from "process";

const parseEnv = () => {
  const vars = Object.keys(env)
    .filter((value) => value.startsWith("RSS_"))
    .map((value) => `${value}=${env[value]}`)
    .join("; ");
  if (vars) {
    console.log(vars);
  }
};

parseEnv();
