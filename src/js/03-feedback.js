import '../css/common.css';
import '../css/03-feedback.css';
// 1) Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт
//    з полями email і message, у яких зберігай поточні значення полів форми.
//    Нехай ключем для сховища буде рядок "feedback-form-state".

const refs = {
	form: document.querySelector('.feedback-form'),
	textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(e){
	e.preventDefault();
	e.current.reset();
}

function onTextareaInput(e){
	const message = e.currentTarget.value;
	localStorage.setItem("feedback-form-state", message);
}

function popTextarea(){

}