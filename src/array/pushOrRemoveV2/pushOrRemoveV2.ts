export function pushOrRemoveV2<T>(
  array: T[],
  item: T,
  equalityFn: (currArrayItem: T) => boolean
): T[] {
  if (array === undefined || array === null) return [item];

  let newArray = [...array];

  const indexFound = newArray.findIndex(equalityFn);
  if (~indexFound) {
    // remove
    newArray.splice(indexFound, 1);
  } else {
    // push
    newArray = [...newArray, item];
  }

  return newArray;
}
