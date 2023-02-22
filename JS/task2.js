// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
// масиву тільки ті слова, довжина яких перевищує число.

function wordsLength(string, number) {
  const words = string.split(" ");
  const wordsLength = words.filter((word) => word.length > number);

  return wordsLength;
}

wordsLength("I will be happy and strong", 4);
