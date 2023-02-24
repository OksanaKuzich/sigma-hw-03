// Створіть функцію, яка приймає рядок і повертає кількість (кількість)
// голосних, які у ній.
// Приклад:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1

function countVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  const letters = word.split("");

  const counter = letters.reduce((acc, element) => {
    if (vowels.includes(element)) {
      acc += 1;
    }
    return acc;
  }, 0);

  return counter;
}

console.log(countVowels("Palm"));

// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне
// змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
// Приклад:
// removeABC("This might be a bit hard") ➞ "This might e it hrd"
// removeABC("hello world!") ➞ null

function removeABC(string) {
  const ABC = ["a", "b", "c"];

  const str = string.split("");

  const newStr = str.reduce((acc, element, array) => {
    if (!ABC.includes(element)) {
      acc.push(element);
    }
    return acc;
  }, []);

  const newFormatStr = newStr.join("").replace(/\s+/g, " ");

  if (newFormatStr.length === string.length) {
    return null;
  }

  return newFormatStr;
}

console.log(removeABC("This might be a bit hard"));
