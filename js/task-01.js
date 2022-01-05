const categoriesEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesEl.length}`);
console.log("");

categoriesEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(
    `Elements: ${item.firstElementChild.nextElementSibling.children.length}`
  );
  console.log("");
});
