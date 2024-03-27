////race
// const rand = () => Math.random() * 2000;

// const p1 = new Promise((r) => setTimeout(r, rand(), "A"));
// const p2 = new Promise((r) => setTimeout(r, rand(), "B"));
// const p3 = new Promise((r) => setTimeout(r, rand(), "C"));
// const p4 = new Promise((r) => setTimeout(r, rand(), "D"));

// function race(iterable) {
//   return new Promise((resolve, reject) => {
//     for (let prom of iterable) {
//       Promise.resolve(prom).then(resolve, reject);
//     }
//   });
// }
// console.log(race([p1, p2, p3, p4]));
// Promise.race([p1, p2, "p3", p4]).then((value) => console.log("1 >>>", value));
// #4 race accepts an array of non promises

() => {};

////simpleAll
// const rand = () => Math.random() * 2000;

// const p1 = new Promise((r) => setTimeout(r, rand(), "A"));
// const p2 = new Promise((r) => setTimeout(r, rand(), "B"));
// const p3 = new Promise((r) => setTimeout(r, rand(), "C"));
// const p4 = new Promise((r) => setTimeout(r, rand(), "D"));

// const set = new Set([p1, p2, p3, p4]);
// //const set = new Set();

// function all(iterable) {
//   const result = [];

//   return new Promise((resolve, reject) => {
//     let count = 0;
//     let length = 0;

//     for (let item of iterable) {
//       const idx = length;
//       // let prom;
//       // if (prom instance of Promise) {
//       //   prom = item;
//       // } else {
//       //   prom = Promise.resolve(item);
//       // }

//       length += 1;

//       const prom = Promise.resolve(item);
//       prom
//         .then((res) => {
//           result[idx] = res;
//           count += 1;
//           if (count === length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => reject(err));
//     }

//     if (length === 0) {
//       resolve([]);
//     }
//   });
// }

// all([]).then((value) => console.log(value));
// all([p1, p2, p3, p4]).then((value) => console.log(value));
// // all(set).then((value) => console.log(value));
// //all([p1, p2]).then((value) => console.log(value));
//all([p1, "p2", 6789, p4]).then((value) => console.log(value));

// instanceof

//all([p1, "p2", 6789, p4]).then((value) => console.log(value));
//Promise.all(set).then((value) => console.log(value));
//Promise.all([]).then((value) => console.log(value));

() => {};

// //all
// const rand = () => Math.random() * 2000;

// const p1 = new Promise((r) => setTimeout(r, rand(), "A"));
// const p2 = new Promise((r) => setTimeout(r, rand(), "B"));
// const p3 = new Promise((r) => setTimeout(r, rand(), "C"));
// const p4 = new Promise((r) => setTimeout(r, rand(), "D"));

// function all(promises) {
//   const result = [];
//   return new Promise((resolve, reject) => {
//     let count = 0;
//     let length = 0;

//     for (let item of promises) {
//       const idx = length;
//       length += 1;
//       const prom = Promise.resolve(item);
//       prom
//         .then((res) => {
//           result[idx] = res;
//           count += 1;
//           if (count === length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => reject(err));
//     }
//     if (length === 0) {
//       resolve([]);
//     }
//   });
// }
// all([p1, "p2", 6789, p4]).then((value) => console.log(value));
// all([p1, p2, p3, p4]).then((value) => console.log(value));

() => {};

//allSettled

// const rand = () => Math.random() * 2000;
// const p1 = new Promise((r) => setTimeout(r, rand(), "A"));
// const p2 = new Promise((r) => setTimeout(r, rand(), "B"));
// const p3 = new Promise((resolve, reject) => setTimeout(reject, rand(), "xxx"));
// const p4 = new Promise((r) => setTimeout(r, rand(), "D"));
//const set = new Set();

// function allSettled(iterable) {
//   let result = [];

//   return new Promise((resolve, reject) => {
//     let count = 0;
//     let length = 0;

