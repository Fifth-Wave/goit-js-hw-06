let counterValue = 0;
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector("#value");

decrBtn.addEventListener("click", () => {
  spanEl.textContent = Number(spanEl.textContent) - 1;
});

incrBtn.addEventListener("click", () => {
  spanEl.textContent = Number(spanEl.textContent) + 1;
});
