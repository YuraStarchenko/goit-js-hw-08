import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
	form: document.querySelector('.feedback-form'),
	textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onFormInput, 500));

refs.form.addEventListener('input', e => {
	formData[e.target.name] = e.target.value;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
});


popTextarea();

function onFormSubmit(e){
	e.preventDefault();
	e.target.reset();
	localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e){
	const message = e.target.value;

	localStorage.setItem(STORAGE_KEY, message);
}

function popTextarea(){
	const saveMessage = localStorage.getItem(STORAGE_KEY);

	if(saveMessage){
		refs.textarea.value = saveMessage;
	}
}