//     for (let item of iterable) {
//       const idx = length;
//       length += 1;

//       const prom = Promise.resolve(item);

//       prom
//         .then(
//           (res) => ({ status: "fulfilled", value: res }),

//           (rej) => ({ status: "rejected", reason: rej })
//         )
//         .then((value) => {
//           result[idx] = value;
//           count += 1;
//           if (count === length) {
//             resolve(result);
//           }
//         });
//     }
//     if (length === 0) {
//       resolve([]);
//     }
//   });
// }

// allSettled(set).then(
//   (value) => console.log(value),
//   (reason) => console.log("2 >>>", reason)
// );

// allSettled([]).then(
//   (value) => console.log(value),
//   (reason) => console.log("2 >>>", reason)
// );

// allSettled([p1, "p2", 6789, p4]).then(
//   (value) => console.log(value),
//   (reason) => console.log("2 >>>", reason)
// );

// allSettled([p1, p2, p3, p4]).then(
//   (value) => console.log(value),
//   (reason) => console.log("2 >>>", reason)
// );
// Promise.allSettled([p1, p2, p3, p4]).then(
//   (value) => console.log(value),
//   (reason) => console.log("2 >>>", reason)
// );

() => {};
//any
// const rand = () => Math.random() * 2000;
// const p1 = new Promise((resolve, reject) => setTimeout(reject, rand(), "A"));
// const p2 = new Promise((resolve, reject) => setTimeout(reject, rand(), "B"));
// const p3 = new Promise((resolve, reject) => setTimeout(reject, rand(), "xxx"));
// const p4 = new Promise((resolve, reject) => setTimeout(reject, rand(), "D"));

// function any(iterable) {
//   let count = 0;

//   return new Promise((resolve, reject) => {
//     let length = 0;
//     const errors = [];
//     for (let prom of iterable) {
//       const idx = length;
//       length += 1;
//       Promise.resolve(prom)
//         .then((res) => resolve(res))
//         .catch((error) => {
//           errors[idx] = error;
//           count += 1;
//           if (count === length) {
//             reject(new AggregateError(errors, "All promises were rejected"));
//           }
//         });
//     }
//     if (length === 0) {
//       reject(new AggregateError(errors, "All promises were rejected"));
//     }
//   });
// }
// any([p1, p2, p3, p4]).then(
//   (value) => console.log("1 >>>", value),
//   (reason) => console.log("2 >>>", reason.errors)
// );
// any([]).then(
//   (value) => console.log("1 >>>", value),
//   (reason) => console.log("2 >>>", reason.errors)
// );

//Promise.any([p1, p2, p3, p4]).then((value) => console.log("1 >>>", value));

() => {};

// function sum(a, b) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(a + b), 500);
//   });
// }
// sum(2, 3).then(
//   (value) => console.log("1 >>>", value),
//   (reason) => console.log("2 >>>", reason)
// );

// function timeLimit(fn, num) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(fn), num);
//   });
// }
// timeLimit(sum(2, 3), 150).then(
//   (value) => console.log("1 >>>", value), // 5
//   (reason) => console.log("2 >>>", reason)
// );

//const sum2 = timeLimit(sum, 150);

// function timeLimit(fn, time) {}

// function sum2(a, b) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(a + b), 500);
//   });
// }

// const fn150 = timeLimit(sum2, 150);

// fn150(2, 3).then(
//   (value) => console.log("1 >>>", value),
//   (reason) => console.log("2 >>>", reason) // <<<<<
// );

// console.log(typeof fn150 === "function");

//     .then(
//   (value) => console.log("1 >>>", value),
//   (reason) => console.log("2 >>>", reason) // "Time limit exceeded"
// );

//const sum3 = timeLimit(sum, 350);

// sum3(2, 3).then(
//   (value) => console.log("1 >>>", value), // 5
//   (reason) => console.log("2 >>>", reason)
// );

