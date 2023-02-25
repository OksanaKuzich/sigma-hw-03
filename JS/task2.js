// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
// масиву тільки ті слова, довжина яких перевищує число.

// NATIVE

// function wordsLength(string, number) {
//   const words = string.split(" ");
//   const wordsLength = words.filter((word) => word.length > number);

//   return wordsLength;
// }

// console.log(wordsLength("I will be happy and strong", 4));

// LODASH

let _ = require("lodash");

function wordsLength(string, number) {
  const words = _.split(string, " ", string.length);

  const wordsLength = _.filter(words, function (word) {
    return word.length > number;
  });

  return wordsLength;
}

console.log(wordsLength("I will be happy and strong", 4));
