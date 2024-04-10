// Создайте функцию, которая принимает URL изображения и возвращает Promise,
//который разрешается, если изображение успешно загружено, и отклоняется в
//случае ошибки загрузки.

// const imageUrl =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
//   1 +
//   ".png";

// // function loadImage(url) {
// //   return new Promise((resolve, reject) => {
// //     let img = new Image();
// //     img.onload = () => resolve("Изображение успешно загружено");
// //     img.onerror = () => reject("Ошибка загрузки изображения");
// //     img.src = url;
// //   });
// // }

// // loadImage(imageUrl)
// //   .then((message) => console.log(message))
// //   .catch((error) => console.error(error));

//() => {};

//Напишите функцию, которая делает несколько асинхронных запросов и возвращает Promise с результатом всех запросов.

// function foo(urls) {
//   return Promise.all(urls.map((url) => fetch(url)));
//}

() => {};

var TreeNode = function (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

const tree = {
  value: 1, // ←
  left: {
    value: 5,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
  right: {
    value: 2, // ←
    left: {
      value: 8,
      left: null,
      right: null,
    },
    right: {
      value: 9, // ←
      left: null,
      right: null,
    },
  },
};

function maxSum(root) {
  if (!root) {
    return 0;
  }

  let left = maxSum(root.left);
  let right = maxSum(root.right);
  return root.value + Math.max(left, right);
}

console.log(maxSum(tree));
