let contr = new Controller(); // Запускаем игру

// checkJSON = (questions) => { // Проверяем файл JSON на ошибки

//     try {
//         JSON.parse(questions);
//       } catch(e) {
//         addHtmlCodeToElement('.add-overlay', '<div class="overlay"></div>');
//         addHtmlCodeToElement('.message-error', messageError);
//         console.warn(e.message);
//         throw new Error('Ошибки в JSON файле');
//       }

//       if(JSON.parse(questions).length < 30) {
//         addHtmlCodeToElement('.add-overlay', '<div class="overlay"></div>');
//         addHtmlCodeToElement('.message-error', messageError);
//         throw new Error('В JSON файле, менее 30 вопросов');
//       }


//       const checkOneCorrectAnswer = () => {

//         JSON.parse(questions).forEach((el) => {

//             let allAnswers = 0;

//             for(let elem in el) {
//                 if(elem != 'question' && elem != 'million' && elem != 'questionEight') {
//                     if(el[elem].result) {
//                         allAnswers++;
//                     }
//                 }
//             }

//             if(allAnswers > 1) {
//                 addHtmlCodeToElement('.add-overlay', '<div class="overlay"></div>');
//                 addHtmlCodeToElement('.message-error', messageError);
//                 throw new Error('В одном из вопросов более 1 верного ответа');   
//             }

//         });
//       };
//       checkOneCorrectAnswer();

//       const checkThereQuestion = () => {

//         JSON.parse(questions).forEach((el) => {
//             if(!el.question || el.question == '') {
//                 addHtmlCodeToElement('.add-overlay', '<div class="overlay"></div>');
//                 addHtmlCodeToElement('.message-error', messageError);
//                 throw new Error('В одном из вопросов отсутствует блок с вопросом или отсутствует текст вопроса');   
//             }
//         });

//       }
//       checkThereQuestion();

//       const checkNotjEmptyQuestionsAnswers = () => {

//         JSON.parse(questions).forEach(el => {

//             let empty = 0;

//             for(let elem in el) {
                
//                 if(elem == 'question') {
//                     (el[elem] == '') ? empty++ : false;
//                 }

//                 if(elem != 'question' && elem != 'million' && elem != 'questionEight') {
//                     (el[elem].value == '') ? empty++ : false;
//                 }
//             }

//             if(empty) {
//                 addHtmlCodeToElement('.add-overlay', '<div class="overlay"></div>');
//                 addHtmlCodeToElement('.message-error', messageError);
//                 throw new Error('В одном из вопросов или ответов, есть пустая строка, проверьте вопросы и ответы');   
//             }
//         })

//       }
//       checkNotjEmptyQuestionsAnswers();
// }

// checkJSON(tasks);
// tasks
// messageError