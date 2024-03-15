const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const elements = event.target;
	if (elements.email.value === `` || elements.password.value ===``) {
		alert("All form fields must be filled in");
    } else {
	const info = {
		email: elements.email.value.trim(),
		password: elements.password.value.trim(),
        };
        console.log(info); 
    }

	formEl.reset();
}