() => {};

// //sleep

// function sleep(ms) {
//   return (x) => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(x), ms);
//     });
//   };
// }

// function multiplyBy3(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(x * 3), 0);
//   });
// }

// function divideBy5(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(x / 5), 0);
//   });
// }

// function square(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(x ** 2), 0);
//   });
// }

// multiplyBy3(10)
//   .then((x) => {
//     return divideBy5(x, 3);
//   })
//   .then(sleep(4000))

//   .then((x) => {
//     return square(x, 2);
//   })
//   .then((value) => console.log("1 >>>", value))
//   .catch((value) => console.log("2 >>>", value));

() => {};

// function solution() {
//   Promise.resolve() // F
//     .then(() => console.log(0)); // P

//   Promise.resolve() // F
//     .then(() => console.log(1)) // P
//     .then(() => console.log(2)); // P

//   Promise.resolve() // F
//     .then(() => console.log(3)) // P
//     .then(() => console.log(4)) // P
//     .then(() => console.log(5)); // P
// return [0, 1, 3, 2, 4, 5];
//   // queue: 1 3 0

//   // then и микротаски (колбэк попадает в очередь)
//   // две ситуации: вызов then на промисе в состоянии pending и fulfilled/rejected

//   //  микротаски и кол стек
// }

() => {};

//Event Loop

////function evtLup() {
// console.log("A");

// const intervalId = setInterval(() => {
//   console.log("B");
// }, 10);

// setTimeout(() => {
//   const promise = new Promise((resolve) => {
//     console.log("C");
//     resolve("D");
//   });

//   promise.then((value) => {
//     console.log(value);
//     setTimeout(() => {
//       console.log("E");
//       clearInterval(intervalId);
//     }, 10);
//   });

//   console.log("F");
// }, 10);

() => {};

// setTimeout(() => {
//   console.log("G");
//   Promise.resolve().then(() => console.log("H"));
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log("I");
//   setTimeout(function () {
//     console.log("J");
//     resolve("K");
//   }, 0);
// }).then((res) => {
//   console.log("L");
//   setTimeout(() => {
//     console.log(res); // "K"
//   }, 0);
// });
//['I', 'G','H', 'J', 'L', 'k']

() => {};

//state

// const p1 = Promise.resolve();
// getState(p1).then((actual) => {
//   console.log({ actual, expected: "fulfilled" });
// });

// const p2 = Promise.reject();
// getState(p2).then((actual) => {
//   console.log({ actual, expected: "rejected" });
// });

// const p3 = new Promise(() => {});
// getState(p3).then((actual) => {
//   console.log({ actual, expected: "pending" });
// });

// function getState(p) {
//   return new Promise((resolve) => {});
// }
// getState(p1).then((actual) => {
//   console.log({ actual, expected: "fulfilled" });
// });

() => {};

// compose.

//Функция compose принимает массив асинхронных функций и
// возвращает асинхронную функцию.Эта функция принимает один аргумент и
// последовательно справа налево выполняет асинхронные функции.

// const square = (x) => new Promise((r) => setTimeout(r, 2000, x ** 2));
// const divideBy5 = (x) => new Promise((r) => setTimeout(r, 1500, x / 5));
// const multiplyBy3 = (x) => new Promise((r) => setTimeout(r, 500, x * 3));

// function compose(fns) {
//   return (x) => {
//     let promise = Promise.resolve(x);

//     for (let i = fns.length - 1; i >= 0; i -= 1) {
//       promise = promise.then(fns[i]);
//     }
//     return promise;
//   };
// }

// const foo = compose([square, divideBy5, multiplyBy3]);

// console.time("xxx");
// foo(10).then((value) => {
//   console.log(value);
//   console.timeEnd("xxx");
// });

() => {};

//compose this recursion

// function compose(fns) {
//   let i = 1;
//   return (x) => {
//     let promise = Promise.resolve(x);

