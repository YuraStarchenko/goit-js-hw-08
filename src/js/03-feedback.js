import throttle from 'lodash.throttle';

const	form = document.querySelector('.feedback-form');

const formData = {}

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

popTextarea();

function onFormInput(){
		formData.email = form.email.value,
		formData.message = form.message.value,
 
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e){
	e.preventDefault();
  
  formData.email = form.email.value,
	formData.message = form.message.value,
  
  if (formData.email === '' || formData.message === '') {
    return alert(`Fill in all fields!`);
  }
  
	e.target.reset();
	localStorage.removeItem(STORAGE_KEY);
  
  console.log(formData);
}

function popTextarea(){
	const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
	if(saveMessage){
		form.value = saveMessage.email;
		form.value = saveMessage.message;
	}
}
