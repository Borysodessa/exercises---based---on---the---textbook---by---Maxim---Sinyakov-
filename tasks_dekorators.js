
// Создайте функцию - декоратор cacheDecorator, которая будет кэшировать
// результаты выполнения функции и возвращать их из кэша при повторных вызовах.

// function cacheDecorator(func) {
//     // Напишите код функции-декоратора здесь
// }

// function square(x) {
//     return x * x;
// }

// const cachedSquare = cacheDecorator(square);
// console.log(cachedSquare(3)); // Ожидаемый результат: 9
// console.log(cachedSquare(3)); // Ожидаемый результат: 9 (взят из кэша)

() => {};

// // Создайте функцию - декоратор logTimeDecorator, которая будет
// //  выводить в консоль время выполнения функции.

// function logTimeDecorator(func) {
//   // Напишите код функции-декоратора здесь
// }

// function sayGoodbye() {
//   console.log("До свидания!");
// }

// const timedGoodbye = logTimeDecorator(sayGoodbye);
// timedGoodbye(); // Ожидаемый результат: Время выполнения функции: X мс

() => {};

  // Создайте функцию - декоратор capitalizeDecorator, которая принимает
 // строку и возвращает её с заглавной буквы.

  function capitalizeDecorator(str) {
    // Напишите код функции-декоратора здесь
  }

  const originalString = "hello";
  const decoratedString = capitalizeDecorator(originalString);

  console.log(decoratedString); // Ожидаемый результат: "Hello"

() => {};
// 1. Создайте функцию-декоратор shout, которая преобразует 
результат выполнения функции в верхний регистр и добавляет восклицательный знак в конце.

function shout(func) {
  // Напишите код функции-декоратора здесь
}

// Пример использования:

function saySomething() {
  return "hello";
}

const shoutedSaySomething = shout(saySomething);




