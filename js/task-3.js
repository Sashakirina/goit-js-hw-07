const inputEl = document.querySelector(`#name-input`);
const nameEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, addName);

function addName(event){
    const userName = event.target.value;
    if(!userName.trim().length){
     nameEl.textContent =  `Anonymous`;   
    } else{
      nameEl.textContent =  userName.trim();   
    }
}
