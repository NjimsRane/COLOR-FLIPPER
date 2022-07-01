const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const span = document.querySelector("span");

function changeColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }
  span.style.color = hexColor;
  span.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}
let interval = setInterval(changeColor, 1500);

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
