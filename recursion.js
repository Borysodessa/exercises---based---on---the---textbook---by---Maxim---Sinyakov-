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
//     console.log(depts);
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

//Tree Max Path
//===================================
// const root = {
//   value: -75,
//   left: null,
//   right: {
//     value: 60,
//     left: null,
//     right: {
//       value: -67,
//       left: null,
//       right: null,
//     },
//   },

//     -75
//      /  \
//    null   60
//           / \
//         null -67
//               /  \
//             null  null    should stop only at leaves - 2nd example from description=>

//===================================
//   value: 5,
//   left: {
//     value: 4,
//     left: {
//       value: -80,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: -60,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     value: 10,
//     left: {
//       value: -90,
//       left: null,
//       right: null,
//     },
//     right: null,
//     },
//==========================
//   value: 1,
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
//     value: 2,
//     left: {
//       value: 8,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 9,
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
// console.log(maxSum(root));

() => {};
//Deep Compare

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
