const colors = ["darkred", "crimson", "limegreen", "blue", "#F15030"];
const btn = document.querySelector("#btn");
const span = document.querySelector("span");

btn.addEventListener("click", () => {
  const randomColor = randomNumber();

  span.style.color = colors[randomColor];
  span.textContent = colors[randomColor].toUpperCase();
  document.body.style.backgroundColor = colors[randomColor];
});

function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}
