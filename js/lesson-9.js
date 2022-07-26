//örnek 1
function helloWorld() {
  console.log("Hello");
}
function hello() {
  console.log("Hello World");
  helloWorld();
}
hello();

//Örnek 1 çıktı:
//Hello World
//Hello

//Örnek 2
let firstName = "Merve";
function greeting(firstName) {
  console.log(`Merhaba ${firstName ? firstName : ""}`); //üstteki let firstname tanımı yorum satırına alınırsa ekrana sadece "Merhaba " yazar.
  console.log(`Merhaba ${firstName}`);
  console.log(`Merhaba ${firstName}`); //Merhaba yazar ekrana
  console.log(`Merhaba ${firstName}`);
}
greeting("Apple");

//örnek 2 çıktı:
//Merhaba Merve

//örnek 3
function hello(name) {
  console.log(`Merhaba ${name}`);
}
hello("JavaScript");

//örnek 3 çıktı:
//Merhaba JavaScript

//örnek 4
function hello1(firstName1) {
  console.log(`Selam ${firstName1}`);
}
hello1("JavaScript");
const helloFuncV = (firstName1) => {
  console.log(`Merhaba ${firstName1}`);
};
helloFuncV("helloFuncV");

const helloFuncV2 = (firstName1) => console.log(`Merhaba2 ${firstName1}`);
helloFuncV2("helloFuncV2");

const helloFuncV3 = (firstName1, lastName) =>
  console.log(`Merhaba3 ${firstName1}${lastName}`);
helloFuncV3("helloFuncV3", " Last Name info");
//örnek 4 çıktı:
//Selam JavaScript
// Merhaba helloFuncV
// Merhaba2 helloFuncV2
//Merhaba3 helloFuncV3 Last Name info
