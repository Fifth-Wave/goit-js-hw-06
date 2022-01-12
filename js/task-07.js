const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onRangeChange);
spanEl.style.fontSize = inputEl.value + "px";

function onRangeChange() {
  spanEl.style.fontSize = inputEl.value + "px";
}
