var rand1 = Math.floor(Math.random()*6) + 1;
var rand2 = Math.floor(Math.random()*6) + 1;

var imgSource1 = "images/dice" + rand1 + ".png";
var imgSource2 = "images/dice" + rand2 + ".png";

var selector1 = document.querySelectorAll("img")[0];
var selector2 = document.querySelectorAll("img")[1];

selector1.setAttribute("src", imgSource1)
selector2.setAttribute("src", imgSource2);



if (rand1 > rand2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (rand2 > rand1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
