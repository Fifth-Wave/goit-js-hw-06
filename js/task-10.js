const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");

btnCreate.addEventListener("click", onBtnCreateClick);
btnDestroy.addEventListener("click", onBtnDestroyClick);

function onBtnCreateClick() {
  if (inputEl.value) {
    return createBoxes(inputEl.value);
  }
}

function createBoxes(amount) {
  const divElements = [];

  for (let index = 0; index < amount; index++) {
    const divEl = document.createElement("DIV");
    divEl.style.width = `${30 + 10 * index}px`;
    divEl.style.height = `${30 + 10 * index}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divElements.push(divEl);
  }
  divBox.append(...divElements);
}

function onBtnDestroyClick() {
  divBox.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
