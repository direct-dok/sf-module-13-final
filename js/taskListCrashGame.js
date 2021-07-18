const tasksListCrashGame = `
    [
        {
            "question": "Чем был колобок: пряником или пирогом?",
            "answer1": { "result": true, "value": "Пряником" },
            "answer2": { "result": false, "value": "Пирогом" }, 
            "answer3": { "result": false, "value": "Запеканкой" },
            "answer4": { "result": false, "value": "Шаурмой" },
            "answer5": { "result": false, "value": "Сосиской в тесте" }
        },
        {
            "question": "Как звали героиню, которая получила свое прозвище благодаря головному убору?",
            "answer1": { "result": true, "value": "Красная шапочка" },
            "answer2": { "result": false, "value": "Золушка" }, 
            "answer3": { "result": false, "value": "Баба яга" },
            "answer4": { "result": false, "value": "Царевна лягушка" },
            "answer5": { "result": false, "value": "Снежная королева" }
        },
        {
            "question": "Как прозвали героя, который очень любил носить обувь?",
            "answer1": { "result": true, "value": "Кот в сапогах" },
            "answer2": { "result": false, "value": "Кощей бессмертный" }, 
            "answer3": { "result": false, "value": "Иван дурак" },
            "answer4": { "result": false, "value": "Золушка" },
            "answer5": { "result": false, "value": "Василиса премудрая" }
        },
        {
            "question": "Что в JS обозначает следующая конструкция [1,2,3,4]",
            "answer1": { "result": true, "value": "Массив" },
            "answer2": { "result": false, "value": "Объект" }, 
            "answer3": { "result": false, "value": "Переменная" },
            "answer4": { "result": false, "value": "Набор цифр" },
            "answer5": { "result": false, "value": "Контейнер" }
        }
    ]
`;

// {
//     "question": "Чем был колобок: пряником или пирогом?",
//     "answer1": { "result": true, "value": "Пряником" },
//     "answer2": { "result": false, "value": "Пирогом" }, 
//     "answer3": { "result": false, "value": "Запеканкой" },
//     "answer4": { "result": false, "value": "Шаурмой" },
//     "answer5": { "result": false, "value": "Сосиской в тесте" }
// },
// {
//     "question": "Как звали героиню, которая получила свое прозвище благодаря головному убору?",
//     "answer1": { "result": true, "value": "Красная шапочка" },
//     "answer2": { "result": false, "value": "Золушка" }, 
//     "answer3": { "result": false, "value": "Баба яга" },
//     "answer4": { "result": false, "value": "Царевна лягушка" },
//     "answer5": { "result": false, "value": "Снежная королева" }
// },
// {
//     "question": "Как прозвали героя, который очень любил носить обувь?",
//     "answer1": { "result": true, "value": "Кот в сапогах" },
//     "answer2": { "result": false, "value": "Кощей бессмертный" }, 
//     "answer3": { "result": false, "value": "Иван дурак" },
//     "answer4": { "result": false, "value": "Золушка" },
//     "answer5": { "result": false, "value": "Василиса премудрая" }
// },
// {
//     "question": "Что в JS обозначает следующая конструкция [1,2,3,4]",
//     "answer1": { "result": true, "value": "Массив" },
//     "answer2": { "result": false, "value": "Объект" }, 
//     "answer3": { "result": false, "value": "Переменная" },
//     "answer4": { "result": false, "value": "Набор цифр" },
//     "answer5": { "result": false, "value": "Контейнер" }
// },
// {
//     "question": "Из чего пчелы делают мед?",
//     "answer1": { "result": true, "value": "Из цветочного нектара" },
//     "answer2": { "result": false, "value": "Из шоколада" }, 
//     "answer3": { "result": false, "value": "Из воздуха" },
//     "answer4": { "result": false, "value": "Из хороших советов" },
//     "answer5": { "result": false, "value": "Из ягод" }
// },
// {
//     "question": "Где раки зимуют?",
//     "answer1": { "result": true, "value": "В подводных норах пресных водоемов" },
//     "answer2": { "result": false, "value": "На берегу в палатках" }, 
//     "answer3": { "result": false, "value": "Уезжают на юг" },
//     "answer4": { "result": false, "value": "В Тайланде" },
//     "answer5": { "result": false, "value": "В холодильнике" }
// },
// {
//     "question": "Какие жуки носят название того месяца в котором появляются?",
//     "answer1": { "result": true, "value": "Майские" },
//     "answer2": { "result": false, "value": "Сентябрьские" }, 
//     "answer3": { "result": false, "value": "Мартовские" },
//     "answer4": { "result": false, "value": "Августовские" },
//     "answer5": { "result": false, "value": "Апрельские" }
// },
// {
//     "question": "Как паук, сидящий в засаде, узнает что к нему в паутину попала добыча?",
//     "answer1": { "result": true, "value": "По сигнальным нитям, которые колышутся при движении добычи" },
//     "answer2": { "result": false, "value": "По видеокамерам" }, 
//     "answer3": { "result": false, "value": "По СМС" },
//     "answer4": { "result": false, "value": "Слуги сообщают" },
//     "answer5": { "result": false, "value": "Догадывается" }
// },
// {
//     "question": "Что в JS обозначает данная конструкция {a: 1, b: 2}?",
//     "answer1": { "result": true, "value": "Объект" },
//     "answer2": { "result": false, "value": "Массив" }, 
//     "answer3": { "result": false, "value": "Это не поддается объяснению" },
//     "answer4": { "result": false, "value": "Контейнер" },
//     "answer5": { "result": false, "value": "Спросите что попроще" }
// },
// {
//     "question": "Что в JS означает данная конструкция () => {} ?",
//     "answer1": { "result": true, "value": "Стрелочная функция" },
//     "answer2": { "result": false, "value": "Круглые скобки говорят, что справа объект" }, 
//     "answer3": { "result": false, "value": "Объект" },
//     "answer4": { "result": false, "value": "Элемент списка" },
//     "answer5": { "result": false, "value": "Ассоциативный массив" }
// },
// {
//     "question": "Какое самое популярное мужское имя в сказках?",
//     "answer1": { "result": true, "value": "Иван" },
//     "answer2": { "result": false, "value": "Жорик" }, 
//     "answer3": { "result": false, "value": "Гоги" },
//     "answer4": { "result": false, "value": "Моргенштерн" },
//     "answer5": { "result": false, "value": "Илон Маск" }
// },
// {
//     "question": "Кто посеял деньги, думая, что вырастит денежное дерево и останется только снимать урожай?",
//     "answer1": { "result": true, "value": "Буратино" },
//     "answer2": { "result": false, "value": "Иван дурак" }, 
//     "answer3": { "result": false, "value": "Карабас барабас" },
//     "answer4": { "result": false, "value": "Железный дровосек" },
//     "answer5": { "result": false, "value": "Еврей" }
// }