//Создайте новый Promise, который успешно выполняется с сообщением .
// const item = "Привет, Promise!";
// const promise = new Promise((resolve, reject) => {
//   resolve(item);
// });
// promise.then((res) => console.log(res));
() => {};

//Создайте Promise, который завершается с ошибкой и выводит сообщение "Ошибка в Promise!".

// const item = "Ошибка в Promise!";
// const promise = new Promise((resolve, reject) => {
//   reject(item);
// });

() => {};

//Напишите функцию, которая возвращает Promise и успешно завершается через 1 секунду.
// function prom(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(x + 1), 5000);
//   });
// }
//

() => {};

//Напишите функцию, которая возвращает Promise и завершается с ошибкой через 500 мс.

// function promReject() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("error"), 500);
//   });
// }
// promReject(5).then((resolve) => console.log(resolve));

() => {};

//Создайте Promise, который разрешается с определенным числом после 2 секунд.

// function prom() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(5), 2000);
//   });
// }
// prom(1).then((res) => console.log(res));

() => {};

//Создайте цепочку из трех промисов, где каждый последующий зависит от результата предыдущего.

// function sum(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(x + 25), 500);
//   });
// }
// function multyplayBy8(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(x * 8), 500);
//   });
// }
// function divideBy2(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(x / 2), 500);
//   });
// }

// sum(10)
//   .then((x) => {
//     return multyplayBy8(x);
//   })
//   .then((x) => {
//     return divideBy2(x);
//   })
//   .then((value) => console.log(value));

() => {};

//Напишите функцию, которая принимает массив чисел и возвращает Promise с их суммой.

// function promiseSum(arr) {
//   new Promise((resolve, reject) => {
//     resolve(
//       arr.reduce((akk, num) => akk + num),
//       0
//     );
//   }).then((value) => console.log(value)),
//     reject((err) => console.log(err));
// }
// promiseSum([1, 2, 3, 4]);
// promiseSum([1, 2, 3]);

() => {};

// Создайте функцию, которая принимает число и возвращает Promise, которое разрешается
// через 1 секунду с удвоенным значением.
// function multyplayBy2(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(x / 2), 1000);
//   }).then((value) => console.log(value));
// }
// multyplayBy2(151);

() => {};

// Напишите функцию, которая принимает строку и возвращает Promise, который разрешается
//  через 500 мс с этой строкой в верхнем регистре.

// function changeUpperCase(s) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(s.toUpperCase()), 500);
//   }).then((res) => console.log(res));
// }
// changeUpperCase("Hello");

() => {};

// Создайте Promise, который разрешается через случайное время от 1 до 5 секунд.

// function randomTimeResolve() {
//   const rand = Math.random() * 5000;
//   console.log(rand);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), rand);
//   }).then((value) => console.log(value));
// }
// randomTimeResolve();

() => {};

//Напишите функцию, которая принимает два числа и возвращает Promise с их произведением.

// function multiplay(x, y) {
//   return new Promise((resolve, reject) => {
//     resolve(x * y);
//   }).then((res) => console.log(res));
// }
// multiplay(5, 3);

() => {};

//Создайте Promise, который разрешается массивом чисел после 3 секунд.

// function resolveArr() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve([1, 2, 3]), 3000);
//   }).then((res) => console.log(res));
// }
// resolveArr();

() => {};

// Напишите функцию, которая принимает число и возвращает Promise,
// которое отклоняется через 1 секунду с сообщением "Ошибка".

// function error() {
//   return new Promise((resolve, reject) => {
//     reject("Ошибка");
//   }).then((res) => console.log(res));
// }
// error();

() => {};

//Создайте функцию, которая принимает массив промисов и возвращает новый промис,
// который разрешается, когда все промисы в массиве разрешены.

// const p1 = new Promise((resolve, reject) => resolve("A"));
// const p2 = new Promise((resolve, reject) => resolve("B"));
// const p3 = new Promise((resolve, reject) => resolve("C"));
// const p4 = new Promise((resolve, reject) => resolve("D"));

// function prom(promises) {
//   return Promise.all(promises).then((res) => console.log(res));
// }
// prom([p1, p2, p3, p4]);

() => {};

//Напишите функцию, которая принимает время в миллисекундах и возвращает Promise,
//который разрешается через это время.

// function resolveTime(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("w"), ms);
//   });
// }
// resolveTime(2000)
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

() => {};

// ??????? Создайте функцию, которая принимает URL изображения и возвращает Promise,
// который разрешается, если изображение успешно загружено, и отклоняется в
// случае ошибки загрузки.

// const imageUrl =
//   "https://flomaster.top/uploads/posts/2022-07/1657269974_1-flomaster-club-p-enduro-risunok-krasivo-1.jpg";

// function loadImage(url) {
//   console.log(456);
//   return new Promise((resolve, reject) => {
//     let img = new Image();
//     img.onload = () => resolve("Изображение успешно загружено");
//     img.onerror = () => reject("Ошибка загрузки изображения");
//     img.src = url;
//   });
// }

// loadImage(imageUrl)
//   .then((message) => console.log(message))
//   .catch((error) => console.error(error));

() => {};

//Создайте функцию, которая принимает массив чисел и возвращает Promise с
// максимальным значением из массива.

// function maxElement(el) {
//   new Promise((resolve, reject) => {
//     const max = Math.max(...el);
//     if (el.length === 0) {
//       reject("Массив пуст");
//     } else {
//       resolve(max);
//     }
//   })
//     .then((el) => console.log(el))
//     .catch((error) => console.error("error"));
// }
// //maxElement([1, 4, 8, 45, 100, -200]);
// maxElement();

() => {};

//Создайте функцию, которая принимает число и возвращает Promise, который разрешается
// через случайное время от 1 до 5 секунд.

// function randomTimeResolve() {
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(13), Math.random() * 5000);
//   });
// }
// randomTimeResolve().then((res) => console.log(res));

() => {};

//Напишите функцию, которая делает несколько асинхронных запросов и возвращает Promise с результатом всех запросов.

() => {};

//Напишите функцию, которая принимает время в миллисекундах и возвращает Promise, который разрешается через это время.

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), ms);
//   }).then((value) => console.log(value));
// }
// delay(1000);

() => {};

//Создайте функцию, которая принимает массив чисел и возвращает Promise с их средним значением.

// function average(arr) {
//   return new Promise((resolve, reject) => {
//     resolve(arr.reduce((acc, curr) => acc + curr, 0) / arr.length);
//   }).then((res) => console.log(res));
// }
// average([1, 2, 3, 4, 5, 6]);

() => {};

// Создайте функцию, которая принимает две функции(resolve и reject) и возвращает Promise, который разрешается,
// если resolve вызывается, и отклоняется, если reject вызывается.

function returnedPromise(a) {
  return new Promise((resolve, reject) => {
    resolve(a);
  }).then((value) => console.log(value));
}
returnedPromise(100);
//() => {};
