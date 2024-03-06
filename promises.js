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
//
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

//sleep

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

// compose.  Функция compose принимает массив асинхронных функций и
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

// const testingResponse = { status: "testing" };
// const timeLimitResponse = { status: "timeLimit" };
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

// async function run(fns, limit) {
//   const result = [];

//   for (let i = 0; i < fns.length; i += limit) {
//     const a = i + limit;
//     const promises = fns.slice(i, a).map((fn) => fn());
//     const all = await Promise.all(promises);
//     result.push(...all);
//   }
//   return result;
// }

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

function withRetry(fn, limit) {
  return async function (...args) {
    let errors = [];
    for (let i = 0; i < limit; i += 1) {
      try {
        const result = await fn(...args);
        return result;
      } catch (error) {
        errors.push(error);
      }
    }
    const aggregateError = new AggregateError("Too Many Calls", errors);
    throw aggregateError;
  };
}
async function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve(a + b);
    } else {
      reject("error");
    }
  });
}

const enhancedSum = withRetry(sum, 4);
enhancedSum(3, 2).then(
  (value) => console.log(value),
  (reason) => console.log(reason)
);
// // -------------      Решение     ---------
// function positiveNumbers(array) {}
// // ----------------------------------------

// // -------------      Проверка     ---------
// const numbers = [3, -6, 1, -7, -8, 2];
// const result = positiveNumbers(numbers);
// console.log("RESULT", result); // [3, 1, 2]
// ----------------------------------------
