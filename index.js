//  let count = 0;
// let counter = document.getElementById("count-el");
// let saver = document.getElementById("save-el");
// function increment() {
//   count = count + 1;
//   counter.innerText = count;
// }
// function save() {
//   let counting = count + " - ";
//   saver.innerText += counting;
// }
let counthome = 0;
let countguest = 0;
let addingscores = document.getElementById("addscores-home");
let addingscoresg = document.getElementById("addscores-guest");
let saves = document.getElementById("restart-button");
//HOME
function onepoint() {
  counthome += 1;
  addingscores.textContent = counthome;
}
function twopoint() {
  counthome += 2;
  addingscores.textContent = counthome;
}
function threepoint() {
  counthome += 3;
  addingscores.textContent = counthome;
}
//GUEST
function onepointg() {
  countguest += 1;
  addingscoresg.textContent = countguest;
}
function twopointg() {
  countguest += 2;
  addingscoresg.textContent = countguest;
}
function threepointg() {
  countguest += 3;
  addingscoresg.textContent = countguest;
}
function restart() {
  addingscores.textContent = 0;
  addingscoresg.textContent = 0;
  counthome = 0;
  countguest = 0;
}
