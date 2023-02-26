export const upToNDecimals = (num: number, n = 1) => {
  const y = 10 ** n;

  return Math.round(num * y) / y; // Ex: (1.234 * 100) / 100 = 1.23
};
