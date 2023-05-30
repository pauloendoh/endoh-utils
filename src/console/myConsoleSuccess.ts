type Params = Parameters<Console["log"]>;

export function myConsoleSuccess(...args: Params) {
  console.log("✅", ...args);
}
