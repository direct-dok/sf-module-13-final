const tasksMini = `
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
            "answer5": { "result": false, "value": "Василиса премудрая" }, 
            "million": "questionMillion"
        },
        {
            "question": "Что в JS обозначает следующая конструкция [1,2,3,4]",
            "answer1": { "result": true, "value": "Массив" },
            "answer2": { "result": false, "value": "Объект" }, 
            "answer3": { "result": false, "value": "Переменная" },
            "answer4": { "result": false, "value": "Набор цифр" },
            "answer5": { "result": false, "value": "Контейнер" }
        },
        {
            "question": "Атмосфера – это…?",
            "answer1": { "result": true, "value": "воздушная оболочка Земли" },
            "answer2": { "result": false, "value": "Космос" }, 
            "answer3": { "result": false, "value": "Название духов" },
            "answer4": { "result": false, "value": "Ветер" },
            "answer5": { "result": false, "value": "Облака" }, 
            "million": "questionMillion"
        },
        {
            "question": "Газообразная вода…?",
            "answer1": { "result": true, "value": "Пар" },
            "answer2": { "result": false, "value": "Дождь" }, 
            "answer3": { "result": false, "value": "Дезодорант" },
            "answer4": { "result": false, "value": "Газировка" },
            "answer5": { "result": false, "value": "Брызги" }
        },
        {
            "question": "Самая высокая точка Земли?",
            "answer1": { "result": true, "value": "Эверест" },
            "answer2": { "result": false, "value": "Эйфелева башня" }, 
            "answer3": { "result": false, "value": "Гималаи" },
            "answer4": { "result": false, "value": "Уральские горы" },
            "answer5": { "result": false, "value": "Эльбрус" },
            "questionEight": "eight"
        },
        {
            "question": "Кто варил кашу, применяя ум и смекалку?",
            "answer1": { "result": true, "value": "Солдат" },
            "answer2": { "result": false, "value": "Кот матроскин" }, 
            "answer3": { "result": false, "value": "Змей горыныч" },
            "answer4": { "result": false, "value": "Баба яга" },
            "answer5": { "result": false, "value": "Иван дурак" },
            "questionEight": "eight"
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
//     "answer5": { "result": false, "value": "Снежная королева" },
//     "questionEight": "eight"
// },
// {
//     "question": "Как прозвали героя, который очень любил носить обувь?",
//     "answer1": { "result": true, "value": "Кот в сапогах" },
//     "answer2": { "result": false, "value": "Кощей бессмертный" }, 
//     "answer3": { "result": false, "value": "Иван дурак" },
//     "answer4": { "result": false, "value": "Золушка" },
//     "answer5": { "result": false, "value": "Василиса премудрая" }, 
//     "million": "questionMillion"
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
//     "question": "Атмосфера – это…?",
//     "answer1": { "result": true, "value": "воздушная оболочка Земли" },
//     "answer2": { "result": false, "value": "Космос" }, 
//     "answer3": { "result": false, "value": "Название духов" },
//     "answer4": { "result": false, "value": "Ветер" },
//     "answer5": { "result": false, "value": "Облака" }, 
//     "million": "questionMillion"
// },
// {
//     "question": "Газообразная вода…?",
//     "answer1": { "result": true, "value": "Пар" },
//     "answer2": { "result": false, "value": "Дождь" }, 
//     "answer3": { "result": false, "value": "Дезодорант" },
//     "answer4": { "result": false, "value": "Газировка" },
//     "answer5": { "result": false, "value": "Брызги" }
// },
// {
//     "question": "Самая высокая точка Земли?",
//     "answer1": { "result": true, "value": "Эверест" },
//     "answer2": { "result": false, "value": "Эйфелева башня" }, 
//     "answer3": { "result": false, "value": "Гималаи" },
//     "answer4": { "result": false, "value": "Уральские горы" },
//     "answer5": { "result": false, "value": "Эльбрус" },
//     "questionEight": "eight"
// },
// {
//     "question": "Кто варил кашу, применяя ум и смекалку?",
//     "answer1": { "result": true, "value": "Солдат" },
//     "answer2": { "result": false, "value": "Кот матроскин" }, 
//     "answer3": { "result": false, "value": "Змей горыныч" },
//     "answer4": { "result": false, "value": "Баба яга" },
//     "answer5": { "result": false, "value": "Иван дурак" },
//     "questionEight": "eight"
// }