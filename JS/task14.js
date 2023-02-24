// Перевірити, чи дотримується в заданому тексті баланс круглих дужок,
// що відкривають і закривають, тобто можна встановити взаємно однозначну
// відповідність відкривають і закривають дужок, причому відкриває дужка
// завжди передує відповідної закриває. Якщо баланс дотримується вивести цей
// текст на html – сторінку і забороніть користувачу копіювати цей текст та
// перегляд коду сторінки.

const example =
  "Мова і час (Розвиток функціональних стилів cучасної української літературної мови). Київ, 1977 (назва книжки); Іван Огієнко (Митрополит Іларіон). Українська культура (Київ, 2002): назва книжки; Вокатив (кличний відмінок) — форма іменника, що називає того, до кого звертаються; Товариш Жан (Іван Іванович) свій високий лоб і свої рогові окуляри протирає завжди білосніжною хусткою(М. Хвильовий).";

function checkBrackets(str) {
  const arrBrackets = "()";
  const stack = [];
  for (let i = 0; i < str.length; ++i) {
    let symbol = str[i];
    let index = arrBrackets.indexOf(symbol);

    if (index >= 0) {
      if (index & 1) {
        if (!stack.length) {
          return false;
        }

        let last_br = stack.pop();

        if (last_br != arrBrackets[index - 1]) {
          return false;
        }
      } else {
        stack.push(symbol);
      }
    }
  }

  return !stack.length;
}

console.log(checkBrackets(example));

if (checkBrackets(example)) {
  const elem = document.getElementById("example");
  elem.innerHTML = example;
  elem.onselectstart = function () {
    return false;
  };
}

