// Ви повинні реалізувати функцію, яка повертає різницю між
// найбільшим та найменшим значенням у списку , отриманому як аргумент
// функції. Масив, який отримує функція як аргумент, може містити позитивні
// та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль.
// Спочатку масив буде поданий у невідсортованому вигляді.
// arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7
// arr([16]) => 0

function returnDifference(arr) {
  if (arr.length <= 1) {
    return console.log(0);
  }
  const sortArr = arr.sort();
  const maxNub = arr[0];
  const minNub = arr[arr.length - 1];
  const difference = Math.abs(maxNub - minNub);
  return console.log(difference);
}

returnDifference([1, 2, 3, -4]);
