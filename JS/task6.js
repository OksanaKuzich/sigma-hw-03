// Напишіть JavaScript для пошуку унікальних елементів з двох масивів.
// Приклад:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

// NATIVE

function uniqueValues(arr1, arr2) {
  const arrAll = [...arr1, ...arr2];
  const arrAllStr = arrAll.map((item) => item.toString());
  const uniqueArr = Array.from(new Set(arrAllStr));

  uniqueArr.sort((a, b) => a - b);

  return uniqueArr;
}

console.log(uniqueValues([1, 2, 3], [100, 2, 1, 10]));

// LODASH

// let _ = require("lodash");

// function uniqueValues(arr1, arr2) {
//   const arrAll = _.concat(arr1, arr2);

//   const arrAllStr = _.map(arrAll, function (item) {
//     return item.toString();
//   });

//   const uniqueArr = _.uniq(arrAllStr);

//   uniqueArr.sort((a, b) => a - b);

//   return uniqueArr;
// }

// console.log(uniqueValues([1, 2, 3], [100, 2, 1, 10]));