//     if (fns.length < 0) {
//       return promise;
//     }

//     promise = promise.then(fns[fns.length - i]);
//     i += 1;
//     compose(fns[fns.length - i]);
//     return promise;
//   };
// }
// const foo = compose([square, divideBy5, multiplyBy3]);

// console.time("xxx");
// foo(10).then((value) => {
//   console.log(value);
//   console.timeEnd("xxx");
// });

() => {};

//polling
// иногда бывает, что какая - то операция происходит на бэкенде асинхронно и
//  мы не можем сразу получить ответ.Например, так работает отправка задач на maxcode.dev

// Вы отправляете задачу, сервер ее тестирует, а через некоторое время вы
// видите результаты тестов.При этом непонятно, когда результат будет
// готов.Поэтому фронтенд раз в секунду делает запрос на бэкенд, спрашивая,
//     какой на данный момент результат.
//     Допустим, если результат не готов, бэкенд отвечает таким объектом:

// const testingResponse = { status: "testing" };

//Или может случиться TIME LIMIT, когда вы запустили бесконечный цикл. Тогда будет такой ответ:
// const timeLimitResponse = { status: "timeLimit" };

//Если тесты прошли, то таким объектом:
// const okResponse = {
//   status: "done",
//   results: [
//     { name: "Тест #1 ...", ok: true },
//     { name: "Тест #2 ...", ok: true },
//   ],
// };
// let i = 0;

// function polling(fetcher, isCompleted, delay) {
//   try {
//     return fetcher()
//       .then((value) => {
//         return new Promise((resolve) => {
//           setTimeout(() => resolve(value), delay);
//         });
//       })
//       .then((value) => {
//         //console.log("then", value);
//         if (isCompleted(value)) {
//           //console.log("if");
//           return value;
//         }

//         return polling(fetcher, isCompleted, delay);
//       });
//   } catch {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(value), delay);
//       return polling(fetcher, isCompleted, delay);
//     });
//   }
// }

// const fakeFetcher = async () => {
//   if (i === 1) {
//     i++;
//     throw "response errrror";
//   }
//   return i++ < 3 ? testingResponse : timeLimitResponse;
// };

// const result = polling(
//   fakeFetcher,
//   (response) => response.status !== "testing",
//   1000
// );
// result
//   .then((data) => console.log("======", data))
//   .catch((data) => console.log(data));

() => {};

//polling

// const testingResponse = { status: "testing" };
// const timeLimitResponse = { status: "timeLimit" };
// let i = 0;

// async function polling(fetcher, isCompleted, delay) {
//   try {
//     const fetch = await fetcher();

//     await new Promise((resolve) => {
//       setTimeout(() => resolve(), delay);
//     });

//     if (isCompleted(fetch)) {
//       return fetch;
//     } else {
//       return polling(fetcher, isCompleted, delay);
//     }
//   } catch {
//     await new Promise((resolve) => {
//       setTimeout(() => resolve(), delay);
//     });
//   }
//   return polling(fetcher, isCompleted, delay);
// }

// const fakeFetcher = async () => {
//   if (i === 1) {
//     i++;
//     throw "response errrror";
//   }
//   return i++ < 3 ? testingResponse : timeLimitResponse;
// };

// const result = polling(
//   fakeFetcher,
//   (response) => response.status !== "testing",
//   1000
// );
// result
//   .then((data) => console.log("======", data))
//   .catch((data) => console.log(data));

() => {};

// const fn1 = () => new Promise((r) => setTimeout(r, Math.ran3400, "a"));
// const fn2 = () => new Promise((r) => setTimeout(r, Math.ran600, "b"));
// const fn3 = () => new Promise((r) => setTimeout(r, Math.ran2000, "c"));
// const fn4 = () => new Promise((r) => setTimeout(r, Math.ran1400, "d"));
// const fn5 = () => new Promise((r) => setTimeout(r, Math.ran1800, "e"));
// const fn6 = () => new Promise((r) => setTimeout(r, Math.ran400, "l"));

