// Запросіть користувача ввести якусь фразу. Відобразіть кожне слово у
// вигляді списку ul li. Також відобразіть перше слово UPPERCASE, а останні 2
// з маленької. Знайдіть усі літери "а" їх кількість виведіть у alert вікно. Після
// закриття alert - реалізувати скрипт, який через 5 хвилин бездіяльності
// користувача (нічого не натискається, нічого не виділяється, не рухається
// прогрес-бар) висвітлює повідомлення "Ви ще тут?" Якщо так, користувач
// залишається на сторінці, якщо ні сторінка закривається.

const formEl = document.querySelector(".form");
const listEl = document.querySelector(".phraseList");

formEl.addEventListener("submit", onSubmitForm);

let phrase = "";

function onSubmitForm(e) {
  e.preventDefault();
  phrase = e.target.elements.phrase.value;

  const arrPhrase = phrase.split(" ");

  listEl.innerHTML = markUp(arrPhrase).join("");

  countA(phrase);
}

function markUp(arr) {
  return arr.map((item, index, array) => {
    if (index === 0) {
      const firstWord = item.toUpperCase();
      item = firstWord;
      return `<li>${item}</li>`;
    }

    if (index === array.length - 1 || index === array.length - 2) {
      const lastWords = item.toLowerCase();
      item = lastWords;
      return `<li>${item}</li>`;
    }

    return `<li>${item}</li>`;
  });
}

function countA(str) {
  const newStr = str.toLowerCase();
  const symbol = newStr.split("");

  const counter = symbol.reduce((acc, item) => {
    if (item === "a") {
      acc += 1;
    }
    return acc;
  }, 0);

  const alertHelp = setTimeout(function () {
    alert(`Total number of letters "a": ${counter}`);
  }, 1000);

  return alertHelp;
}

function inactivityTime() {
  let time = setTimeout(close_window, 300000);

  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("keypress", resetTimer);

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(close_window, 300000);
  }

  function close_window() {
    const res = confirm("Are you here?");
    if (!res) {
      close();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  inactivityTime();
});
