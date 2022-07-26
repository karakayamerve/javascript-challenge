let counter = 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;
increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
  console.log(this.id); //5 increase ->5 tıklama sonucu
  if (this.id == "increase") {
    counterDOM.innerHTML = counter += 1;
  } else {
    counterDOM.innerHTML = counter -= 1;
  }
}

let user = { userName: "mervekarakaya", isActive: true };
console.log(user); //{userName: 'mervekarakaya', isActive: true}
localStorage.setItem("userInfo", user);

let userInfo = localStorage.getItem("userInfo");
console.log(userInfo); //[object Object]