// async function run(fns, limit) {
//   const result = [];
//   await new Promise((resolve, reject) => {
//     for (let i = 0; i < fns.length; i += 1) {
//       Promise.resolve(fns[i]).then((res) => {
//         result[i] = res();
//         resolve(result);
//       });
//     }
//   });
//   return result;

() => {};

// function run(fns, limit) {
//   const result = [];

//   return new Promise((resolve, reject) => {
//     let count = 0;
//     console.log(limit);
//     for (let i = 0; i < limit; i += 1) {
//       fns[i]().then((res) => {
//         count += 1;
//         result[i] = res;
//         if (count === limit) {
//           resolve(result);
//         }
//       });
//     }
//   }).then((result) => {
//     console.log(result);
//     run(fns.slice(limit, limit + limit), limit);
//   });
// }
// run([fn1, fn2, fn3, fn4, fn5, fn6], 2).then((value) => console.log(value));

() => {};
//Promise Batch
// async function run(fns, limit) {
// const result = [];

// for (let i = 0; i < fns.length; i += limit) {
//   const a = i + limit;
//   const promises = fns.slice(i, a).map((fn) => fn());
//   const all = await Promise.all(promises);
//   result.push(...all);
// }
// return result;
//}

// run([fn1, fn2, fn3, fn4, fn5, fn6], 2).then((value) => console.log(value));

() => {};

//Декоратор retry
//Допустим, у нас есть асинхронная функция, которая иногда завершается успешно, а иногда нет.

//Например, функция sum с вероятностью 30% считает сумму, а в остальных случаях подает с ошибкой.

//sum(3, 2).then(
//value => console.log(value),
// 5 (с вероятностью 30%)
//reason => console.log(reason),
// 'err' (с вероятностью 70%)
//);

//Чтобы увеличить шансы в конечном итоге получить результат,
// мы хотим при неудачной попытке делать повторный вызов.Если
// второй раз опять вышла ошибка, запускаем еще раз.И так до
//первого успешного выполнения.При этом количество попыток ограничено.

//Ваше задание реализовать функцию декоратор withRetry. Она принимает
//асинхронную функцию fn, которую мы будем вызывать несколько раз и
//число limit — максимальное количество вызовов.

//Если за limit попыток не удалось получить ответ, результат
//реджектится ошибкой AggregateError с сообщением Too Many Calls и
// массивом ошибок, полученных в результате неудачных вызовов.Про ошибку
//AggregateError подробнее мы говорили в задаче any.

//const enhancedSum = withRetry(sum, 4);

//enhancedSum(3, 2).then(
//value => console.log(value),
// 5 (с вероятностью 76%)
//reason => console.log(reason.errors),
// ['err1', 'err2', 'err3', 'err4']
// (с вероятностью 24%)
////);
//Способы решения
//Задачу можно решить двумя способами: через then и с помощью async/await.

() => {};

// Декоратор retry

// function withRetry(fn, limit) {
//   return async function (...args) {
//     let errors = [];
//     for (let i = 0; i < limit; i += 1) {
//       try {
//         const result = await fn(...args);
//         return result;
//       } catch (error) {
//         errors.push(error);
//       }
//     }
//     const aggregateError = new AggregateError("Too Many Calls", errors);
//     throw aggregateError;
//   };
// }
// async function sum(a, b) {
//   return new Promise((resolve, reject) => {
//     if (Math.random() < 0.5) {
//       resolve(a + b);
//     } else {
//       reject("error");
//     }
//   });
// }

// const enhancedSum = withRetry(sum, 4);
// enhancedSum(3, 2).then(
//   (value) => console.log(value),
//   (reason) => console.log(reason)
// );

// // -------------      Решение     ---------
// function positiveNumbers(array) {}
// // ----------------------------------------

