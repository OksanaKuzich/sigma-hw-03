// Дано два рядки. Чи можна перший рядок отримати з другим циклічним
// зрушенням?

// NATIVE

// function reverse(str1, str2) {
//   const strArr = str1.split("");

//   const deleteEl = strArr.splice(0, 2);

//   strArr.push(...deleteEl);

//   const str = strArr.join("");

//   if (str === str2) {
//     return "TRUE";
//   }
//   return "FALSE";
// }

// console.log(reverse("kate", "teka"));

// LODASH

let _ = require("lodash");

function reverse(str1, str2) {
  const strArr = _.split(str1, "", str1.length);

  const deleteEl = _.slice(strArr, [(start = 0)], [(end = 2)]);
  const strArray = _.drop(strArr, 2);
  const newArray = _.concat(strArray, deleteEl);

  const str = _.join(newArray, "");

  if (str === str2) {
    return "TRUE";
  }
  return "FALSE";
}

console.log(reverse("kate", "teka"));
