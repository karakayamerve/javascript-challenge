//KOŞUL YAPISI (İF/ELSE)

//let name = prompt("kullanıcı adını giriniz: ");
if (name.length > 0) {
  console.log(`Kullanıcı adınız ${name}`); // ekran çıktısı: Kullanıcı adınız merve
} else {
  console.log("Kullanıcı adınızı giriniz!!"); // ekran çıktısı: Kullanıcı adınızı giriniz!!
}

//ÇOKLU KOŞULLARDA ÇALIŞMAK
//
let userName = prompt("Adınızı giriniz:");
let age = prompt("Yaşınızı giriniz:");
if (userName && age >= 18) {
  console.log("Ehliyet alabilirsiniz.");
} else if (!userName) {
  console.log("kullanıcı adınız tanımlı değildir.");
} else if (!(age >= 18)) {
  console.log("yaşınız tanımlı değildir veya 18 yaşından küçüksünüz!");
}