// // -------------      Проверка     ---------
// const numbers = [3, -6, 1, -7, -8, 2];
// const result = positiveNumbers(numbers);
// console.log("RESULT", result); // [3, 1, 2]
// ----------------------------------------

() => {};

//Асинхронная очередь

// const fn1 = () => new Promise((r) => setTimeout(r, 3400, "a"));
// const fn2 = () => new Promise((r) => setTimeout(r, 600, "b"));
// const fn3 = () => new Promise((r) => setTimeout(r, 2000, "c"));
// const fn4 = () => new Promise((r) => setTimeout(r, 1400, "d"));
// const fn5 = () => new Promise((r) => setTimeout(r, 1800, "e"));
// const fn6 = () => new Promise((r) => setTimeout(r, 400, "f"));

// function run(fns, limit) {
//   const results = [];
//   let idx = 0;

//   function nextFunction() {
//     if (idx >= fns.length) {
//       return Promise.resolve();
//     }

//     const index = idx;
//     const fn = fns[idx];
//     idx += 1;

//     return fn().then((result) => {
//       results[index] = result;
//       return nextFunction();
//     });
//   }

//   const promises = [];
//   for (let i = 0; i < Math.min(limit, fns.length); i += 1) {
//     promises.push(nextFunction());
//   }
//   return Promise.all(promises).then(() => results);
// }

// run([fn1, fn2, fn3, fn4, fn5, fn6], 2).then((arr) => {
//   console.log(arr); // arr === ["a", "b", "c", "d", "e", "f"]
// });

() => {};

// // Сумма двух промисов
// // Реализуйте функцию sum, принимающую два промиса, внутри которых лежат числа,
// // и возвращающую промис с суммой этих чисел.
// //Гарантируется, что промисы успешно завершаются.

// const p1 = new Promise((resolve) => resolve(1));
// const p2 = new Promise((resolve) => resolve(2));

// // function sum(p1, p2) {
// //   return Promise.all([p1, p2]).then((num) => {
// //     return num[0] + num[1];
// //   });
// // }

// //-------------------------------------------------
// // Сумма двух промисов2

// // function sum(p1, p2) {
// //   const promises = [p1, p2];

// //   return new Promise((resolve) => {
// //     p1.then((res1) => {
// //       p2.then((res2) => {
// //         resolve(res2 + res1);
// //       });
// //     });
// //   });
// //}

// //-------------------------------------------------
// // Сумма двух промисов3

// // function sum(p1, p2) {
// //   return p1.then((res1) => {
// //     return p2.then((res2) => {
// //       return res2 + res1;
// //     });
// //   });
// // }

// //-------------------------------------------------
// // Сумма двух промисов4

// // async function sum(p1, p2) {
// //   const v1 = await p1;
// //   const v2 = await p2;
// //   return v1 + v2;
// // }

// // https://www.youtube.com/watch?v=-4Ab8BkklTs

// sum(p1, p2)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

() => {};

// Сумма нескольких промисов
// Реализуйте функцию sum, принимающую произвольное количество промисов,
//   внутри которых лежат числа, и возвращающую промис с суммой этих чисел.

// const p1 = new Promise((resolve) => resolve(1));
// const p2 = new Promise((resolve) => resolve(2));
// const p3 = new Promise((resolve) => resolve(3));

//----------------------------------------------------------
// Сумма нескольких промисов( Promise.all())

// function sum(...args) {
//   return Promise.all([...args]).then((res) => {
//     return res.reduce((akk, cur) => akk + cur, 0);
//   });
// }

//----------------------------------------------------------
// Сумма нескольких промисов async

// async function sum(...args) {
//   let res = 0;
//   for (let arg of args) {
//     res += await arg;
//   }
//   return res;
// }

//----------------------------------------------------------
// Сумма нескольких промисов then

// function sum(...promises) {
//   return new Promise((resolve, reject) => {
//     if (promises.length === 0) {
//       resolve(0);
//     }

