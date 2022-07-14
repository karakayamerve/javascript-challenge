//STRİNG İŞLEMLER
//
let mail = "mervekarakaya@asd";
let isim2 = "merve";
let soyisim = "KARAKAYA";

console.log(mail.length); //17
console.log(isim2[0]); //m
console.log(isim2.toUpperCase()); //MERVE
console.log(soyisim.toLowerCase()); // karakaya
console.log(mail.search("@")); //13
console.log(mail[13]); //@ çıktısını verir

let DOMAIN1 = mail.slice(mail.search("@"));
console.log(DOMAIN1); //@asd çıktısını verir
let DOMAIN2 = mail.slice(mail.search("@") + 1);
console.log(DOMAIN2); //asd çıktısını verir

let mail1 = mail.replace("asd", "net");
console.log(mail1); // mervekarakaya@net
console.log(mail1.endsWith("net")); //true
console.log(mail1[5]); //k

let fName1 = `${isim2[0].toUpperCase()}${isim2.slice(1)}`;
console.log(fName1); //Merve
