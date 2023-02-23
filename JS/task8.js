// Івана Іванова обікрали. Але його речі було застраховано на певну суму.
// Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
// загальною вартістю цих речей та межею політики.
// Приклад:
// calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
// calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
// Обмеження: Об'єкт завжди повинен містити елементи, сума предметів
// завжди повинна бути більшою за страховку.

function calculateDifference(obj, number) {
  if (Object.keys(obj).length !== 0) {
    const total = Object.values(obj);

    const summ = total.reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    if (summ > number) {
      const difference = summ - number;

      return difference;
    }

    return "Oops...";
  }

  return "Oops...";
}

console.log(calculateDifference({ "baseball bat": 20 }, 500));
