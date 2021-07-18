const addedFiveSeconds = '<div class="game__plus-time"><span class="game__elem-plus-time">+5</span> секунд за верный ответ</div>';
const takeAwayFiveSeconds = '<div class="game__minus-time"><span class="game__elem-minus-time">-5</span> секунд за неверный ответ</div>';
const everybodyLost = `
                    <div class="game__important-message game__message-everybody-lost">
                        <h2 class="game__title-message-everybody-lost">Игра окончена</h2>
                        <p>Так как все игроки вылетели из игры, не ответив на все вопросы, то все проиграли! Вы можете начать игру заново, нажав на кнопку "Старт игры"</p>
                    </div>
                    `;
const questionMillion = `
                    <div class="game__important-message game__question-million">
                        <h2 class="game__title-question-million">Вопрос на миллион $1000000</h2>
                        <p>Это вопрос на миллион! Если ответить на него верно, то вы сразу становитесь победителем. Хорошо подумайте, прежде чем ответить, это ваш шанс</p>
                    </div>
                        `;
const successQuestionMillion = `
                            <div class="game__message-success-question-million">
                                <h2 class="game__title-message-success-question-million">Выиграл игрок под номером <span class="game__num-player-million">2</span></h2>
                                Так как верно ответил на вопрос на "Миллион". Поздравляем!!
                            </div>
                            `;
const questionEight = `
                    <div class="game__important-message game__question-eight">
                        <h2 class="game__title-question-eight">Вопрос восьмерка <span>&infin;</span></h2>
                        <p>Это вопрос восьмерка. Если ответить на данный вопрос не верно, то игра будет проиграна всеми игроками сразу. Будьте внимательны, хорошо подумайте прежде чем дать ответ</p>
                    </div>
                    `;
const wrongAnswersQuestionEight = `
                                <div class="game__message-lost-question-eight">Вы неверно ответили на вопрос "Восьмерку", поэтому игра проиграна всеми игроками</div>
                                `;
const victoryBlock = `
                    <div class="game__important-message game__victory">
                        <h2 class="game__title-question-victory">Выиграл игрок под номером <span class="game__winner">2</span></h2>
                        <p>Отпразднуйте вашу победу в кругу друзей, вы сделали практически невозможное, ваш IQ зашкаливает и теперь вы можете по праву считать себя одним из самых умных людей на планете. Вас без экзаменов возьмут в лучшие университеты мира. Желаем удачи!</p>
                    </div>
                    `;
const messageError = `
                    <div class="message-error__modal">
                        <h2 class="message-error__title">Возникла ошибка!</h2>
                        <p class="message-error__text-message">
                            Невозможно начать игру, так как в данный момент наблюдаются проблемы в технической части приложения. Приносим свои извинения за неудобста. Попоробуйте зайти немного позже, или напишите нашему администратору на электронную почту admin@tittakbom.ru. Он обязательно все исправит.
                        </p>
                    </div>
                    `;