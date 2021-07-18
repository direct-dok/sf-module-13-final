/***
 *  ++1. Сделать чтобы когда кончаются вопросы, проверялся массив игроков и выявлялся победитель
 *  ++2. Сделать увеличение количества верных и неверных ответов
 *  ++3. Подключить статистику и оживить ее
 *  ++4. Сделать переключение режимов игры (обычная, на вылет)
 *  5. Сделать проверку на вопрос на миллион
 *  6. Сделать проверку на вопрос восьмерку
 *  ++7. Сделать проверку на количество оставшихся в игре игроков, если все игроки вылетели, но вопросы еще не закончились, то сделать конец игры, чтобы проиграли все
 *  ++8. Сделать переключение номера вопроса и номера игрока
 *  ++9. Сделать, что если у игрока три неверных ответа, он вылетает
 * 
 * 
 * 
 */

class Controller {
    tasks = null; // Список вопросов, устанавливается после нажатия на кнопку старт игры
    players = null; // Массив объектов с игроками
    currentPlayer = 0; // Номер текущего игрока в массиве
    currentQuestionArray = null; // Массив с ответами текущего вопроса

    currentQuestion = 0;

    timerPrepare = null; // Таймер подготовки игрока
    totalTimeTimer = null; // В данном свойстве будет лежать id таймера каждого игрока

    objectStatistics = null; // Объект статистики по игрокам, выводится в таблице

    millionQuestion = null; // Вопрос на миллион. Будет устанавливаться в "true", в случае если этот тип вопроса попадается и игрок отвечает на него верно, то он автоматически выигрывает
    questionEight = null; // Вопрос восьмерка. Будет устанавливаться в "true", если ответить на него не верно, то проигрывают все, если ответить верно, то игра продолжится

    crashGame = null; // Устанавливаем значение в "true", если стартует игра на вылет
    previousPlayer = null; // Записываем в данную переменную игрока, который отвечал на предыдущий вопрос

    wrongAnswersDeparture = 3; // Количество неверных ответов при котором игрок вылетает из игры

    objSettings = null;

    constructor() {

        this.startButton = document.querySelector('.control__start'); // Получаем кнопку "Старт игры"
        this.stopButton = document.querySelector('.control__end'); // Получаем кнопку "Закончить игру"

        addListener(this.startButton, 'click', this._startButtonGame, this); // Подвешиваем событие клика на кнопку "Старт игры"
        addListener(this.stopButton, 'click', this._finishTheGame, this); // Подвешиваем событие клика на кнопку "Закончить игру" 
        this.objSettings = new Settings();
        
    }

    _startButtonGame(e) { // Начинаем игру

        checkJSON(tasks); // Проверяем файл JSON на ошибки
        this.tasks = JSON.parse(tasks); // Получаем список вопросов

        // this.objSettings = new Settings(); // Создаем объект настроек
        // game__important-system-messages
        removeInnerHtmlElements('.game__important-system-messages'); 
        this.players = createPlayers(this.objSettings.playerNumber, this.objSettings.timeGame); // Генерируем игроков
        this.objectStatistics = new StatisticPlayers(this.players); // Создаем статистику игроков

        console.log(this.players);

        this._getQuestion(); // Получаем первый вопрос

        // this.objectStatistics.markWinnerPlayer(this.players[this.currentPlayer]);
        

        // console.log('Игроки - ', this.players, this.objSettings.timeGame);

        removeClassToElement('.block-question-answers', 'display-none'); // Показываем блок с вопросами
        removeClassToElement('.control__current-player', 'display-none'); // Показываем блок с ход игрока
        removeClassToElement('.control__current-question', 'display-none'); // Показываем блок с сколько вопросов пройдено

        this.objSettings.gameTimeElem.setAttribute('disabled', null); // Дизейблим ползунок установки времени
        this.objSettings.numberOfPlayersElem.setAttribute('disabled', null); // Дизейблим инпут установки количества игроков

        this.startButton.classList.add('display-none'); // Скрываем кнопку "Старт игры"
        this.stopButton.classList.remove('display-none'); // Показываем кнопку "Закончить игру" 

    }

