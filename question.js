// // // const greaterThan53 = (num) => num > 53;
// // const isOdd = (num) => num % 2 === 1;

// // // let isSquare = (num) => Number.isInteger(Math.sqrt(num));
// // const isThreeDigitNumber = (num) => num.toString() === "3";
// // //const endsWithZero = num.toString().at(-1) === "0";
// // //console.log(num.toString());
// // function findInteger(fn1, fn2) {
// //   if (arguments.length === 0) {
// //     return 1;
// //   }
// //   let num = 1;

// //   while (!(num.toString() === "3")) {
// //     //console.log(num.toString() === "3");
// //     num += 1;
// //   }
// //   return num;
// // }
// // //console.log(findInteger(greaterThan53));

// // console.log(findInteger(isThreeDigitNumber, isOdd));

// () => {};

// //group - by - equality;

// () => {};

// //csv
// // const arr = [
// //   {
// //     name: "sam",
// //     age: 23,
// //   },
// //   {
// //     name: "Ivan",
// //     age: 33,
// //   },
// // ];
// // function crieateCsv(arr) {
// //   const str = "";
// //   arr.map((item, i) => {
// //     const keys = Object.keys(item);
// //     return keys.map((key) => [key, item.key]);
// //   });
// // }
// // console.log(crieateCsv(arr));

// () => {};

// // function maxRot(n) {
// //   let str = String(n);
// //   const arr = [+str];
// //   for (let i = 0; i < str.length; i += 1) {
// //     arr.push(+(str = str.slice(0, i) + str.slice(i + 1) + str.slice(i, i + 1)));
// //   }

// //   return Math.max(...arr);
// // }

// // //56789 -> 67895 -> 68957 -> 68579 -> 68597
// // // console.log(maxRot(38458215)); //85821534;
// // // console.log(maxRot(195881031)); //988103115
// // console.log(maxRot(933289301)); //933289301
// // //console.log(maxRot(56789)); //68597

// () => {};

// // var createCounter = function (n) {
// //   //let b = 0;
// //   return function () {
// //     //b += 1;
// //     const res = n;
// //     n += 1;
// //     return res;
// //   };
// // };

// // const counter = createCounter(10);
// // console.log(counter()); // 10
// // console.log(counter()); // 11
// //console.log(counter()); // 12

// () => {};
// // async function sleep(millis) {
// //   return (millis) => {
// //     return new Promise((resolve) => {
// //       setTimeout(resolve(100).millis);
// //     }).then((x) => console.log(x));
// //   };
// // }
// // console.log(sleep(10000));

// () => {};

// const promise = new Promise((resolve) => {
//   console.log("C");
//   resolve("D");
// });

// promise.then((value) => {
//   console.log(value);
//   setTimeout(() => {
//     console.log("E");
//     clearInterval(intervalId);
//   }, 10);
// });

() => {};

// const promise1 = async () => {
//   try {
//     const result = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Привет");
//       }, 3000);
//     });

//     console.log(result);
//     console.log("l;kj");
//   } catch (error) {
//     console.log(error);
//   }
// };
// console.log(promise1());

() => {};

//async await training

// const promise1 = async () => {
//   const result = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Привет");
//     }, 3000);
//   }); //.then((value) => console.log(value));
//   console.log("1111");
//   console.log(result);
// };
// console.log(promise1());

// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Пока");
//   }, 2000);
// }).then((value) => console.log(value));

() => {};
const sequen = [
  3, 5, 16, 4, 7, 3, 17, 18, 7, 19, 7, 17, 11, 4, 16, 9, 10, 14, 16, 4, 19, 7,
  18, 20, 19, 14, 1, 9, 15, 4, 8, 18,
];
function replaceAll(seq, find, replace) {
  console.log(seq, find, replace);
  if (seq.length === 0 && Array.isArray(seq)) {
    return [];
  }
  return Array.isArray(seq)
    ? seq.map((el) => (el === find ? replace : el))
    : seq
        .split("")
        .map((el) => (el === find ? replace : el))
        .join("");
}
console.log(replaceAll(sequen, 5, 16));
