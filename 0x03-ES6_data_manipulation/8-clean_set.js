export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0 || !(set instanceof Set) || set.size === 0) {
    return '';
  }

  return [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  // let result = '';
  // for (const value of set) {
  //     if (value.startsWith(startString)) {
  //         if (result) {
  //             result += '-';
  //         }
  //         result += value.slice(startString.length);
  //     }
  // }
  // return result;
}
