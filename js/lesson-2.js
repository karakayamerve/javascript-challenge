//BOOLEAN
//

let active = false;
active = true;
console.log(active); //true

let userName;
let isUserName = Boolean(userName);
console.log(isUserName); //false

//Boolean("11") ->true
//Boolean("0") -> true
//Boolean("")  -> false
//Boolean(0)  ->false

let isim = "sinan";
const DOMAIN = "karakaya.net";
let email = isim + "@" + DOMAIN;
console.log("Merhaba", isim, "sitemize hoşgeldin", "email adres:", email); //Merhaba sinan sitemize hoşgeldin email adres: sinan@karakaya.net
let info = `
Merhaba ${isim} sitemize hoşgeldin ${email} adresin oluşmuştur. ->ekrana Merhaba sinan sitemize hoşgeldin sinan@karakaya.net adresin oluşmuştur." yazar
kısa isim ${isim[0]}. -> ekrana "kısa isim s." yazar
`;
console.log(info);
