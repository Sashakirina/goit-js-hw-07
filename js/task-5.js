function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const bodyEl = document.querySelector(`body`);
const changeColorEl = document.querySelector(`.change-color`);
const colorSpan = document.querySelector(".color");

changeColorEl.addEventListener("click", handleClick);

function handleClick(event) {
	const color = getRandomHexColor();
	bodyEl.style.backgroundColor = color;
	colorSpan.textContent = color;
}
