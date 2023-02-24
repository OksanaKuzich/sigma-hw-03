// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
// \WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
// без розширення.

function path(str) {
  const pathArr = str.split("/");
  const fileName = pathArr[pathArr.length - 1].split(".");

  return fileName[0];
}

console.log(path("c:/WebServers/home/testsite/www/myfile.txt"));
