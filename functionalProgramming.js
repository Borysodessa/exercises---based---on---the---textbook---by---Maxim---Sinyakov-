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

//filter

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

//const words_2 = [10, 15, 14, 100, 17, 12, 14, 3];

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

// map - group - by - advanced;

// const employees = [
//   { name: "James", income: 1000, profession: "developer", age: 23 },
//   { name: "Robert", income: 1100, profession: "qa", age: 34 },
//   { name: "John", income: 1200, profession: "designer", age: 32 },
//   { name: "Mary", income: 1300, profession: "designer", age: 22 },
//   { name: "Patricia", income: 1400, profession: "qa", age: 23 },
//   { name: "Jennifer", income: 1500, profession: "developer", age: 45 },
//   { name: "Max", income: 1600, profession: "developer", age: 27 },
// ];

// function groupBy(iterable, cb) {
//   const res = new Map();
//   for (let employee of iterable) {
//     if (!res.has(employee.profession)) {
//       res.set(employee.profession, [employee.income]);
//     } else {
//       res.get(employee.profession).push(employee.income);
//     }
//   }
//   return res;
// }
// console.log(groupBy(employees, (employee) => employee.profession));

// https://maxcode.dev/problems/multi-predicate
// https://maxcode.dev/problems/compose
// https://maxcode.dev/problems/once
// https://maxcode.dev/problems/memo
// https://maxcode.dev/problems/spy

() => {};

// const num = 20;
// const num2 = 20;
// const greaterThan53 = (num, num2) => {
//   console.log(num + num2);
// };
// greaterThan53(60, 20);

() => {};

//multiPredicate

// const greaterThan53 = (num) => num > 53;
// const endsWithZero = (num) => num.toString().at(-1) === "0";

// function multiPredicate(...fns) {
//   return (num) => {
//     // return fns.filter((fn) => fn(num) === false).length === 0;
//     return fns.every((fn) => fn(num));
//   };
// }

// const foo = multiPredicate(endsWithZero, greaterThan53);
// console.log(foo(40)); // false
// console.log(foo(99)); // false
// console.log(foo(80)); // true

() => {};

// const sum = (a, b) => {
//   return a + b;
// };

// const logName = (fn) => {
//   return (...args) => {
//     console.log(...args);
//     return fn(...args);
//   };
// };

// const wrappedSum = logName(sum);
// const result = wrappedSum(2, 3);
// console.log(result); // 5

() => {};

// compose

// const double = (x) => x * 2;
// const cube = (x) => x ** 3;
// const inc = (x) => x + 1;

// function compose(...fns) {
//   return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
// }
// const foo = compose(double, cube, inc);
// // const res0 = double(cube(inc(0))); // 2

// console.log(foo(0)); // 2
// console.log(foo(1)); // 16
// console.log(foo(2)); // 54

() => {};

// const sum = (a, b) => a + b;

// function once(fn) {
//   let oneCall = false;
//   return function (...args) {
//     if (!oneCall) {
//       oneCall = true;
//       return fn(...args);
//     }
//   };
// }
// const onceSum = once(sum);

// console.log(onceSum(2, 3)); // 5
// console.log(onceSum(5, 6)); // undefined
// console.log(onceSum(2, 3)); // undefined
// console.log(onceSum(1, 1)); // undefined

() => {};

//memo

// function memo(fn) {
//   const cache = new Map();
//   //console.log(cache);
//   return (x) => {
//     if (!cache.has(x)) {
//       cache.set(x, fn(x));
//     }
//     return cache.get(x);
//   };
// }
// function double(x) {
//   console.log(555);
//   if (typeof x !== "number") {
//     return null;
//   }
//   return x * 2;
// }
// const mDouble = memo(double);
// console.log(mDouble("10")); // null
// console.log(mDouble("10")); // null
// console.log(mDouble("10")); // null
// console.log(mDouble(10)); // 20
// console.log(mDouble(10)); // 20
// console.log(mDouble(10)); // 20
// console.log
//   mDouble({
//     Lena: 23,
//     Kolya: 25,
//     Nata: 21,
//   })

() => {};

//memo - advanced;

// function memo(fn) {
//   const cache = {};

//   return (...args) => {
//     if (Array.isArray(...args)) {
//       args = args.flat(1);
//     }
//     // console.log(args);
//     if (Object.hasOwn(cache, args)) {
//       return cache[args];
//     }
//     cache[args] = fn(args);
//     return cache[args];
//   };
// }

// function add(args) {
//   return args.reduce((acc, cur) => acc + cur, 0);
// }
// const mAdd = memo(add);
// console.log(mAdd([5, 3, 9]));
// console.log(mAdd([5, 3, 9]));
// console.log(mAdd([5, 3, 9]));

// console.log(mAdd(5, 3, 9));
// console.log(mAdd(5, 3, 9));
// console.log(mAdd(5, 3, 9));

// console.log(
//   mAdd({
//     Lena: 23,
//     Kolya: 25,
//     Nata: 21,
//   })
// );

() => {};
//for of

//spy

// function spy(fn) {
//   return (...args) => {
//     console.log(...args);
//     return fn(...args);
//   };
// }

// function repeat(...args) {
//   //console.log(args);

//   return args[0].repeat(args[1]);
// }

// function callCount() {
//   console.log(5);
// }

// const spyRepeat = spy(repeat);

// // console.log(spyRepeat("abc", 2)); // === "abcabc"
// // console.log(spyRepeat("xx", 4)); // === "xxxxxxxx"

// console.log(spyRepeat.callCount()); // === 2
