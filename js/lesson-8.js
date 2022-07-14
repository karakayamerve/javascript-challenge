//ÖRNEK

let score = prompt("Notu giriniz: ");
let textInfo;

if (score >= 0 && score <= 100) {
  if (score >= 90) {
    textInfo = "AA";
  } else if (score >= 85) {
    textInfo = "BA";
  } else if (score >= 80) {
    textInfo = "BB";
  } else if (score >= 75) {
    textInfo = "CB";
  } else if (score >= 70) {
    textInfo = "CC";
  } else if (score >= 65) {
    textInfo = "DC";
  } else if (score >= 60) {
    textInfo = "DD";
  } else if (score >= 50) {
    textInfo = "FD";
  } else if (score < 50) {
    textInfo = "FF";
  }
} else {
  textInfo = "Bilgiler doğru değil";
}

console.log(textInfo);
