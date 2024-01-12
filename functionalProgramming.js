// const words = [
//   "the",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];

// //words.filter(word => word.length > 3)

// function filter(arr, cb) {
//   const res = [];
//   for (let word of arr) {
//     if (cb(word)) {
//       res.push(word);
//     }
//   }
//   return res;
// }
// console.log(filter(words, (word) => word.length > 3));

() => {};

// const words = new Set([
//   "the",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ]);

// function groupBy(iterable, cb) {
//   const result = new Map();
//   for (let word of iterable) {
//     const key = cb(word);
//     if (!result.has(key)) {
//       result.set(key, []);
//     }
//     result.get(key).push(word);
//   }

//   return result;
// }
// console.log(groupBy(words, (a) => a.length));

() => {};

// Object.getOwnPropertyNames(Array.prototype)

// [1,2,3,4].at(-1)

// [
//   "at",
//   "reverse",
//   "slice",
//   "lastIndexOf",
//   "splice",
//   "includes",
//   "indexOf",
//   "join",
//   "flat",
//   "flatMap",
//   "toReversed",
//   "toSorted",
//   "toSpliced",
//   "with",

//   "find",
//   "findIndex",
//   "findLast",
//   "findLastIndex",
//   "sort",
//   "forEach",
//   "filter",
//   "map",
//   "every",
//   "some",
//   "reduce",
//   "reduceRight",
// ];

() => {};

// const words = [
//   "the",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];
() => {};

// function find(arr, cb) {
//   for (let word of arr) {
//     const length = cb(word);
//     if (length) {
//       return word;
//     }
//   }
//   return undefined;
// }
// console.log(find(words, (item) => item.length === 5));

() => {};

//console.log(words.findIndex((el) => el === "over"));
// function findIndex(arr, cb) {
//   for (let i = 0; i < arr.length; i += 1) {

//     if (cb(arr[i])) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findIndex(words, (element) => element === "oer"));
// console.log(findIndex(words, (element) => element === "over"));

() => {};

// const words = [
//   "the",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];

const words_2 = [10, 15, 14, 100, 17, 12, 14, 3];

// function findLast(arr, cb) {
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     if (cb(arr[i])) {
//       return arr[i];
//     }
//   }  //undefined ?
// }
// console.log(findLast(words, (el) => el.length === 5));
//console.log(findLast(words, (el) => el === "fx"));
//console.log(findLast(words_2, (el) => el % 2 === 0));

() => {};

// function findLastIndex(arr, cb) {
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     if (cb(arr[i])) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findLastIndex(words, (el) => el.length < 4));
// console.log(findLastIndex(words, (el) => el.length > 10));
// console.log(findLastIndex(words_2, (el) => el > 50));
// console.log(findLastIndex(words_2, (el) => el < 2));

() => {};

// function sort(arr, cb) {
//   let result = [...arr];
//   console.log(cb(10, 15));
//   for (let j = 0; j < result.length; j += 1) {
//     for (let i = 0; i < result.length - 1; i += 1) {
//       if (cb(result[i], result[i + 1])) {
//         let min = result[i];
//         result[i] = result[i + 1];
//         result[i + 1] = min;
//       }
//     }
//   }
//   return result;
// }
// console.log(sort(words_2, (a, b) => a > b));

// console.log(sort(words, (a, b) => a.length > b.length));
// console.log(sort(words, (a, b) => a > b));

() => {};

// function forEach(arr, cb) {
//   const res = [];
//   for (let item of arr) {
//     if (cb(item)) {
//       res.push(item);
//     }
//   }
//   return res.length > 0 ? res : 0;
// }
// console.log(forEach(words, (el) => el.length > 3));
// console.log(forEach(words, (el) => el.length < 3));
// console.log(forEach(words_2, (el) => el % 2 !== 0));

() => {};

// function map(arr, cd) {
//   const res = [];
//   for (let item of arr) {
//     res.push(cd(item));
//   }
//   return res;
// }
// console.log(map(words, (el) => (el.length >= 4 ? el : el + el)));
// console.log(map(words_2, (el) => (el >= 12 ? el * 2 : el + el)));

() => {};

// function every(arr, cb) {
//   for (let item of arr) {
//     if (!cb(item)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(every(words, (el) => typeof el === "string"));
// console.log(every(words_2, (el) => typeof el === "number"));

() => {};

// function some(arr, cb) {
//   for (let item of arr) {
//     if (cb(item)) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(some(words, (el) => el.length === 5));
// console.log(some(words_2, (el) => el < 5));
// console.log(some(words_2, (el) => el > 100));

() => {};

// const words = [
//   "the",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];

// function reduce(arr, cb, initialAkk) {
//   let akk = initialAkk !== undefined ? initialAkk : arr[0];
//   let a = initialAkk !== undefined ? 0 : 1;

//   for (let i = a; i < arr.length; i += 1) {
//     akk = cb(akk, arr[i]);
//   }
//   return akk;
// }

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// // // // // 10

// console.log(reduce(["a", "b", "c"], (a, b) => ({ [b]: a }), {}));
// //{ "c": { "b": { "a": {} } } }
// console.log(reduce([1, 2, 3, 4], (a, b) => a + b));
// //10;

// console.log(reduce(["a", "b", "c"], (a, b) => ({ [b]: a }))); //???????
// { "c": { "b": "a"} }

// console.log(reduce([], (a, b) => a + b));
// // TypeError: Reduce of empty array with no initial value

// console.log(reduce([], (a, b) => a + b, 0));
// // 0

////////////////////////////////////////////////

// function reduce(arr, cb) {
//   let akk = 0;
//   for (let item of arr) {
//     akk += cb(item);

//     if (akk[0] === "0") {
//       akk = akk.slice(1);
//     }
//   }
//   return akk;
// }
// console.log(reduce(words, (el) => el)); //?
// console.log(reduce(words, (el) => el.length < 5));
// console.log(reduce(words_2, (el) => el)); //?
// console.log(reduce(words_2, (el) => el * 10));

() => {};

// function reduceRight(arr, akk, cb) {
//   for (let item of arr.reverse()) {
//     akk += cb(item);
//   }
//   return akk;
// }
// console.log(reduceRight(words_2, 0, (el) => el * 2));

() => {};

// function sortMinLength(arr) {
//   let min = arr[0].length;
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     if (arr[i + 1].length < min) {
//       min = arr[i + 1].length;
//     }
//   }
//   return min;
// }
() => {};
// console.log(sortMinLength(words));
//https://maxcode.dev/problems/group-by-equality
// https://maxcode.dev/problems/map-group-by

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// https://maxcode.dev/courses/async
// race, simple-all, all
// console.log({
//   3: "thefoxthedog",
//   4: "overlazy",
//   5: "quickbrownjumps",
// });
() => {};
const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
() => {};

() => {};
// const words_3 = [
//   { x: 1, y: 2 },
//   { x: 4, y: 5 },
//   { x: 1, y: 3 },
//   { x: 4, y: 2 },
//   { x: 7, y: 3 },
// ];

// function group(arr, isEqual) {
//   const groups = [];

//   while (arr.length > 0) {
//     const firstElement = arr[0];
//     const currentGroup = arr.filter((el) => isEqual(el, firstElement));
//     groups.push(currentGroup);
//     arr = arr.filter((el) => !isEqual(el, firstElement));
//   }
//   return groups;
// }

// console.log(group(words, (a, b) => a.length === b.length));
// console.log(group(words_3, (a, b) => a.x === b.x));
// console.log(group(words_3, (a, b) => a.y === b.y));

//console.log(group(["A", "B", "A", "C", "B", "B"], (a, b) => a === b));

() => {};
