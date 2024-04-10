//depth recursion map

// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3,
//   },
//   e: {
//     f: {
//       g: 4,
//       h: 5,
//     },
//   },
//   i: 6,
// };

// function depth(obj) {
//   if (
//     typeof obj !== "object" ||
//     obj === null ||
//     Object.keys(obj).length === 0 ||
//     Array.isArray(obj)
//   ) {
//     return 0;
//   }
//   const values = Object.values(obj);

//   const depths = values.map((value) => depth(value));

//   return Math.max(...depths) + 1;
// }
// console.log(depth({ a: 1, b: 2 }));
// console.log(depth(obj));

() => {};

//depth recursion cycle

// const obj = {
//   a: 1,
//   b: {
//     c: 8,
//     d: 3,
//   },
//   e: {
//     f: {
//       g: 4,
//       h: 5,
//     },
//   },
//   i: 6,
// };

// function depth(obj) {
//   if (
//     typeof obj !== "object" ||
//     obj === null ||
//     Object.keys(obj).length === 0 ||
//     Array.isArray(obj)
//   ) {
//     return 0;
//   }
//   const depts = [];

//   const values = Object.values(obj);
//   for (let value of values) {

//     depts.push(depth(value));
//   }
//   return Math.max(...depts) + 1;
// }
// console.log(depth({ a: 1, b: 2 }));
// console.log(depth(obj));

() => {};

//sumTheTreeValues;

// Дерево — структура данных, состоящая из узлов со значениями.
//  В бинарном дереве у каждого узла не более 2 детей.В этой
//  задаче нужно посчитать сумму элементов в бинарном дереве.

//     Гарантируется, что у каждого объекта есть ровно три поля:
// value, left и right.В полях left и right может находиться
// либо такой же объект, либо null.

// var TreeNode = function (value, right, left) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };

// const root = {
//   value: 3,
//   left: {
//     value: 5,
//     left: {
//       value: 1,
//       left: null,
//       right: null,
//     },
//     right: null,
//   },
//   right: {
//     value: 2,
//     left: null,
//     right: {
//       value: 8,
//       left: null,
//       right: null,
//     },
//   },
// };

// function sumTheTreeValues(root) {
//   if (!root) {
//     return 0;
//   }
//   let left = sumTheTreeValues(root.left);
//   let right = sumTheTreeValues(root.right);
//   return left + right + root.value;
// }
// console.log(sumTheTreeValues(root)); // 19

() => {};

//Tree Max Path Максимальный путь в дереве

// const tree = {
//   value: 1, // ←
//   left: {
//     value: 5,
//     left: {
//       value: 1,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 3,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     value: 2, // ←
//     left: {
//       value: 8,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 9, // ←
//       left: null,
//       right: null,
//     },
//   },
// };

// const TreeNode = function (left, right, value) {
//   this.left = left;
//   this.right = right;
//   this.value = value;
// };

// function maxSum(root) {
//   if (!root) {
//     return 0;
//   }
//   let left = maxSum(root.left);
//   let right = maxSum(root.right);

//   return root.value + Math.max(left, right);
// }
// console.log(maxSum(tree));

() => {};
//Deep Compare Глубокое сравнение

// const o1 = {
//   x: 1,
//   y: {
//     z: "qwe",
//     m: {
//       t: false,
//     },
//   },
// };

// const o2 = {
//   x: 1,
//   y: {
//     z: "qwe",
//     m: {
//       t: false,
//     },
//   },
// };

// function deepCompare(obj1, obj2) {}
//console.log(deepCompare(o1, o2)); // true

() => {};

//Напишите рекурсивную функцию для вычисления факториала числа.

// function factorial(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }
// console.log(factorial(5));

() => {};

//Реализуйте рекурсивную функцию для подсчета суммы чисел от 1 до n.

// function sum(n) {
//   if (n === 1) {
//     return n;
//   }
//   return n + sum(n - 1);
// }
// console.log(sum(5));

() => {};

//Создайте рекурсивную функцию для нахождения наибольшего общего делителя двух чисел.

// function GCD(a, b) {
//   if (a === b) {
//     return a;
//   }
//   if (a < b) {
//     b -= a;
//   } else {
//     if (a > b) {
//       a -= b;
//     }
//   }

//   GCD(a, b);
// }
// console.log(GCD(35, 42));

//==============================================================================
// function GCD(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return GCD(b, a % b);
// }
// console.log(GCD(33, 43));

() => {};

//Реализуйте функцию для вычисления чисел Фибоначчи с использованием рекурсии.

// function fib(n) {
//   if (n < 1) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(3));

() => {};

//Реализуйте функцию для поиска максимального элемента в массиве с использованием рекурсии.

// function findMax(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   const maxRest = findMax(arr.slice(1));
//   return arr[0] > maxRest ? arr[0] : maxRest;
// }

// console.log(findMax([1, 3, 45]));

() => {};

// У вас есть натуральное число n. Необходимо вывести все числа от 1 до n в массив.

// function nums(n, arr = []) {
//   if (n === 0) {
//     return arr;
//   }
//   arr.unshift(n);
//   return nums(n - 1, arr);
// }
// console.log(nums(5));

//===========================================================================

// function outputIntoAnArr(n) {
//   if (n === 1) {
//     return [1];
//   }
//   return outputIntoAnArr(n - 1).concat(n);
// }
// console.log(outputIntoAnArr(5));

() => {};

