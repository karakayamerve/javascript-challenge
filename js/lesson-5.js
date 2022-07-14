//KARAR YAPILARI & KOŞULLAR

let deger = "100";
let user = "merve";
//eşitse
console.log("==", deger == 1); // false çıktısı alınır
console.log("==", deger == 100); // true çıktısı alınır
//hem değer hem tür eşitse
console.log("===", deger === 1); // false çıktısı alınır
console.log("===", deger === 100); // false çıktısı alınır
//eşit değilse
console.log(deger != 1); //true
console.log(deger != 100); //false
console.log(user != "guest"); //true
//küçük ve küçük eşit
console.log("deger < 100 ", deger < 100); //false
console.log("deger <= 100 ", deger <= 100); //true
// && (ve)
price = 0;
console.log(price > 0 && user != "guest"); // false
// || (veya)
console.log(price > 0 || user != "guest"); //true
console.log(!!2);
