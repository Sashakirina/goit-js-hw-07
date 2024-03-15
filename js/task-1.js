const listCategoriesEl = document.querySelector(`#categories`);

const itemEl = listCategoriesEl.querySelectorAll(`.item`);

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((item) => {
	const h2El = item.firstElementChild;
	const ulEl = item.lastElementChild.children;
	console.log(`Categories: ${h2El.textContent}`);
	console.log(`Elements: ${ulEl.length}`);
});
