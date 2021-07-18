const tasks = `
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
        },
        {
            "question": "Из чего пчелы делают мед?",
            "answer1": { "result": true, "value": "Из цветочного нектара" },
            "answer2": { "result": false, "value": "Из шоколада" }, 
            "answer3": { "result": false, "value": "Из воздуха" },
            "answer4": { "result": false, "value": "Из хороших советов" },
            "answer5": { "result": false, "value": "Из ягод" }
        },
        {
            "question": "Где раки зимуют?",
            "answer1": { "result": true, "value": "В подводных норах пресных водоемов" },
            "answer2": { "result": false, "value": "На берегу в палатках" }, 
            "answer3": { "result": false, "value": "Уезжают на юг" },
            "answer4": { "result": false, "value": "В Тайланде" },
            "answer5": { "result": false, "value": "В холодильнике" }
        },
        {
            "question": "Какие жуки носят название того месяца в котором появляются?",
            "answer1": { "result": true, "value": "Майские" },
            "answer2": { "result": false, "value": "Сентябрьские" }, 
            "answer3": { "result": false, "value": "Мартовские" },
            "answer4": { "result": false, "value": "Августовские" },
            "answer5": { "result": false, "value": "Апрельские" }
        },
        {
            "question": "Как паук, сидящий в засаде, узнает что к нему в паутину попала добыча?",
            "answer1": { "result": true, "value": "По сигнальным нитям, которые колышутся при движении добычи" },
            "answer2": { "result": false, "value": "По видеокамерам" }, 
            "answer3": { "result": false, "value": "По СМС" },
            "answer4": { "result": false, "value": "Слуги сообщают" },
            "answer5": { "result": false, "value": "Догадывается" }
        },
        {
            "question": "Что в JS обозначает данная конструкция {a: 1, b: 2}?",
            "answer1": { "result": true, "value": "Объект" },
            "answer2": { "result": false, "value": "Массив" }, 
            "answer3": { "result": false, "value": "Это не поддается объяснению" },
            "answer4": { "result": false, "value": "Контейнер" },
            "answer5": { "result": false, "value": "Спросите что попроще" }
        },
        {
            "question": "Что в JS означает данная конструкция () => {} ?",
            "answer1": { "result": true, "value": "Стрелочная функция" },
            "answer2": { "result": false, "value": "Круглые скобки говорят, что справа объект" }, 
            "answer3": { "result": false, "value": "Объект" },
            "answer4": { "result": false, "value": "Элемент списка" },
            "answer5": { "result": false, "value": "Ассоциативный массив" }
        },
        {
            "question": "Какое самое популярное мужское имя в сказках?",
            "answer1": { "result": true, "value": "Иван" },
            "answer2": { "result": false, "value": "Жорик" }, 
            "answer3": { "result": false, "value": "Гоги" },
            "answer4": { "result": false, "value": "Моргенштерн" },
            "answer5": { "result": false, "value": "Илон Маск" }
        },
        {
            "question": "Кто посеял деньги, думая, что вырастит денежное дерево и останется только снимать урожай?",
            "answer1": { "result": true, "value": "Буратино" },
            "answer2": { "result": false, "value": "Иван дурак" }, 
            "answer3": { "result": false, "value": "Карабас барабас" },
            "answer4": { "result": false, "value": "Железный дровосек" },
            "answer5": { "result": false, "value": "Еврей" },
            "million": "questionMillion"
        },
        {
            "question": "Кто жил на улице Бассейной?",
            "answer1": { "result": true, "value": "Рассеянный" },
            "answer2": { "result": false, "value": "Любитель поплавать" }, 
            "answer3": { "result": false, "value": "Кто там только не жил" },
            "answer4": { "result": false, "value": "Карлсон" },
            "answer5": { "result": false, "value": "Чебурашка" }
        },
        {
            "question": "Почему животные не трогают жаб?",
            "answer1": { "result": true, "value": "Они выделяют ядовитые вещества" },
            "answer2": { "result": false, "value": "Они не красивые" }, 
            "answer3": { "result": false, "value": "Они кусаются" },
            "answer4": { "result": false, "value": "Они ругаются" },
            "answer5": { "result": false, "value": "Они не вкусные" }
        },
        {
            "question": "Какую пользу приносят природе дождевые черви?",
            "answer1": { "result": true, "value": "Они рыхлят землю, повышая плодородие почвы" },
            "answer2": { "result": false, "value": "Никакой" }, 
            "answer3": { "result": false, "value": "Птицы сыты" },
            "answer4": { "result": false, "value": "На рыбалку можно накопать" },
            "answer5": { "result": false, "value": "Они роют норы, по которым в почву попадает вода" }
        },
        {
            "question": "В какой стране находится город Цинциннати?",
            "answer1": { "result": true, "value": "США" },
            "answer2": { "result": false, "value": "Грузия" }, 
            "answer3": { "result": false, "value": "Армения" },
            "answer4": { "result": false, "value": "Россия" },
            "answer5": { "result": false, "value": "Азербайджан" }, 
            "million": "questionMillion"
        },
        {
            "question": "В какой стране находится город Шлиссельбург?",
            "answer1": { "result": true, "value": "Россия" },
            "answer2": { "result": false, "value": "Германия" }, 
            "answer3": { "result": false, "value": "Австрия" },
            "answer4": { "result": false, "value": "Польша" },
            "answer5": { "result": false, "value": "Мексика" },
            "questionEight": "eight"
        },
        {
            "question": "В какой стране находится Стоунхедж?",
            "answer1": { "result": true, "value": "Англия" },
            "answer2": { "result": false, "value": "США" }, 
            "answer3": { "result": false, "value": "Россия" },
            "answer4": { "result": false, "value": "Нидерланды" },
            "answer5": { "result": false, "value": "Франция" }
        },
        {
            "question": "Что такое Титикака?",
            "answer1": { "result": true, "value": "Озеро" },
            "answer2": { "result": false, "value": "Пролив" }, 
            "answer3": { "result": false, "value": "Водопад" },
            "answer4": { "result": false, "value": "Река" },
            "answer5": { "result": false, "value": "Море" },
            "questionEight": "eight"
        },
        {
            "question": "Как звали корову кота Матроскина?",
            "answer1": { "result": true, "value": "Мурка" },
            "answer2": { "result": false, "value": "Елизавета" }, 
            "answer3": { "result": false, "value": "Ольга" },
            "answer4": { "result": false, "value": "Молочница" },
            "answer5": { "result": false, "value": "Милка" }
        },
        {
            "question": "О каком животном мечтал малыш в мультфильме про карлсона?",
            "answer1": { "result": true, "value": "Собака" },
            "answer2": { "result": false, "value": "Кошка" }, 
            "answer3": { "result": false, "value": "Змея" },
            "answer4": { "result": false, "value": "Тигр" },
            "answer5": { "result": false, "value": "Крокодил" }
        },
        {
            "question": "Если в JS объявить переменную, но ничего ей не присвоить, далее вывести через console.log(), что мы получим в консоли?",
            "answer1": { "result": true, "value": "undefined" },
            "answer2": { "result": false, "value": "null" }, 
            "answer3": { "result": false, "value": "Symbol" },
            "answer4": { "result": false, "value": "is not defined" },
            "answer5": { "result": false, "value": "Infinity" }
        },
        {
            "question": "Количество осадков измеряется в ...?",
            "answer1": { "result": true, "value": "Миллиметрах" },
            "answer2": { "result": false, "value": "Сантиметрах" }, 
            "answer3": { "result": false, "value": "Метрах" },
            "answer4": { "result": false, "value": "Градусах" },
            "answer5": { "result": false, "value": "По рулетке" }
        },
        {
            "question": "Вода в твердом виде …?",
            "answer1": { "result": true, "value": "Лед" },
            "answer2": { "result": false, "value": "Цемент" }, 
            "answer3": { "result": false, "value": "Глина" },
            "answer4": { "result": false, "value": "Стекло" },
            "answer5": { "result": false, "value": "Камень" }
        },
        {
            "question": "Движение воздуха в горизонтальном направлении – это …?",
            "answer1": { "result": true, "value": "Ветер" },
            "answer2": { "result": false, "value": "Скольжение" }, 
            "answer3": { "result": false, "value": "Полет" },
            "answer4": { "result": false, "value": "Редкое природное явление" },
            "answer5": { "result": false, "value": "Чудо" }
        },
        {
            "question": "Огнедышащая гора?",
            "answer1": { "result": true, "value": "Вулкан" },
            "answer2": { "result": false, "value": "Дракон" }, 
            "answer3": { "result": false, "value": "Бомба" },
            "answer4": { "result": false, "value": "Газовая плита" },
            "answer5": { "result": false, "value": "Костер в пионерском лагере" }
        },
        {
            "question": "Как звали хозяина Кота в сапогах?",
            "answer1": { "result": true, "value": "Маркиз Карабас" },
            "answer2": { "result": false, "value": "Карлсон" }, 
            "answer3": { "result": false, "value": "Гуливер" },
            "answer4": { "result": false, "value": "Баба яга" },
            "answer5": { "result": false, "value": "Иван дурак" },
            "questionEight": "eight"
        },
        {
            "question": "Атмосфера – это…?",
            "answer1": { "result": true, "value": "воздушная оболочка Земли" },
            "answer2": { "result": false, "value": "Космос" }, 
            "answer3": { "result": false, "value": "Название духов" },
            "answer4": { "result": false, "value": "Ветер" },
            "answer5": { "result": false, "value": "Облака" }
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
            "answer5": { "result": false, "value": "Эльбрус" }
        },
        {
            "question": "Кто варил кашу, применяя ум и смекалку?",
            "answer1": { "result": true, "value": "Солдат" },
            "answer2": { "result": false, "value": "Кот матроскин" }, 
            "answer3": { "result": false, "value": "Змей горыныч" },
            "answer4": { "result": false, "value": "Баба яга" },
            "answer5": { "result": false, "value": "Иван дурак" }
        }
    ]
`;