// З елементів масиву a, що складається з 2n елементів, отримати масиви b
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися.

// NATIVE

function allArray(arrA) {
  const arrB = [];
  const arrC = [];

  const arrSort = arrA.sort((a, b) => a - b);

  do {
    const numbers = arrSort.reduce(
      (acc, element, index, array) => {
        if (index < array.length - 1) {
          const difference = Math.abs(element - array[index + 1]);

          if (index === 0 || acc?.difference > difference) {
            acc.firstNum = element;
            acc.indexFirstNub = index;
            acc.secondNum = array[index + 1];
            acc.difference = difference;
          }
        }
        return acc;
      },
      {
        firstNum: null,
        indexFirstNub: null,
        secondNum: null,
        difference: null,
      }
    );

    arrB.push(numbers.firstNum);
    arrC.push(numbers.secondNum);

    arrSort.splice(numbers.indexFirstNub, 2);
  } while (arrSort.length > 0);

  return { arrB, arrC };
}

console.log(allArray([1, 2, 3, 4, 5, 5]));

// LODASH;

// let _ = require("lodash");

// function allArray(arrA) {
//   const arrB = [];
//   const arrC = [];

//   const arrSort = _.sortBy(arrA);

//   do {
//     const numbers = _.reduce(
//       arrSort,
//       function (acc, element, index, array) {
//         if (index < array.length - 1) {
//           const difference = Math.abs(element - array[index + 1]);

//           if (index === 0 || acc?.difference > difference) {
//             acc.firstNum = element;
//             acc.indexFirstNub = index;
//             acc.secondNum = array[index + 1];
//             acc.difference = difference;
//           }
//         }
//         return acc;
//       },
//       {
//         firstNum: null,
//         indexFirstNub: null,
//         secondNum: null,
//         difference: null,
//       }
//     );

//     arrB.push(numbers.firstNum);
//     arrC.push(numbers.secondNum);

//     arrSort.splice(numbers.indexFirstNub, 2);
//   } while (arrSort.length > 0);

//   return { arrB, arrC };
// }

// console.log(allArray([1, 2, 3, 4, 5, 5]));
