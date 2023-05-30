// wrapper for console.error

type Params = Parameters<Console["error"]>;

export function myConsoleError(...args: Params) {
  console.error("❌", ...args);
}
