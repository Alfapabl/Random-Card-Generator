let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "k"];
let images = ["♦", "♥", "♠", "♣"];

let header = document.querySelector("#header");
let center = document.querySelector("#center");
let footer = document.querySelector("#footer");

function color(icon) {
  if (icon == "♥" || icon == "♦") {
    header.style.color = "red";
    footer.style.color = "red";
  }
}

window.onload = function() {
  //write your code here

  let variable_values = [Math.floor(Math.random() * values.length)];
  let variables_images = [Math.floor(Math.random() * images.length)];

  header.innerHTML = images[variables_images];
  center.innerHTML = values[variable_values];
  footer.innerHTML = images[variables_images];
  color(images[variables_images]);
};

onload();
