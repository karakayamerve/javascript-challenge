// TERNARY OPERATOR

let userName = prompt("Kullanıcı adınızı giriniz:");
let info = document.querySelector("#title");
//koşul ? doğruysa : yanlışsa
info.innerHTML = `${
  userName.length > 0 ? userName : "Kullanıcı adınız bulunamadı! "
}`;

//örnek -1
let boolean;
const isboolean = boolean ? true : false;
console.log(isboolean) >> false;
console.log(boolean, "boolean"); // undefined

//örnek -2
let age = 24;
let permission = age >= 18 ? "giriş yapabilirsiniz." : "giriş yapamazsınız";
console.log(permission); // giriş yapabilirsiniz.

//örnek -3
let fCity = "Ankara";
let sCity = "İstanbul";
const isEqual = fCity == sCity ? "iki şehir aynı" : "iki şehir aynı değil";
console.log(isEqual); // iki şehir aynı değil
