export default function valueIsOneOf<T>(val: T, array: T[]): boolean {
  return array.includes(val);
}
