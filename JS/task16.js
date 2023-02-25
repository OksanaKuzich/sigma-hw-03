// Створити пароль для користувача. Вимоги: довжина від 6 до 20
// символів повинен бути рівно один символ підкреслення, хоча б дві великі
// літери, не більше 5 цифр, будь-які дві цифри поспіль неприпустимі.

function password() {
  let password = "";
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const abcUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const signs = "_";

  const lengthPass = Math.floor(Math.random() * (20 - 6)) + 6;
  let lengthNumb = (lengthPass * 0.25).toFixed(0);
  const lengthaABC = lengthPass - lengthNumb - 3;

  for (let i = 0; i < lengthaABC; i++) {
    password += abc[Math.floor(Math.random() * abc.length)];
  }

  for (let i = 0; i < 2; i++) {
    password += abcUpp[Math.floor(Math.random() * abcUpp.length)];
  }
  password += signs;

  const arrPass = password.split("");

  for (let i = arrPass.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = arrPass[i];
    arrPass[i] = arrPass[j];
    arrPass[j] = tmp;
  }
  const passwordArray = [];

  for (let i = 0; i < arrPass.length; i++) {
    passwordArray.push(arrPass[i]);
    if (lengthNumb > 0 && i % 2 === 0) {
      lengthNumb -= 1;
      passwordArray.push(number[Math.floor(Math.random() * number.length)]);
    }
  }

  password = passwordArray.join("");
  return password;
}

console.log(password());