    _finishTheGame() { // Останавливаем игру. Возвращаем все параметры в исходное состояние

        this.startButton.classList.remove('display-none'); // Показываем кнопку "Старт игры"
        this.stopButton.classList.add('display-none'); // Скрываем кнопку "Закончить игру" 

        addClassToElement('.block-question-answers', 'display-none'); // Скрываем блок с вопросами
        addClassToElement('.control__current-player', 'display-none'); // Скрываем блок с ход игрока
        addClassToElement('.control__current-question', 'display-none'); // Скрываем блок с сколько вопросов пройдено

        addTextToElement('.game__minuts', '00'); // 
        addTextToElement('.game__seconds', '00');

        this.objSettings.gameTimeElem.removeAttribute('disabled'); // Удаляем атрибут 'disabled' с ползунка установки времени
        this.objSettings.numberOfPlayersElem.removeAttribute('disabled'); // Удаляем атрибут 'disabled' с инпута установки количества игроков

        this.objSettings = null;
        this.objSettings = new Settings();

        this.players = null; // Удаляем текущих игроков
        this.currentPlayer = 0;

        this.crashGame = null; // Устанавливаем значение в "true", если стартует игра на вылет
        this.previousPlayer = null; // Записываем в данную переменную игрока, который отвечал на предыдущий вопрос
        this.wrongAnswersDeparture = 3; // Количество неверных ответов при котором игрок вылетает из игры


        clearInterval(this.totalTimeTimer); // Убиваем таймер
    }

    _getQuestion() { // Метод для выборки одного вопроса из массива

        if(this.tasks.length == 0 && !this.crashGame) {
            clearInterval(this.totalTimeTimer); // Удаляем текущий интервал таймера
            console.log('Вопросы закончились, надо что то делать');
            console.log('Если вопросы закончились, то предлагаю выбрать победителя и вывести список игроков - ', this.players);
            this._determineWinner(this.players); // Определяем победителя
        } else if (this.crashGame && this.players.length == 1) {
            // alert('И игру пинальти выиграл игрок', this.players[0]);
            removeInnerHtmlElements('.table__crash-game-message'); // Зачищаем весь код в элементе
            this._determineWinner(this.players); // Определяем победителя
            this._finishTheGame();
        } else if (this.crashGame && this.tasks.length == 0 ) {
            console.log('Вопросы для игры на вылет кончились, надо что то делать');
            console.log('А вообще выиграл игрок который отвечал на предыдущий вопрос - ', this.previousPlayer)
            removeInnerHtmlElements('.table__crash-game-message'); // Зачищаем весь код в элементе
            
            this.players.forEach((el) => { // Удаляем остальных игроков из массива игроков и вычеркиваем из статистики, оставляем только выигравшего игрока
                if(el.id != this.previousPlayer.id) {
                    this.objectStatistics.deletePlayerFromStatistics(el.id);
                }
            });
            this.objectStatistics.markWinnerPlayer(this.previousPlayer.id);

            // victoryBlock
            addHtmlCodeToElement('.game__important-system-messages', victoryBlock); // Вывводим сообщение о победителе
            addTextToElement('.game__winner', this.previousPlayer.id + 1); // Устанавливаем номер выигравшего игрока

            this._finishTheGame();
        }
         else if(this.players.length == 0) {
            clearInterval(this.totalTimeTimer); // Удаляем текущий интервал таймера
            console.log('Все игроки вылетели, все проиграли');
            addHtmlCodeToElement('.game__important-system-messages', everybodyLost);
            this._finishTheGame();
        } else {

            removeInnerHtmlElements('.game__important-system-messages'); // Зачищаем код в блоке для вывода сообщений

            this.objectStatistics.willMarkActivePlayer(this.players[this.currentPlayer].id); // Отмечаем активного игрока в таблице

            this.currentQuestion++; // Увеличиваем текущий вопрос на 1 (это просто для статистики, для вывода это цифры на экран)
    
            this._displayNmberCurrentPlayer(); // Выводим на странице номер игрока
            this._displayQuestionNumber(); // Выводим на странице номер текущего вопроса

            this._timer(); // Запускаем таймер
            let randNumber = randomIntNumber(this.tasks.length - 1, 0); // Получаем рандомный номер вопроса
            const objCurrentQuestion = this.tasks[randNumber]; // Получаем объект текущего вопроса
            this.tasks.splice(randNumber, 1); // Удаляем вопрос из массива вопросов
            const currentQuestion = objCurrentQuestion.question; // Получаем текст текущего вопроса
            const listAnswers = this._getListOfAnswers(objCurrentQuestion); // Получаем массив объектов ответов (массив приходит разной длины, от 2 до 5 элементов)
            this._renderQuestion(currentQuestion, listAnswers); // Рендерим вопрос и ответы
        }

    }

