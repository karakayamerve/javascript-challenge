//DOM yapısı
//
let title = document.getElementById("title");
console.log(title.innerHTML); //Merhaba Dünya ekranda çıkar

let title2 = document.getElementById("title");
title2.innerHTML = "Değişen bilgi";
console.log(title2.innerHTML); // html ile ana sayfaya yazılan başlık olan Merhaba dünya yerine "Değişen bilgi" yazısı gelir

let link = document.querySelector("ul>li>a");
link.innerHTML = "Link Bilgisi değişmiştir.";
link.style.color = "red"; // "Link Bilgisi değişmiştir" yazısı kırmızı oldu
console.log(link); //html ile ana sayfaya yazılan "link tıklayınız" yazısı yerine "Link Bilgisi değişmiştir" gelmiştir.

let sFullName = prompt("Lütfen adınızı giriniz:");
let h3 = document.getElementById("h3");
h3.innerHTML = `${h3.innerHTML} <small>${sFullName}</small>`;
console.log(h3.innerHTML); //html ile ana sayfaya yazılan "sitemize hoşgeldin"  yazısı "sitemize hoşgeldin merve" oldu

let sonliste = document.querySelector("ul#list2>li:last-child");
sonliste.innerHTML = "son liste değişti...";
let ilkliste = document.querySelector("ul#list2>li:first-child");
ilkliste.innerHTML = "ilk liste değişti eski liste=1.liste";

//sayfa çıktısı
//"1.liste"-> "ilk liste değişti..."
//"2.liste"
//"3.liste"-> "son liste değişti..."

let ulYeni = document.querySelector("ul#list2");
let liYeni = document.createElement("li");
liYeni.innerHTML = "Yeni eklenen liste...-en alta";
ulYeni.append(liYeni); // en alta ekleme yapar

//sayfa çıktısı
//ilk liste değişti...
//2.liste
//son liste değişti...
//Yeni eklenen liste...

let ulYeni2 = document.querySelector("ul#list2");
let liYeni2 = document.createElement("li");
liYeni2.innerHTML = "Yeni eklenen liste...-en üste";
ulYeni2.prepend(liYeni2); // en üste ekleme yapar

//sayfa çıktısı
//Yeni eklenen liste...-en üste
//ilk liste değişti eski liste=1.liste
//2.liste
//son liste değişti...
//Yeni eklenen liste...-en alta
