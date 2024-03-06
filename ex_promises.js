//Создайте новый Promise, который успешно выполняется с сообщением .
const item = "Привет, Promise!";
const promise = new Promise((resolve, reject) => {
  resolve(item);
});
promise.then((res) => console.log(res));
() => {};
