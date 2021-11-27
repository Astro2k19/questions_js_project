import './styles.css';
import {isValid, createModal} from './utils';
import { Question } from './question';
import { getAuthForm, authWithEmailAndPassword } from './auth';

const form = document.getElementById('form');
const input = form.querySelector('#question-input');
const submite = form.querySelector('.submit-btn');
const modalBtn = document.getElementById('modal-btn');

form.addEventListener('submit', submitFormHandler);
modalBtn.addEventListener('click', openModal)
input.addEventListener('input', ()=>{
    submite.disabled = !isValid(input.value);
})

window.addEventListener('load', Question.renderList)

function submitFormHandler(event) {
    event.preventDefault();
    if(isValid(input.value)){
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }

        submite.disabled = true;

        Question.create(question)
            .then(() => {
                input.value = ''
                submite.disabled = false;
                input.className = '';
            })    
    }
}

function openModal() {
    createModal('Авторизация', getAuthForm());
    document.getElementById('auth-form').addEventListener('submit', authFormHandler);
}

function authFormHandler(event) {
    event.preventDefault();

    const email = event.target.querySelector('#email').value;
    const password = event.target.querySelector('#password').value;
    const submiteBtn = event.target.querySelector('#enter-btn');

        submiteBtn.disabled = true;

    authWithEmailAndPassword(email, password)
        .then(Question.fetch)
        .then(renderContentAfterAuth)
        .then(() => submiteBtn.disabled = false)
}

function renderContentAfterAuth(content){
    if(typeof content === 'string'){
        createModal('Ошибка', content)
    }else{
        createModal('Список вопросов', Question.htmlToList(content))
    }
}
