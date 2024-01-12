// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("🐎"), 2000);
// });
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("🐢"), 5000);
// });
// const p3 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject("👻"), 1000);
// });
const rand = () => Math.random() * 2000;

const p1 = new Promise((r) => setTimeout(r, rand(), "A"));
const p2 = new Promise((r) => setTimeout(r, rand(), "B"));
const p3 = new Promise((r) => setTimeout(r, rand(), "C"));
const p4 = new Promise((r) => setTimeout(r, rand(), "D"));

function race(iterable) {
  const promises = [];
  for (let prom of iterable) {
    prom
      .then(
        (result) => {
          console.log(">>> 1", result);
        },
        (error) => {
          console.log(">>> 2", error);
        }
      )
      .then((value) => value + 3);
  }
}

//Promise.race([p1, p2, p3, p4]).then((value) => console.log("1 >>>", value));

console.log(race([p1, p2, p3, p4]));
