// Напишіть функцію, яка повертає true, якщо перший переданий
// аргумент (рядок) закінчується другим аргументом (також рядком).
// Приклад:
// solution('abc', 'bc') => true
// solution('abc', 'd') => false

// NATIVE

// function findEnds(string1, string2) {
//   return string1.endsWith(string2);
// }

// console.log(findEnds("abc", "bc"));

// LODASH

let _ = require("lodash");

function findEnds(string1, string2) {
  return _.endsWith(string1, string2);
}

console.log(findEnds("abc", "bc"));
