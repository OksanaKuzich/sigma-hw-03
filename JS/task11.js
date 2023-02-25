// Дано два рядки. Чи можна перший рядок отримати з другим циклічним
// зрушенням?

function reverse(str1, str2) {
  const strArr = str1.split("");

  const deleteEl = strArr.splice(0, 2);

  strArr.push(...deleteEl);

  const str = strArr.join("");

  if (str === str2) {
    return "TRUE";
  }
  return "FALSE";
}

console.log(reverse("kate", "teka"));