    _determineWinner(players) { // Метод определения победителя в игре. Также определяет есть ли нечейные результаты и если они есть, запускает игру на вылет

        console.log(players);
    
        let sameValues = []; // Массив для id игроков, у которых одинаковое количество неверных ответов
        let playersSameValues = []; // Массив объектов игроков, у которых одинаковое количество неверных ответов
        const winners = players.sort(tw); // Массив отсортированный по убыванию количества неверных ответов
        
        
        function tw(a, b) {
        
            if(a.wrongAnswers - b.wrongAnswers == 0) { // Проверяем есть ли одинаковые значения неверных ответов и если да, то добавляем id игрока в массив, если одинаковых значений нет, то пропускаем данную конструкцию
                
                if(!sameValues.includes(a.id)) {
                    sameValues.push(a.id);
                    playersSameValues.push(a);
                } 
    
                if(!sameValues.includes(b.id)) {
                    sameValues.push(b.id);
                    playersSameValues.push(b);
                } 
    
            }
    
            return a.wrongAnswers - b.wrongAnswers;
        
        }
        
        if(!sameValues.length || (winners[0].wrongAnswers < winners[1].wrongAnswers)) {
            console.log('Выиграл игрок - ', winners[0].id);
            const winnerId = winners[0].id;

            this.players.forEach((el) => { // Удаляем остальных игроков из массива игроков и вычеркиваем из статистики, оставляем только выигравшего игрока
                if(el.id != winnerId) {
                    this.objectStatistics.deletePlayerFromStatistics(el.id);
                }
            });

            this.objectStatistics.markWinnerPlayer(winnerId);
            // Добавить сообщение которое выводит сообещение о победителе
            addHtmlCodeToElement('.game__important-system-messages', victoryBlock);
            addTextToElement('.game__winner', winnerId + 1);
            // Завершить игру
            this._finishTheGame();

        } else { // Здесь начинаем стартовать игру на вылет, здесь пишем нужную логику
    
            // console.log('Массив объектов - ', playersSameValues);
            const minWrongAnswers = playersSameValues[playersSameValues.length - 1].wrongAnswers;
            const filterPlayer = playersSameValues.filter(el => el.wrongAnswers == minWrongAnswers);
            // console.log('эти игроки будут играть на вылет', filterPlayer);
            // console.log('Это старые игроки - ', this.players);

            // Началась игра на вылет!!
            this.crashGame = true;
            this.currentPlayer = 0;
            addTextToElement('.table__crash-game-message', 'Началась игра на вылет!!');
            this.wrongAnswersDeparture = 1; // Устанавливаем предельно допустимое количество неверных ответов
            this.players = filterPlayer; // Ставим массив игроков для игры на вылет

            this.players.forEach(el => el.wrongAnswers = 0); // Обнуляем количество неверных ответов с прошлой игры
            
            this.tasks = JSON.parse(tasksListCrashGame); // Загружаем новый список вопросов
            this._getQuestion(); // Загружаем очередной вопрос из нового списка
            console.log('Новый список вопросов для игры на вылет - ', this.tasks);
            console.log(this.players);
    
        }
    
    }

    _displayNmberCurrentPlayer() { // Переключение номера игрока на странице
        if(!this.players.length == 0) {
            addTextToElement('.control__player-number', this.players[this.currentPlayer].id + 1);
        }
    }

    _displayQuestionNumber() {
        if(!this.tasks == 0) {
            addTextToElement('.control__number-question', this.currentQuestion);
        }
    }


    _getListOfAnswers(objQuestion) { // Метод для получения рандомного количества ответов на вопросы (от 2 до 5), среди которых есть один верный 
        let arrQuest = [];
        
        this.millionQuestion = null; //  Присвоим вопросу на миллион значение null, чтобы перезаписать значение true, если оно было установлено
        this.questionEight = null; // Присвоим вопросу восьмерке значение null, чтобы перезаписать значение true, если оно было установлено

        console.log('objQuestion - ', objQuestion);

        if(objQuestion.million) {
            this.millionQuestion = true;
            addHtmlCodeToElement('.game__important-system-messages', questionMillion);
        } 

        if(objQuestion.questionEight) {
            this.questionEight = true;
            addHtmlCodeToElement('.game__important-system-messages', questionEight);
        }

        // Если вопрос на миллион, то устанавливаем в свойство "millionQuestion" значение "true" и проверяем результат
        // Если вопрос на восьмерка, то устанавливаем в свойство "questionEight" значение "true" и проверяем результат
        
        const randNumQuest = randomIntNumber(4, 1);
        arrQuest.push(objQuestion.answer1);

        for(let i = 1, numQues = 2; i <= randNumQuest; i++, numQues++) {
            arrQuest.push(objQuestion[`answer${numQues}`]);
        }

        arrQuest.sort(sortLengthString); // Сортируем массив по длине строки ответа, получаем случайное расположение вопросов
        this.currentQuestionArray = arrQuest; // Присваиваем текущий массив с ответами, для проверки правильного варианта ответа
        return arrQuest; // Возвращаем отсротированный массив с объектами ответов
    }

