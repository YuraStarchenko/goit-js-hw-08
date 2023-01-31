import throttle from 'lodash.throttle';

const refs = {
	form: document.querySelector('.feedback-form'),
	email: document.querySelector('[type="email"]'),
	textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

popTextarea();

function onFormInput(){
	const formData = {
		email: refs.form.email.value,
		message: refs.form.message.value,
	};
  
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e){
	e.preventDefault();
  
  const SubmitJSON = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(SubmitJSON);
  
	e.target.reset();
	localStorage.removeItem(STORAGE_KEY);
}

function popTextarea(){
	const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
	if(saveMessage){
		refs.email.value = saveMessage.email;
		refs.textarea.value = saveMessage.message;
	}
}
