let bilgi = document.querySelector("#bilgi");
bilgi.addEventListener("click", domClick);
function domClick() {
  console.log("tıklandı");
  console.log((this.innerHTML = "tıklanıdığı için bilgi değiştirilmiştir."));
  // console.log((this.style.color = "red")); -> "Front-End 101" yazısı "tıklanıdığı için bilgi değiştirilmiştir" yazısı oldu ve kırmızı oldu
  this.style.color == "red"
    ? (this.style.color = "black")
    : (this.style.color = "red");
  // this.style.color==red ise her tıklamada siyah diğer tıklamada kırmızı olarak gösterir
}

let bilgi2 = document.querySelector("#bilgi2");
bilgi2.addEventListener("mouseover", domClick2);
function domClick2() {
  console.log("tıklandı2");
  this.style.color == "red"
    ? (this.style.color = "blue")
    : (this.style.color = "red");
  // this.style.color==red ise her tıklamada siyah diğer tıklamada kırmızı olarak gösterir
  //mouseover: mouse yazının üzerine gelince renk kırmızıdan maviye sonra tekrar maviden kırmızıya döner
}
