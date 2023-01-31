import throttle from 'lodash.throttle';

const refs = {
	form: document.querySelector('.feedback-form'),
	email: document.querySelector('[type="email"]'),
	textarea: document.querySelector('textarea'),
};

const formData = {}

const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

popTextarea();

function onFormInput(){
		formData.email = refs.form.email.value,
		formData.message = refs.form.message.value,
 
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e){
	e.preventDefault();
  
  formData.email = refs.form.email.value,
	formData.message = refs.form.message.value,
  
  if(formData.email === '' || formData.message === '') {
    return alert(`Fill in all fields!`);
  }
  
	e.target.reset();
	localStorage.removeItem(STORAGE_KEY);
  
  console.log(formData);
}

function popTextarea(){
	const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
	if(saveMessage){
		refs.email.value = saveMessage.email;
		refs.textarea.value = saveMessage.message;
	}
}
