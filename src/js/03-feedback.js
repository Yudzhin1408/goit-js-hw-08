
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea')
};


refs.form.addEventListener('submit', onFormSumbmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea()

function onFormSumbmit(evt) { 
    evt.preventDefault();
    console.log('asd');
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};



function onTextareaInput(evt) { 
    const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, message);
    

};


function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
    

    
  
}
