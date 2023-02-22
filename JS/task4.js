// Напишіть функцію, яка отримує масив цілих чисел і повертає масив
// середніх значень кожного цілого числа та його послідовника, якщо він є.
// Приклад:
// averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
// averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]

function averages(arr) {
  const averagesArr = arr.reduce((acc, element, index, array) => {
    if (index !== array.length - 1) {
      acc.push((element + array[index + 1]) / 2);
    }
    return acc;
  }, []);

  return averagesArr;
}

console.log(averages([1, 3, 5, 1, -10]));
