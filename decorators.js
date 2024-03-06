// Создайте функцию - декоратор doubleDecorator,
// которая принимает число и возвращает удвоенное значение этого числа.

// function doubleDecorator(number) {
//   return number * 2;
// }

// const originalNumber = 5;
// const decoratedNumber = doubleDecorator(originalNumber);

// console.log(decoratedNumber); // Ожидаемый результат: 10

() => {};

// Создайте функцию - декоратор loggerDecorator,
// которая будет выводить в консоль сообщение при вызове любой функции.

// function loggerDecorator(func) {
//   return function () {
//     console.log(`Функция ${func.name} была вызвана.`);
//   };
// }

// function greet() {
//   return "Привет!";
// }

// const decoratedGreet = loggerDecorator(greet);
// decoratedGreet();
// decoratedGreet();

() => {};

// // Создайте функцию - декоратор countDecorator, которая будет считать
// // количество вызовов функции и выводить его в консоль при каждом вызове.

// function countDecorator(func) {
//   let count = 0;
//   return function () {
//     count += 1;
//     console.log(count);
//   };
// }

// function greet() {
//   return "Привет!";
// }

// const decoratedGreet = countDecorator(greet);

// decoratedGreet(); // Ожидаемый результат: "Функция greet была вызвана. Количество вызовов: 1"
// decoratedGreet(); // Ожидаемый результат: "Функция greet была вызвана. Количество вызовов: 2"

() => {};

// //Создайте функцию-декоратор reverseDecorator, которая
// //будет возвращать обратную строку переданной строки.

// function reverseDecorator(str) {
//   return str.split("").reverse().join("");
// }

// const originalStr = "Привет!";
// const reversedStr = reverseDecorator(originalStr);

// console.log( reversedStr); // Ожидаемый результат: "!тевирП"
() => {};

// Создайте функцию-декоратор loggerDecorator, которая будет
// выводить в консоль сообщение при вызове любой функции.

// function loggerDecorator(func) {
//   return function () {
//     console.log("Здравствуйте");
//   };
// }
// function greet() {
//   return "Привет!";
// }

// const decoratedGreet = loggerDecorator(greet);
// decoratedGreet();
// decoratedGreet();

() => {};

//Создайте функцию-декоратор delayDecorator, которая будет задерживать выполнение функции на 2 секунды.

// function delayDecorator(func) {
//   return function () {
//     setTimeout(() => func(), 2000);
//   };
// }

// function sayHello() {
//   console.log("Привет!");
// }

// const delayedHello = delayDecorator(sayHello);
// delayedHello();
// delayedHello();

() => {};

// Создайте функцию - декоратор uppercaseDecorator, которая принимает
// строку и возвращает её в верхнем регистре.

// function uppercaseDecorator(str) {
//   return str.toUpperCase();
// }

// const originalString = "Привет, мир!";
// const decoratedString = uppercaseDecorator(originalString);

// console.log(decoratedString); // Ожидаемый результат: "ПРИВЕТ, МИР!"

() => {};

// // Создайте функцию - декоратор repeatDecorator, которая принимает
// // функцию и число n, и вызывает данную функцию n раз.

function repeatDecorator(func, n) {
  count = 0;
  while (count < n) {
    count += 1;
    func();
  }
}

function greet() {
  console.log("Привет!");
}

const repeatedGreet = repeatDecorator(greet, 3);
// Ожидаемый результат: "Привет!" выведено 3 раза

() => {};

// // Создайте функцию - декоратор capitalizeDecorator, которая принимает
// // строку и возвращает её с заглавной буквы.

// function capitalizeDecorator(str) {
//   //   return replace(str[0], str[0].toUpperCase());
//   return str.slice(0, 1).toUpperCase() + str.slice(1);
// }

// const originalString = "hello";
// const decoratedString = capitalizeDecorator(originalString);

// console.log(decoratedString); // Ожидаемый результат: "Hello"

() => {};

// // Создайте функцию - декоратор reverseWordsDecorator,
// //     которая будет переворачивать слова в строке.

// function reverseWordsDecorator(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// const originalStr = "Hello world";
// const reversedWordsStr = reverseWordsDecorator(originalStr);

// console.log(reversedWordsStr); // Ожидаемый результат: "olleH dlrow"
// reversedWordsStr();

() => {};

// function doubleDecorator(number) {
//   return number * 2;
// }

// const originalNumber = 5;
// const decoratedNumber = doubleDecorator(originalNumber);

// console.log(decoratedNumber); // Ожидаемый результат: 10

() => {};

// // Создайте функцию - декоратор addSuffixDecorator, которая будет
// // добавлять суффикс к результату выполнения функции.

// function addSuffixDecorator(str, suffix) {
//   return `${str + suffix}`;
// }

// const originalStr = "hello";
// const decoratedStr = addSuffixDecorator(originalStr, " world!");

// console.log(decoratedStr); // Ожидаемый результат: "hello world!"

() => {};

// Создайте функцию - декоратор logErrorDecorator, которая будет
// логировать ошибку, если функция выбрасывает исключение.

// function logErrorDecorator(func) {
//   return function () {
//     console.log(func());
//   };
// }

// function throwError() {
//   throw new Error("Something went wrong!");
// }

// const loggedErrorFunc = logErrorDecorator(throwError);
// loggedErrorFunc();
// loggedErrorFunc();

() => {};

// Создайте функцию - декоратор randomDelayDecorator, которая будет
// задерживать выполнение функции на случайное время.

// function randomDelayDecorator(func) {
//   return function () {
//     const n = Math.random() * 1000;
//     console.log(n);
//     setTimeout(() => func(), n);
//   };
// }

// function sayHi() {
//   console.log("Hi!");
// }

// const delayedHi = randomDelayDecorator(sayHi);
// delayedHi();
// delayedHi();
// delayedHi();

() => {};

// Создайте функцию - декоратор removeWhitespaceDecorator,
//     которая будет удалять пробелы из строки.

// function removeWhitespaceDecorator(str) {
//   return str.replace(" ", "");
// }

// const originalStr = "Hello, world!";
// const trimmedStr = removeWhitespaceDecorator(originalStr);

// console.log(trimmedStr); // Ожидаемый результат: "Hello,world!"

() => {};

// function logInputDecorator(func) {
//   const name = func;
//   return name;
// }

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// const decoratedGreet = logInputDecorator(greet);
// decoratedGreet("Alice"); // Ожидаемый результат: "Hello, Alice!"

() => {};

// function logResultDecorator(func) {
//   return function () {
//     return func.replace(func, "Goodbye!");
//   };
// }

// function sayGoodbye() {
//   return "Goodbye!";
// }

// const loggedGoodbye = logResultDecorator("sayGoodbye");
// console.log(loggedGoodbye()); // Ожидаемый результат: "Goodbye!"

() => {};

// 1. Создайте функцию-декоратор shout, которая преобразует
//результат выполнения функции в верхний регистр и добавляет восклицательный знак в конце.

function shout(func) {
  //console.log(func().toUpperCase() + "!");
  return function () {
    return func().toUpperCase() + "!";
  };
}

// Пример использования:

function saySomething() {
  return "hello";
}

const shoutedSaySomething = shout(saySomething);
