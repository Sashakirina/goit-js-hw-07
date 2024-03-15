function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const bodyEl = document.querySelector(`body`);
const changeColorEl = document.querySelector(`.change-color`);

changeColorEl.addEventListener("click", handleClick);

function handleClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
}
