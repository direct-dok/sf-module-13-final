const createPlayers = (numberOfPlayers, time) => { // Функция для создания игроков
    let players = [];

    for(let i = 0; i < numberOfPlayers; i++) {
        players.push(
            {
                id: i,
                correctAnswers: 0,
                wrongAnswers: 0,
                timer: time
            }
        )
    }

    return players;
}

const addListener = (elemSelector, action, callBack, context) => { // Функция для подвешивания событий на 1 элемент
    elemSelector.addEventListener(action, callBack.bind(context));
}

const addListenerOnElems = (elemSelector, action, callBack, context) => { // Функция для подвешивания событий на группу элементов
    const elems = document.querySelectorAll(elemSelector);
    elems.forEach(el => el.addEventListener(action, callBack.bind(context)));
}

const removeClassToElement = (selectorElem, className) => { // Функция для удаления класса у любого элемента
    document.querySelector(selectorElem).classList.remove(className);
}

const addClassToElement = (selectorElem, className) => { // Функция для добавления класса к любому элементу
    document.querySelector(selectorElem).classList.add(className);
}

const randomIntNumber = (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min); // Получаем случайный номер

const sortLengthString = (one, two) => { // Вспомогательная функция для сортировки по длине строки
    return one.value.length - two.value.length;
}

const removeInnerHtmlElements = (selectorElem) => { // Зачищаем весь код в элементе
    document.querySelector(selectorElem).innerHTML = '';
}

const addTextToElement = (selectorElem, text) => { // Добавляем текст в элемент
    document.querySelector(selectorElem).innerText = text;
}

const addHtmlCodeToElement = (selectorElem, HtmlCode) => { // Добавляем HTML код в указанный элемент
    document.querySelector(selectorElem).innerHTML = HtmlCode;
}

const setResponseStatus = (bool) => { // Метод устанавливающий статус ответа "Верно", делает элемент зеленым
    
    removeClassToElement('.game__response-status', 'game__response-status--success');
    removeClassToElement('.game__response-status', 'game__response-status--errror');

    if(bool) {
        addTextToElement('.game__response-status', 'Верно');
        addClassToElement('.game__response-status', 'game__response-status--success');
    } else {
        addTextToElement('.game__response-status', 'Не верно');
        addClassToElement('.game__response-status', 'game__response-status--errror');
    }
    
}

const setTime = (timeNumber) => { // Функция для установки и рендера времени таймера
    
    const [minutes, seconds] = [(timeNumber / 60) >= 1 ? Math.floor(timeNumber / 60) : 0 , timeNumber % 60];
    document.querySelector('.game__minuts').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.game__seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;

}

checkJSON = (questions) => { // Проверяем файл JSON на ошибки

    try {
        JSON.parse(questions);
      } catch(e) {
        addHtmlCodeToElement('.add-overlay', '<div class="overlay"></div>');
        addHtmlCodeToElement('.message-error', messageError);
        console.warn(e.message);
        throw new Error('Ошибки в JSON файле');
      }

      if(JSON.parse(questions).length < 30) {
        addHtmlCodeToElement('.add-overlay', '<div class="overlay"></div>');
        addHtmlCodeToElement('.message-error', messageError);
        throw new Error('В JSON файле, менее 30 вопросов');
      }


      const checkOneCorrectAnswer = () => {

        JSON.parse(questions).forEach((el) => {

            let allAnswers = 0;

            for(let elem in el) {
                if(elem != 'question' && elem != 'million' && elem != 'questionEight') {
                    if(el[elem].result) {
                        allAnswers++;
                    }
                }
            }

            if(allAnswers > 1) {
                addHtmlCodeToElement('.add-overlay', '<div class="overlay"></div>');
                addHtmlCodeToElement('.message-error', messageError);
                throw new Error('В одном из вопросов более 1 верного ответа');   
            }

        });
      };
      checkOneCorrectAnswer();

      const checkThereQuestion = () => {

        JSON.parse(questions).forEach((el) => {
            if(!el.question || el.question == '') {
                addHtmlCodeToElement('.add-overlay', '<div class="overlay"></div>');
                addHtmlCodeToElement('.message-error', messageError);
                throw new Error('В одном из вопросов отсутствует блок с вопросом или отсутствует текст вопроса');   
            }
        });

      }
      checkThereQuestion();

      const checkNotjEmptyQuestionsAnswers = () => {

        JSON.parse(questions).forEach(el => {

            let empty = 0;

            for(let elem in el) {
                
                if(elem == 'question') {
                    (el[elem] == '') ? empty++ : false;
                }

                if(elem != 'question' && elem != 'million' && elem != 'questionEight') {
                    (el[elem].value == '') ? empty++ : false;
                }
            }

            if(empty) {
                addHtmlCodeToElement('.add-overlay', '<div class="overlay"></div>');
                addHtmlCodeToElement('.message-error', messageError);
                throw new Error('В одном из вопросов или ответов, есть пустая строка, проверьте вопросы и ответы');   
            }
        })

      }
      checkNotjEmptyQuestionsAnswers();
}