//Напишите рекурсивную функцию для конвертации числа в строку.
// function convert(n) {}
// console.log(134567);

() => {};

//Напишите рекурсивную функцию для вычисления степени числа.

// function pow(base, exp) {
//   if (exp === 0) {
//     return 1;
//   }
//   if (exp < 0) {
//     return 1 / pow(base, -exp);
//   }
//   return base * pow(base, exp - 1);
// }

// console.log(pow(3, 4));

() => {};

// Создайте функцию для проверки простоты числа с использованием рекурсии.

// function isPrime(n, i = 2) {
//   if (n <= 1) {
//     return false;
//   }
//   if (i > Math.sqrt(n)) {
//     return true;
//   }
//   if (n % i === 0) {
//     return false;
//   }

//   return isPrime(n, i + 1);
// }
// console.log(isPrime(17));

() => {};

//Создайте функцию, которая рекурсивно находит минимальный элемент в массиве.

// function findMin(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   const minRest = findMin(arr.slice(1));
//   return arr[0] < minRest ? arr[0] : minRest;
// }
// console.log(findMin([1, -3, 45, 18]));

() => {};

//Напишите функцию, которая рекурсивно инвертирует строку.

// function invert(str) {
//   if (str.length === 1) {
//     return str;
//   }
//   return invert();
// }
// console.log(invert("abcd"));

() => {};

//Создайте рекурсивную функцию для проверки наличия элемента в массиве.
// function inc(arr, el) {
//   const a = arr.slice(1);
//   if (a.length === 0) {
//     return false;
//   }
//   if (a[0] === el) {
//     return true;
//   } else {
//     return inc(a, el);
//   }
// }
// console.log(inc([1, 2, 3, 4, 5, 6, 7, 8], 10));

() => {};

// Напишите рекурсивную функцию для проверки является ли число степенью двойки.

// function isPowTwo(n, i = 2) {
//   if (n === 1) {
//     return true
//    }
//   if (n < 2 || n % 2 !== 0) {
//     return false;
//   }
//  i *= 2;

//   if (i === n) {
//     return true;
//   }
//   if (i > n) {
//     return false;
//   }
//   return isPowTwo(n, i);
// }
// console.log(isPowTwo(15));

//==================================================================
// function isPowTwo(n) {
//   if (n === 1) {
//     return true;
//   }
//   if (n < 2 || n % 2 !== 0) {
//     return false;
//   }
//   return isPowTwo(n / 2);
// }
// console.log(isPowTwo(15));
// console.log(isPowTwo(16));
// console.log(isPowTwo(18));

() => {};

//Реализуйте функцию для нахождения суммы всех элементов во вложенном массиве с
//использованием рекурсии.

// const arr = [1, 2, 8, [9, 5, [2, 1]]];
// function smartSum(arr) {
//   return arr.reduce((akk, curr) => {
//     if (typeof curr === "number") {
//       return akk + curr;
//     }
//     return akk + smartSum(curr);
//   }, 0);
// }
// console.log(smartSum(arr));

() => {};

//Реализуйте рекурсивную функцию для вычисления числа в указанной степени.x

// function pow(base, exp) {
//   if (exp === 0) {
//     return 1;
//   }
//   return base * pow(base, exp - 1);
// }
// console.log(pow(2, 3));

() => {};

//Используя рекурсию, напишите функцию для перевода числа из десятичной системы в двоичную.

// function decimalToBinary(n) {
//   if (n < 1) {
//     return [];
//   }
//   return decimalToBinary(Math.floor(n / 2)).concat(n % 2);
// }
// console.log(decimalToBinary(45));

//Создайте рекурсивную функцию для вычисления суммы элементов четных позиций в массиве.

() => {};

//Создайте рекурсивную функцию для вычисления суммы элементов четных позиций в массиве.
// const arr = [4, 45, 12, 1];

// function sumEvens(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   if (arr[0] % 2 === 0) {
//     return arr[0] + sumEvens(arr.slice(1));
//   } else {
//     return sumEvens(arr.slice(1));
//   }
// }
// console.log(sumEvens(arr));

() => {};

//Напишите рекурсивную функцию для нахождения количества вхождений заданного элемента в массив.
//const arr = [4, 8, 6, 3, 1, 2, 9, 8, 7, 9, 59, 6, 5, 4, 8, 6];
// function numOfOccurrences(arr, num, count = []) {
//   if (arr.length === 0) {
//     return count.length;
//   }
//   if (arr[0] === num) {
//     count.push(1);
//   }
//   return numOfOccurrences(arr.slice(1), num, count);
// }
// console.log(numOfOccurrences(arr, 4));

//==================================================================================

// function numOfOccurrences(arr, num) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   const count = arr[0] === num ? 1 : 0;
//   return count + numOfOccurrences(arr.slice(1), num);
// }
// console.log(numOfOccurrences(arr, 4));
() => {};
//Напишите рекурсивную функцию для вычисления факториала числа.

// function factorial(n) {
//   if (n === 1 || n === 0) {
//     return 1;
//   }
//   return (n *= factorial(n - 1));
// }
// console.log(factorial(4));

() => {};

//Рекурсивно вычислите n-е число Фибоначчи.
// function fibonachi(n) {
//   if (n < 2) {
//     return 1;
//   }
//   return (res = fibonachi(n - 1) + fibonachi(n - 2));
// }
// console.log(fibonachi(6));
() => {};
