import { Chalk } from "chalk";

export function myConsoleSuccess(text: any) {
  const chalk = new Chalk();
  if (typeof text === "string") {
    console.log("✅", chalk.greenBright(text));
  } else {
    console.log("✅", chalk.greenBright(JSON.stringify(text)));
  }
  return;
}