    _renderQuestion(quest, listAnswers) { // Метод для рендера вопроса и ответов
        removeInnerHtmlElements('.question__text'); // Зачищаем текст предыдущего вопроса в элементе
        addTextToElement('.question__text', quest); // Добавляем текст текущего вопроса в элемент

        const htmlCode = this._generateHtmlCodeAnswers(listAnswers); // Генерируем HTML код ответов на вопросы
        removeInnerHtmlElements('.options__items'); // Зачищаем код предыдущих ответов в элементе
        addHtmlCodeToElement('.options__items', htmlCode); // Вставляем код вопросов в указанный элемент

        
    }

    _checkResultAnswer(e) { // Метод проверки результата ответа. Этот метод срабатывает последним в цепочке и в нем происходит перезапуск цикла построения новых вопросов и переключения игроков
        // console.log('Результат ответа - ', this.currentQuestionArray[e.target.dataset.idquest].result);
        this.previousPlayer = this.players[this.currentPlayer]; // Записываем в переменную предыдущего игрока и сохраняем его до следующей итерации
        let currentPlayer = this.players[this.currentPlayer];
        if(this.currentQuestionArray[e.target.dataset.idquest].result) { // Проверяем результат ответа (true / false)

            console.log("Верный ответ на вопрос");
            if(this.millionQuestion) { // Если пользователь верно отвечает на вопрос на миллон, то он автоматически выигрывает
                console.log("Верный ответ на вопрос на миллион, Вы выиграли", this.players[this.currentPlayer]);
                removeInnerHtmlElements('.game__important-system-messages'); // Зачищаем код в элементе для вывода сообщений
                addHtmlCodeToElement('.game__important-system-messages', successQuestionMillion); // Добавляем сообщение о том, что игра проиграна по причине не верного ответа на вопрос восьмерку
                this.objectStatistics.deleteMarkActivePlayer();

                this.players.forEach((el) => { // Удаляем остальных игроков из массива игроков и вычеркиваем из статистики, оставляем только выигравшего игрока
                    if(el.id != this.players[this.currentPlayer].id) {
                        this.objectStatistics.deletePlayerFromStatistics(el.id);
                    }
                });

                addTextToElement('.game__num-player-million', this.players[this.currentPlayer].id + 1);
                this.objectStatistics.markWinnerPlayer(this.players[this.currentPlayer].id);

                this._finishTheGame();
                return false;
            }

            setResponseStatus(true); // Устанавливаем статус верного ответа
            console.log(addedFiveSeconds);
            addHtmlCodeToElement('.game__message', addedFiveSeconds); // Показываем сообщение, что к времени добавлено 5 секунд за верный ответ
            currentPlayer.timer += 5; // Добавляем игроку 5 секунд за верный ответ
            currentPlayer.correctAnswers++; // Увеличиваем количество верных ответов на 1 
            setTimeout(() => removeInnerHtmlElements('.game__message'), 3000); // Удаляем сообщение из элемента
            clearInterval(this.totalTimeTimer); // Удаляем таймер текущего игрока
            this.objectStatistics.addCorrectAnswer(this.players[this.currentPlayer].id); // Увеличиваем статистику верных ответов игрока на странице

            this._checkingNumberIncorrectAnswers();
            this._checkPlayersPosition(); // Проверяем 
            this._getQuestion(); // Получаем очередной вопрос

        } else {

            if(this.questionEight) { // Если ответ не верный и текущий вопрос является восьмеркой, то проигрывают все игроки
                
                // wrongAnswersQuestionEight
                removeInnerHtmlElements('.game__important-system-messages'); // Зачищаем код в элементе для вывода сообщений
                addHtmlCodeToElement('.game__important-system-messages', wrongAnswersQuestionEight); // Добавляем сообщение о том, что игра проиграна по причине не верного ответа на вопрос восьмерку
                this.objectStatistics.deleteMarkActivePlayer();
                this.players.forEach(el => {
                    this.objectStatistics.deletePlayerFromStatistics(el.id);
                });

                this._finishTheGame();
                return false;
            }

            setResponseStatus(false); // Устанавливаем статус неверного ответа
            addHtmlCodeToElement('.game__message', takeAwayFiveSeconds); // Показываем сообщение, что к из времени игрока отнято 5 секунд за неверный ответ
            currentPlayer.timer -= 5; // Отнимаем у игрока 5 секунд за неверный ответ
            currentPlayer.wrongAnswers++; // Увеличиваем количество неверных ответов на 1 
            setTimeout(() => removeInnerHtmlElements('.game__message'), 3000); // Удаляем сообщение из элемента
            clearInterval(this.totalTimeTimer); // Удаляем таймер текущего игрока
            this.objectStatistics.addWrongAnswer(this.players[this.currentPlayer].id); // Увеличиваем статистику неверных ответов игрока на странице
            console.log('delete wrong')

            this._checkingNumberIncorrectAnswers();
            this._checkPlayersPosition(); // Проверяем 
            this._getQuestion(); // Получаем очередной вопрос

        }

        // this._checkingNumberIncorrectAnswers();
        // this._checkPlayersPosition(); // Проверяем 
        // this._getQuestion(); // Получаем очередной вопрос
        
    }

