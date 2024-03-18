function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector(`button[data-create]`);
const destroyBtnEl = document.querySelector(`button[data-destroy]`);
const container = document.querySelector("#boxes");

createBtnEl.addEventListener(`click`, createMarkup);

function createBoxes(amount) {
	container.innerHTML = "";
	let width = 30;
	let height = 30;
	for (let i = 0; i < amount; i++) {
		const box = document.createElement("div");
		box.style.width = `${width}px`;
		box.style.height = `${height}px`;
		box.style.backgroundColor = getRandomHexColor();
		container.appendChild(box);
		width += 10;
		height += 10;
	}
}

function createMarkup() {
	const value = Number(inputEl.value);
	if (value >= 1 && value <= 100) {
		createBoxes(value);
	} else {
		return;
	}
}

destroyBtnEl.addEventListener(`click`, destroyBoxes);

function destroyBoxes() {
	container.innerHTML = "";
	inputEl.value = ``;
}