//     let result = 0;
//     let count = 0;
//     for (let promise of promises) {
//       promise.then((res) => {
//         result += res;
//         count += 1;
//         if (count === promises.length) {
//           resolve(result);
//         }
//       });

//     }
//   });
// }

// sum().then(console.log); // 0
// sum(p1).then(console.log); // 1
// sum(p1, p2).then(console.log); //   3
// sum(p1, p2, p3).then(console.log); // 6

() => {};

// Promise Logic
// Реализуйте функцию and, которая принимает два промиса и возвращает промис.

// Если оба входных промиса резолвятся, итоговый промис тоже должен резолвнуться.
//  Если хотя бы один из входных промисов реджетится, итоговый промис реджектится.

// Итоговый промис может резолвится или реджектиться любым значением, это никак не проверяется.

// function and(p1, p2) {
//   let p1resolved = false;
//   let p2resolved = false;

//   return new Promise((resolve, reject) => {
//     p1.then(() => {
//       p1resolved = true;
//       if (p2resolved) {
//         resolve();
//       }
//     }).catch(() => {
//       reject();
//     });
//     p2.then(() => {
//       p2resolved = true;
//       if (p1resolved) {
//         resolve();
//       }
//     }).catch(() => {
//       reject();
//     });
//   });
// }

// and(Promise.resolve(1), Promise.resolve(2)).then(
//   () => console.log("fulfulled"), // ✓
//   () => console.log("rejected")
// );

// and(Promise.reject(1), Promise.resolve(2)).then(
//   () => console.log("fulfulled"),
//   () => console.log("rejected") // ✓
// );
() => {};

//promisify
// Промисификация
// В этой задаче нужно реализовать функцию - декоратор promisify.
//  Она принимает классическую асинхронную функцию на колбэках,
//   а возвращает функцию, возвращающую промис.

// Пример
// Рассмотрим пример функции на колбэках.Функция sum принимает три
// аргумента.Первые два — a и b — сущностные, это числа которые
// сложить.Последний — cb — технический.Это колбэк, котоырый вызывается
//  с результатом работы функции, когда она завершила работу.

// Колбэк принимает два аргумента: err и result.Если функция завершилась
// успешно, то err равен null, а result — сумме чисел.Если произошла ошибка,
//   err равен какому - то значению, отличному от null, а result равен undefined.

// function promisify(fn) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       fn(...args, (err, result) => {
//         if (err !== null) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   };
// }

// function sum(a, b, cb) {
//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       cb(null, a + b); // success
//     } else {
//       cb("error"); // bad luck
//     }
//   }, 0);
// }

// const promisifiedSum = promisify(sum);

// promisifiedSum(3, 4).then(
//   (value) => console.log(value), // 7
//   (reason) => console.log(reason) // "error"
// );

// sum(2, 5, (err, result) => {
//   if (err === null) {
//     console.log(result); // 7
//   }
// });

() => {};

//callbackify;
//Колбэкификация;
// Эта задача похожа на promisify, но нужно наоборот из асинхронной функции
// создать функцию, работающую на колбэках.

// Например, нам дана функция, которая принимает два числа и возвращает
// промис с суммой этих чисел.

// Тогда с помощью функции callbackify мы можем создать новую функцию,
//     которая будет принимать три аргумента.Первые два — это числа,
//     которые мы складываем.А третий — это колбэк, который
// вызывается, когда функция завершила работу.

// Если она завершилась неудачно, то колбэк вызывается с одним
// аргументом — ошибкой.

// Если она завершилась успешно, то колбэк вызывается с двумя аргументами —
//  первый аргумент, означающий ошибку, равен null, а второй равен результату вызова.

// async function sum(a, b) {
//   if (Math.random() < 0.5) {
//     return a + b; // success
//   }
//    throw error"; // bad luck
// }

// async function sum(a, b) {
//   if (Math.random() < 0.1) {
//     return a + b; // success
//   }
//   throw "error"; // bad luck
// }

