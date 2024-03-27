//когда в задаче говорится постройте цепочку из трех промисов тоже что и цепочка из трёх then

() => {};

//??????? Создайте функцию, которая принимает URL изображения и возвращает Promise,
//который разрешается, если изображение успешно загружено, и отклоняется в
//случае ошибки загрузки.

// const imageUrl =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
//   1 +
//   ".png";

// function loadImage(url) {
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

const root = {
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

//                                1
//                              /   \
//                             5     2
//                            / \    / \
//                           1  3    8   9
//
//
function maxSum(root) {
  if (!root) {
    return 0;
  }
  let left = maxSum(root.left);
  let right = maxSum(root.right);
  return root.value + Math.max(left, right);
}
