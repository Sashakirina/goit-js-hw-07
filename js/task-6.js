function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input'); 
console.log(inputEl);
const createBtnEl = document.querySelector(`button[data-create]`);
console.log(createBtnEl);
const destroyBtnEl = document.querySelector(`button[data-destroy]`);
console.log(destroyBtnEl);
const container = document.querySelector('#boxes');

createBtnEl.addEventListener(`click`, createMarkup);


let width = 30;
let height = 30;
function createBoxes(amount) {
  for (let i = 0; i < amount; i++){
   
    const box = document.createElement('div');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add(`box`);
    container.appendChild(box);
    width += 10;
    height += 10;
  }
}

function createMarkup() {
  if (inputEl.value >= 1 && inputEl.value <= 100) {
    createBoxes(inputEl.value);
  } else {
    return;
  }
}


destroyBtnEl.addEventListener(`click`, destroyBoxes);

function destroyBoxes(){
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.remove());
  inputEl.value = ``;
  width = 30;
  height = 30;
}