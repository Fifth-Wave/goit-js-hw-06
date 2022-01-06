const btnEl = document.querySelector("button.change-color");
const spanEl = document.querySelector("span.color");

btnEl.addEventListener("click", onBtnClick);

function onBtnClick() {
  const newColor = getRandomHexColor();
  spanEl.textContent = newColor;
  document.body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
