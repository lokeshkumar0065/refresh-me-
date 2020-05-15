var name1 = prompt("enter name of player 1");
var name2 = prompt("enter the name of player 2");
var change1 = document.querySelector(".vv");
change1.innerHTML = name1;
var change2 = document.querySelector(".vv1");
change2.innerHTML = name2;
var x = Math.round(Math.random() * 5) + 1;
var random1 = "dice" + x + ".png";
var y = document.querySelectorAll("img")[0];
y.setAttribute("src", random1);
var x2 = Math.round(Math.random() * 5) + 1;
var random2 = "dice" + x2 + ".png";
var z = document.querySelectorAll("img")[1];
z.setAttribute("src", random2);
if (x > x2) {
  document.querySelector("h1").innerHTML = name1 + " wins";
} else if (x2 > x) {
  document.querySelector("h1").innerHTML = name2 + " wins";

} else {
  document.querySelector("h1").innerHTML = "draw!";
}
