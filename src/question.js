export class Question{
    static create(question){
        return fetch('https://question-project-app-default-rtdb.europe-west1.firebasedatabase.app/questions.json', {
            method:'POST',
            body: JSON.stringify(question),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(questions => question)
        .then(addToLS)
        .then(Question.renderList)
    }

    static htmlToList(questions){
        return questions.length ? `<ol>${questions.map(q =>`<li>${q.text}</li>`).join('')}</ol>` : `<p>У вас еще нету вопросов!</p>`
    }

    static fetch(tocken){
        if(!tocken){
            return Promise.resolve('<p>У вас нету токена доступа!</p>')
        }
        return fetch(`https://question-project-app-default-rtdb.europe-west1.firebasedatabase.app/questions.json?auth=${tocken}`)
            .then(response => response.json())
            .then(response =>{
                if(response && response.error){
                    return `<p> Ошибка ${response.error} </p>`
                }
                return response ? Object.keys(response).map(key =>{
                   return  {
                        ...response[key],
                        id:key
                    }
                })
                : [];

            })
    }

    static renderList(){
        let questions = getQuestionsFromLS();
        const list = document.querySelector('.list');
        const html = questions.length
        ? questions.map(toCard).join('')
        : `<div class="mui--text-headline">Вы не задали никаких вопрос!</div>`
        list.innerHTML = html;
    }
}

function addToLS(question){
    const all = getQuestionsFromLS();
    all.push(question);
    localStorage.setItem('questions', JSON.stringify(all));
}

function getQuestionsFromLS() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}

function toCard(question) {
    return `
            <div class="mui--text-black-54">
                ${new Date(question.date).toLocaleDateString()}
                ${new Date(question.date).toLocaleTimeString()}
            </div>
            <div>
                ${question.text}
            </div>
            <br>
    `
}