    _checkPlayersPosition() { // Метод для проверки текущей позиции игрока и увеличения позиции, если игрок не последний в списке
        // console.log('_checkPlayersPosition() - ', this.currentPlayer);
        if(this.currentPlayer == this.players.length - 1) {
            this.currentPlayer = 0;
        } else {
            // console.log('Еще не последний игрок в списке');
            this.currentPlayer++;
        }
        this.objectStatistics.deleteMarkActivePlayer(); // Удаляем маркер активного игрока из таблицы статистики 
    }

    _checkingNumberIncorrectAnswers() { // Проверяем количество неверных ответов у игрока
        if(this.players[this.currentPlayer].wrongAnswers == this.wrongAnswersDeparture) {
            console.log('Вылетает игрок - ', this.players[this.currentPlayer]);
            this._deleteCurrentPlayer();
            clearInterval(this.totalTimeTimer); // Удаляем текущий интервал таймера
        }
    }

    _generateHtmlCodeAnswers(listAnswers) { // Генерирует HTML код вопросов

        let htmlResponseCode = '';

        for(let i = 0, char = 97; i < listAnswers.length; i++, char++) {
            // console.log(String.fromCharCode(char), listAnswers[i]);

            htmlResponseCode += `
                <li class="options__item" data-idquest="${i}">
                    <span>${ String.fromCharCode(char) }.</span>
                    ${ listAnswers[i].value }
                </li>
            `;
        }

        return htmlResponseCode;
    }

    _timer() {
        
        const objCurrentPlayer = this.players[this.currentPlayer]; // Получаем объект текущего игрока

        if(this.crashGame) {
            objCurrentPlayer.timer = 30;
        }

        console.log(objCurrentPlayer);
        let preparationTime = 0; // Время на подготовку

        this.timerPrepare = setInterval(() => {
            if(preparationTime > 0) {
                addTextToElement('.game__tick-second', preparationTime--);
            } else {
                addListenerOnElems('.options__item', 'click', this._checkResultAnswer, this); // Подвешиваем событие клика на ответы
                clearInterval(this.timerPrepare); // Зачищаем интервал времени на подготовку
                removeInnerHtmlElements('.game__tick-second'); // Удаляем код из таймера подготовки

                this.totalTimeTimer = setInterval(() => {
                    setTime(objCurrentPlayer.timer);
                    objCurrentPlayer.timer--;

                    if(objCurrentPlayer.timer < 0) {
                        console.log('Игрок - ', objCurrentPlayer, ' выбыл', this.currentPlayer);
                        clearInterval(this.totalTimeTimer); // Удаляем текущий интервал таймера
                        this._deleteCurrentPlayer(); // Удаляем игрока из массива игроков
                        this._checkPlayersPosition(); // Проверяем позицию игрока
                        this._getQuestion(); // Получаем новый вопрос
                    }

                }, 1000);
            }
        }, 1000);

        // this.timerPrepare 
        // this.totalTimeTimer
    }

    _deleteCurrentPlayer() { // Метод для удаления текущего игрока

        this.objectStatistics.deletePlayerFromStatistics(this.players[this.currentPlayer].id);
        this.players.splice(this.currentPlayer, 1); // Удаляем игрока из массива игроков
        this.currentPlayer--;
    
    }

}

