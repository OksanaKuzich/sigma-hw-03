// Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
// значеннями, а значення ключами.
// Вхід - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
// вихід - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

function reversionKey(obj) {
  const reversion = {};

  const entries = Object.entries(obj);
  entries.forEach((element) => {
    reversion[element[1]] = element[0];
  });

  return reversion;
}

console.log(
  reversionKey({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
);
