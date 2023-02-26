import { Chalk } from "chalk";

export function myConsoleError(text: any) {
  const chalk = new Chalk();
  if (typeof text === "string") {
    console.log("❌", chalk.redBright(text));
  } else {
    console.log("❌", chalk.redBright(JSON.stringify(text)));
  }
  return;
}
