// Дано рядок, що складається зі слів, розділених пробілами. Сформувати
// новий рядок з такими властивостями:а) усі слова у нижньому регістрі, крім
// першої літери першого слова; б) усі посилання у словах замінюються на
// "[посилання заборонено]"; в) всі email замінюються на "[контакти
// заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,
// видаляються.
// Якщо кількість символів в отриманому рядку буде більшої ніж
// кількість символів у вихідному, то запустити функцію, що буде кожні 5
// секунд в alert буде питати, чи потрібна нам допомога.

const str = "have a good day!";
// const str = "have a good day komoks@gmail.com! 12345 https://www.google.nl/";

function sentence(str) {
  const strNew = str.toLowerCase();
  let strUpp = strNew.charAt(0).toUpperCase() + strNew.slice(1);

  let strArr = strUpp.split(" ");

  strArr = strArr.map((item) => {
    if (item.includes("http")) {
      return "[посилання заборонено]";
    }
    if (item.includes("@")) {
      return "[контакти заборонені]";
    }
    if (item.length > 3) {
      if (isFinite(item)) {
        return "";
      }
    }
    return item;
  });

  const strWithout = strArr.filter((item) => item !== "").join(" ");

  return strWithout;
}

console.log(sentence(str));

const resultFunc = sentence(str);

const alertHelp = setInterval(function () {
  alert("Do you need help?");
}, 5000);

function helper(str, resultFunc) {
  if (str.length > resultFunc.length) {
    alertHelp;
  }
}

helper(str, resultFunc);
