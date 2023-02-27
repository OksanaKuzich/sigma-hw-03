// В заданому масиві найменший елемент помістити на перше місце,
// найменший з тих, що залишилися - на останнє місце, наступний -
// передостаннє і так далі - до середини масиву.

// NATIVE

function mix(arr) {
  const arrSort = arr.sort((a, b) => a - b);
  const arrA = [];
  const arrB = [];

  for (let i = 0; i < arrSort.length; i += 1) {
    if (i % 2 === 0) {
      arrA.push(arrSort[i]);
    } else {
      arrB.unshift(arrSort[i]);
    }
  }

  const array = [...arrA, ...arrB];

  return array;
}

console.log(mix([1, 2, 3, 4, 5]));

// LODASH

// let _ = require("lodash");

// function mix(arr) {
//   const arrSort = _.sortBy(arr);

//   const arrA = [];
//   const arrB = [];

//   _.each(arrSort, function (value, index) {
//     if (index % 2 === 0) {
//       arrA.push(value);
//     } else {
//       arrB.unshift(value);
//     }
//   });

//   const newArray = _.concat(arrA, arrB);

//   return newArray;
// }

// console.log(mix([1, 2, 3, -4, 5]));
