class StatisticPlayers {

    bodyTable = document.querySelector('.table__body');
    
    constructor(playersArr) {
        this.playersArr = playersArr;
        this.generateTable(this.playersArr);
    }

    generateTable(arrPlayers) { // Генерируем таблицу со статистикой игроков

        // console.log(this.playersArr);
        document.querySelector('.table__body').innerHTML = '';
        document.querySelector('.table').classList.remove('display-none');
        let htmlCodePlayers = '';


        arrPlayers.forEach(el => {

            // console.log('el.current', el.current, el.id)
{/* <tr class="table__user-line ${el.current ? ' table__current-player' : false} ${el.playerStatus ? false : 'table__dropped-out'}" data-iduser="${el.id}"></tr> */}
            htmlCodePlayers += `
                <tr class="table__user-line user-${el.id}" data-iduser="${el.id}">
                    <td class="table__player-turn"><div class="table__player-label"></div></td>
                    <td class="table__user-id">${el.id + 1}</td>
                    <td class="table__answer-true">${el.correctAnswers}</td>
                    <td class="table__answer-false">${el.wrongAnswers}</td>
                    <td class="table__status-player">В игре</td>
                </tr>
            `;
        });

        this.bodyTable.innerHTML = htmlCodePlayers;

    }

    deletePlayerFromStatistics(idPlayer) { // Вычеркиваем игрока из таблицы статистики в случае если он выбыл

        const allUserLineTable = document.querySelectorAll('.table__user-line');

        allUserLineTable.forEach(el => {

            if(idPlayer == el.dataset.iduser) {
                console.log(el)
                el.classList.add('table__dropped-out');
                el.querySelector('.table__status-player').innerHTML = 'Выбыл';
            }

        });

    }

    willMarkActivePlayer(idPlayer) { // Отмечаем активного игрока в таблице
        console.log('Ход игрока по статистике', idPlayer);
        console.log('Код игрока в таблице', document.querySelector(`.user-${idPlayer}`));
        document.querySelector(`.user-${idPlayer}`).classList.add('table__current-player');
        
    }

    markWinnerPlayer(idPlayer) { // Устанавливаем игрока победителя

        const lineTablePlayer = document.querySelector(`.user-${idPlayer}`);
        lineTablePlayer.classList.add('table__winner-player');
        lineTablePlayer.querySelector('.table__player-turn').insertAdjacentHTML('beforeend', `<img src="./img/star.png" alt="Star winner" class="table__star-winner">`);
        lineTablePlayer.querySelector('.table__status-player').innerHTML = 'Победитель';

    }

    deleteMarkActivePlayer() { // Удаляем маркер активного игрока из таблицы
        document.querySelector('.table__current-player').classList.remove('table__current-player');
    }

    addCorrectAnswer(idPlayer) { // Увеличить количество верных ответов
        const trueAnswerElem = document.querySelector(`.user-${idPlayer}`).querySelector('.table__answer-true');
        const resultTrueAnswer = +trueAnswerElem.innerText + 1;
        trueAnswerElem.innerText = resultTrueAnswer;
    }

    addWrongAnswer(idPlayer) { // Увеличить количество неверных ответов
        const trueAnswerElem = document.querySelector(`.user-${idPlayer}`).querySelector('.table__answer-false');
        const resultTrueAnswer = +trueAnswerElem.innerText + 1;
        trueAnswerElem.innerText = resultTrueAnswer;
    }

}