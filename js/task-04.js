let counterValue = 0;
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector("#value");

decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
});

incrBtn.addEventListener("click", () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
});
