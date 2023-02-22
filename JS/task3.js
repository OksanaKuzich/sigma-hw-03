// Напишіть функцію, яка повертає true, якщо перший переданий
// аргумент (рядок) закінчується другим аргументом (також рядком).
// Приклад:
// solution('abc', 'bc') => true
// solution('abc', 'd') => false

function findEnds(string1, string2) {
  return string1.endsWith(string2);
}

console.log(findEnds("abc", "bc"));