// function callbackify(fn) {
//   return function (...args) {
//     const cb = args.pop();
//     fn(...args).then(
//       (result) => {
//         cb(null, result);
//       },
//       (error) => cb(error)
//     );
//   };
// }

// const callbackifiedSum = callbackify(sum);

// callbackifiedSum(2, 5, (err, result) => {
//   console.log({ err, result });
//   // if (err === null) {
//   //   console.log(result); // 7
//   // }
// });

() => {};

//compose-callback

//Compose на колбэках

// Если функция в задаче compose - async принимала асинхронные функции,
// возвращающие промисы, то в этой задаче функции работают на колбэках.

// Как работают функции на колбэках
// Например, функция cube возводит число в куб, но делает это асинхронно.
//  Первым аргументом она принимает число, которое нужно возвести, а
// вторым — колбэк, который выполнится когда вычисления закончатся.

// Как правило, в таких функциях колбэк вызывается с двумя аргументами.

// Если произошла оишбка, то первый аргумент — эта самая ошибка,
//     второго аргумента нет, фактически он undefined.

//cube(3, function (err) {
// console.log(err);  err !== null, что-то пошло не так
//});

// Если все прошло успешно, то первый аргумент(обозначающий ошибку) null,
//     а второй — результат работы.В нашем примере число 27.

// cube(3, function (err, result) {
//   console.log(err); // err === null
//   console.log(result); // result === 27
// })

// Что нужно сделать
// Допустим, у нас есть несколько асинхронных функций, принимающих колбэки

// cube(2, (err, result) => console.log(result === 8));
// double(2, (err, result) => console.log(result === 4));
// subtract5(2, (err, result) => console.log(result === -3));

// Функция compose принимает массив функций в описанном выше формате и
// возвращает асинхронную функцию, которая имеет такой же интерфейс, как и входные функции.

// Результат функции compose последовательно выполняет функции справа
// налево, передавая результат одной функции в аргумент к другой.

// Если по дороге в одной из функций возникла ошибка,
//     функция должна вернуть эту ошибку.

// Функция composed (результат вызова compose):

// принимает число 8,
// вычитает из 8 пять, получается 3,
// усножает 3 на два, получается 6,
// возводит 6 в куб, получается 216,
// вызывает колбэк с аргументами null и 216.
// Эту задачу можно решить как минимум двумя способами: циклом и с использованием рекурсии.

// Эта задача не на промисы. Предполагается, что вы решите задачу без использования промисов.

// if (Math.random() < 0.5) {
//   return err;
// }
// return res

// const cube = (num, callback) => {
//   callback(null, Math.pow(num, 3));
// };

// const double = (num, callback) => {
//   callback(null, num * 2);
// };

// const subtract5 = (num, callback) => {
//   callback(null, num - 5);
// };

// function compose(funcs) {
//   return function (num, callback) {
//     funcs.reverse().reduceRight(
//       (acc, func) => {
//         return (value, cb) => {
//           func(value, (err, result) => {
//             if (err) {
//               cb(err);
//             } else {
//               acc(result, cb);
//             }
//           });
//         };
//       },
//       (input, cb) => cb(null, input)
//     )(num, callback);
//   };
// }

// const composed = compose([cube, double, subtract5]);
// composed(8, (err, result) => {
//   console.log(err, result);
// });

() => {};

//composeMini

// const cube = (num, cb) => {
//   cb(null, Math.pow(num, 3));
// };

// const double = (num, cb) => {
//   cb(null, num * 2);
// };

// function composeMini(fn1, fn2) {
//   return function (num, cb) {
//     fn1(num, (err, result) => {
//       if (err) {
//         cb(err);
//       } else {
//         fn2(result, cb);
//       }
//     });
//   };
// }

// const composed = composeMini(cube, double);
// composed(8, (err, result) => {
//   console.log(err, result);
// });

() => {};
