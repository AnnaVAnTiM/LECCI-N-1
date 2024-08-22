// script.js
const words = [{
        spanish: 'hola',
        russian: 'привет'
    },
    {
        spanish: 'adiós',
        russian: 'до свидания'
    },
    {
        spanish: 'gracias',
        russian: 'спасибо'
    },
    {
        spanish: 'por favor',
        russian: 'пожалуйста'
    },
    {
        spanish: 'cómo estás',
        russian: 'как дела'
    },
    {
        spanish: 'activo',
        russian: 'активный'
    },
    {
        spanish: 'alegre',
        russian: 'веселый'
    },
    {
        spanish: 'alto',
        russian: 'высокий'
    },
    {
        spanish: 'amigo',
        russian: 'друг'
    },
    {
        spanish: 'atractivo',
        russian: 'привлекательный'
    },
    {
        spanish: 'blanco',
        russian: 'белый'
    },
    {
        spanish: 'bueno',
        russian: 'хороший, добрый'
    },
    {
        spanish: 'chica',
        russian: 'девочка, девушка'
    },
    {
        spanish: 'chico',
        russian: 'мальчик, молодой человек'
    },
    {
        spanish: 'coche',
        russian: 'машина (автомобиль)'
    },
    {
        spanish: 'cómodo',
        russian: 'удобный'
    },
    {
        spanish: 'de',
        russian: '1. из (чего-л) 2 обозн. принадлежность'
    },
    {
        spanish: 'elegante',
        russian: 'элегантный'
    },
    {
        spanish: 'español',
        russian: 'испанский, испанец'
    },
    {
        spanish: 'gris',
        russian: 'серый'
    },
    {
        spanish: 'grande',
        russian: 'большой'
    },
    {
        spanish: 'fiel',
        russian: 'верный'
    },
    {
        spanish: 'italano',
        russian: 'итальянский, итальянец'
    },
    {
        spanish: 'manzana',
        russian: 'яблоко'
    },
    {
        spanish: 'melancólico',
        russian: 'меланхоличный'
    },
    {
        spanish: 'moderno',
        russian: 'современный'
    },
    {
        spanish: 'muchas',
        russian: 'многие'
    },
    {
        spanish: 'negro',
        russian: 'черный'
    },
    {
        spanish: 'perro',
        russian: 'собака'
    },
    {
        spanish: 'por',
        russian: 'по (чему-либо)'
    },
    {
        spanish: 'para',
        russian: 'для'
    },
    {
        spanish: 'ruso',
        russian: 'русский'
    },
    {
        spanish: 'seguro',
        russian: 'надежный'
    },
    {
        spanish: 'simpático',
        russian: 'приятный, симпатичный'
    },
    {
        spanish: 'un poco',
        russian: 'немного'
    },
    {
        spanish: 'alemán',
        russian: 'немецкий, немец'
    },
    {
        spanish: 'ahora',
        russian: 'сейчас'
    },
    {
        spanish: 'aquí',
        russian: 'здесь'
    },
    {
        spanish: 'bar',
        russian: 'бар'
    },
    {
        spanish: 'barato',
        russian: 'дешевый'
    },
    {
        spanish: 'bicicleta',
        russian: 'велосипед'
    },
    {
        spanish: 'café',
        russian: 'кофе'
    },
    {
        spanish: 'calle',
        russian: 'улица'
    },
    {
        spanish: 'capital',
        russian: 'столица'
    },
    {
        spanish: 'caro',
        russian: 'дорогой'
    },
    {
        spanish: 'casa',
        russian: 'дом'
    },
    {
        spanish: 'ciudad',
        russian: 'город'
    },
    {
        spanish: 'claro',
        russian: 'светлый'
    },
    {
        spanish: 'color',
        russian: 'цвет'
    },
    {
        spanish: 'como',
        russian: 'как'
    },
    {
        spanish: 'compra',
        russian: 'покупает'
    },
    {
        spanish: 'contento',
        russian: 'довольный'
    },
    {
        spanish: 'deportivo',
        russian: 'спортивный'
    },
    {
        spanish: 'desayunar',
        russian: 'завтракать'
    },
    {
        spanish: 'diferente',
        russian: 'различный, отличный'
    },
    {
        spanish: 'dinero',
        russian: 'деньги'
    },
    {
        spanish: 'estudia',
        russian: 'учится'
    },
    {
        spanish: 'estudiante',
        russian: 'студент, студентка'
    },
    {
        spanish: 'estudiantil',
        russian: 'студенческий'
    },
    {
        spanish: 'ganar',
        russian: 'зарабатывать'
    },
    {
        spanish: 'hoy',
        russian: 'сегодня'
    },
    {
        spanish: 'Inglaterra',
        russian: 'Англия'
    },
    {
        spanish: 'inglés',
        russian: 'английский, англичанин'
    },
    {
        spanish: 'ir',
        russian: 'ехать, идти'
    },
    {
        spanish: 'jóven',
        russian: 'молодой'
    },
    {
        spanish: 'leche',
        russian: 'молоко'
    },
    {
        spanish: 'libre',
        russian: 'свободный'
    },
    {
        spanish: 'Londres',
        russian: 'Лондон'
    },
    {
        spanish: 'luego',
        russian: 'потом'
    },
    {
        spanish: 'mañana',
        russian: 'утро, завтра'
    },
    {
        spanish: 'moreno',
        russian: 'смуглый, темный'
    },
    {
        spanish: 'muy',
        russian: 'очень'
    },
    {
        spanish: 'noche',
        russian: 'вечер, ночь'
    },
    {
        spanish: 'ojo',
        russian: 'глаз'
    },
    {
        spanish: 'pelo',
        russian: 'волосы'
    },
    {
        spanish: 'pero',
        russian: 'но'
    },
    {
        spanish: 'piso',
        russian: 'квартира'
    },
    {
        spanish: 'público',
        russian: 'общественный'
    },
    {
        spanish: 'residencia',
        russian: 'общежитие'
    },
    {
        spanish: 'rojo',
        russian: 'красный'
    },
    {
        spanish: 'rubio',
        russian: 'белокурый, русый'
    },
    {
        spanish: 'tarde',
        russian: 'вечер'
    },
    {
        spanish: 'tienda',
        russian: 'магазин'
    },
    {
        spanish: 'toma',
        russian: 'берет'
    },
    {
        spanish: 'tiempo',
        russian: 'время'
    },
    {
        spanish: 'tostada',
        russian: 'гренка, поджаренный хлеб'
    },
    {
        spanish: 'trabajar',
        russian: 'работать'
    },
    {
        spanish: 'transporte',
        russian: 'транспорт'
    },
    {
        spanish: 'universidad',
        russian: 'университет'
    },
    {
        spanish: 'va',
        russian: 'едет'
    },
    {
        spanish: 'vida',
        russian: 'жизнь'
    },
    {
        spanish: 'Enero',
        russian: 'Январь'
    },
    {
        spanish: 'Febrero',
        russian: 'Февраль'
    },
    {
        spanish: 'Marzo',
        russian: 'Март'
    },
    {
        spanish: 'Abril',
        russian: 'Апрель'
    },
    {
        spanish: 'Mayo',
        russian: 'Май'
    },
    {
        spanish: 'Junio',
        russian: 'Июнь'
    },
    {
        spanish: 'Julio',
        russian: 'Июль'
    },
    {
        spanish: 'Agosto',
        russian: 'Август'
    },
    {
        spanish: 'Septiembre',
        russian: 'Сентябрь'
    },
    {
        spanish: 'Octubre',
        russian: 'Октябрь'
    },
    {
        spanish: 'Noviembre',
        russian: 'Ноябрь'
    },
    {
        spanish: 'Diciembre',
        russian: 'Декабрь'
    },
    {
        spanish: 'lunes',
        russian: 'понедельник'
    },
    {
        spanish: 'martes',
        russian: 'вторник'
    },
    {
        spanish: 'miércoles',
        russian: 'среда'
    },
    {
        spanish: 'jueves',
        russian: 'четверг'
    },
    {
        spanish: 'viernes',
        russian: 'пятница'
    },
    {
        spanish: 'sábado',
        russian: 'суббота'
    },
    {
        spanish: 'domingo',
        russian: 'воскресенье'
    }
];

let currentWordIndex = 0;
let shuffledWords = [...words];

const flashcardElement = document.getElementById('flashcard');
const wordFrontElement = document.getElementById('word-front');
const wordBackElement = document.getElementById('word-back');
const nextButton = document.getElementById('nextButton');
const shuffleButton = document.getElementById('shuffleButton');
const directionToggle = document.getElementById('directionToggle');

function updateCard() {
    const currentWord = shuffledWords[currentWordIndex];
    if (directionToggle.checked) {
        wordFrontElement.textContent = currentWord.russian;
        wordBackElement.textContent = currentWord.spanish;
    } else {
        wordFrontElement.textContent = currentWord.spanish;
        wordBackElement.textContent = currentWord.russian;
    }
}

function flipCard() {
    flashcardElement.classList.toggle('flipped');
}

function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % shuffledWords.length;
    flashcardElement.classList.remove('flipped');
    updateCard();
}

function shuffleWords() {
    shuffledWords = [...words].sort(() => Math.random() - 0.5);
    currentWordIndex = 0;
    flashcardElement.classList.remove('flipped');
    updateCard();
}

flashcardElement.addEventListener('click', flipCard);
nextButton.addEventListener('click', nextWord);
shuffleButton.addEventListener('click', shuffleWords);
directionToggle.addEventListener('change', updateCard);

// Инициализация
updateCard();
// Toggle functionality
const toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.closest('.exercise-container').querySelector('.exercise-content');
        content.classList.toggle('active');
        const icon = button.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});

// Multiple choice exercise
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const feedbackElement = document.getElementById('feedback');
const nextQuestionButton = document.getElementById('nextQuestionButton');

function generateMultipleChoiceQuestion() {
    const correctWord = shuffledWords[Math.floor(Math.random() * shuffledWords.length)];
    const choices = [correctWord.russian];
    while (choices.length < 4) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        if (!choices.includes(randomWord.russian)) {
            choices.push(randomWord.russian);
        }
    }
    choices.sort(() => Math.random() - 0.5);

    questionElement.textContent = `Выберите правильный перевод для слова: ${correctWord.spanish}`;
    choicesElement.innerHTML = '';
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice, correctWord.russian));
        choicesElement.appendChild(button);
    });

    feedbackElement.textContent = '';
    nextQuestionButton.style.display = 'none';
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        feedbackElement.textContent = 'Правильно!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = `Неправильно. Правильный ответ: ${correctAnswer}`;
        feedbackElement.style.color = 'red';
    }
    nextQuestionButton.style.display = 'inline-block';
}

nextQuestionButton.addEventListener('click', generateMultipleChoiceQuestion);

// Write word exercise
const translationElement = document.getElementById('translation');
const wordInput = document.getElementById('wordInput');
const checkButton = document.getElementById('checkButton');
const writeFeedbackElement = document.getElementById('writeFeedback');
const nextWriteButton = document.getElementById('nextWriteButton');
let currentWriteWord;

function generateWriteWordExercise() {
    currentWriteWord = shuffledWords[Math.floor(Math.random() * shuffledWords.length)];
    translationElement.textContent = `Напишите испанское слово для: ${currentWriteWord.russian}`;
    wordInput.value = '';
    writeFeedbackElement.textContent = '';
    nextWriteButton.style.display = 'none';
}

function checkWrittenWord() {
    const userInput = wordInput.value.trim().toLowerCase();
    if (userInput === currentWriteWord.spanish.toLowerCase()) {
        writeFeedbackElement.textContent = 'Правильно!';
        writeFeedbackElement.style.color = 'green';
    } else {
        writeFeedbackElement.textContent = `Неправильно. Правильный ответ: ${currentWriteWord.spanish}`;
        writeFeedbackElement.style.color = 'red';
    }
    nextWriteButton.style.display = 'inline-block';
}

checkButton.addEventListener('click', checkWrittenWord);
nextWriteButton.addEventListener('click', generateWriteWordExercise);

// Initialize
updateCard();
generateMultipleChoiceQuestion();
generateWriteWordExercise();

// Добавьте этот код в конец существующего script.js файла или замените существующий код для упражнения "Сопоставление слов"

// Matching exercise
const spanishWordsElement = document.getElementById('spanish-words');
const russianWordsElement = document.getElementById('russian-words');
const checkMatchingButton = document.getElementById('checkMatchingButton');
const matchingFeedbackElement = document.getElementById('matchingFeedback');
const nextMatchingButton = document.getElementById('nextMatchingButton');

let matchingPairs = [];
let selectedSpanishWord = null;
let selectedRussianWord = null;
let correctPairs = 0;
let totalPairs = 5;

function generateMatchingExercise() {
    matchingPairs = [];
    correctPairs = 0;

    // Выбираем случайные слова для упражнения
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    const selectedWords = shuffled.slice(0, totalPairs);

    matchingPairs = selectedWords.map(word => ({
        spanish: word.spanish,
        russian: word.russian
    }));

    displayMatchingWords();

    checkMatchingButton.style.display = 'inline-block';
    nextMatchingButton.style.display = 'none';
    matchingFeedbackElement.textContent = '';
}

function displayMatchingWords() {
    spanishWordsElement.innerHTML = '';
    russianWordsElement.innerHTML = '';

    // Перемешиваем испанские и русские слова отдельно
    const shuffledSpanish = [...matchingPairs].sort(() => 0.5 - Math.random());
    const shuffledRussian = [...matchingPairs].sort(() => 0.5 - Math.random());

    shuffledSpanish.forEach(pair => {
        const wordElement = createWordElement(pair.spanish, 'spanish');
        spanishWordsElement.appendChild(wordElement);
    });

    shuffledRussian.forEach(pair => {
        const wordElement = createWordElement(pair.russian, 'russian');
        russianWordsElement.appendChild(wordElement);
    });
}

function createWordElement(word, language) {
    const wordElement = document.createElement('div');
    wordElement.classList.add('word-card');
    wordElement.textContent = word;
    wordElement.setAttribute('data-word', word);
    wordElement.addEventListener('click', () => selectWord(word, language));
    return wordElement;
}

function selectWord(word, language) {
    if (language === 'spanish') {
        if (selectedSpanishWord) {
            document.querySelector(`#spanish-words .word-card.selected`).classList.remove('selected');
        }
        selectedSpanishWord = word;
        document.querySelector(`#spanish-words .word-card[data-word="${word}"]`).classList.add('selected');
    } else {
        if (selectedRussianWord) {
            document.querySelector(`#russian-words .word-card.selected`).classList.remove('selected');
        }
        selectedRussianWord = word;
        document.querySelector(`#russian-words .word-card[data-word="${word}"]`).classList.add('selected');
    }

    if (selectedSpanishWord && selectedRussianWord) {
        checkPair();
    }
}

function checkPair() {
    const isCorrect = matchingPairs.some(pair =>
        pair.spanish === selectedSpanishWord && pair.russian === selectedRussianWord
    );

    const spanishElement = document.querySelector(`#spanish-words .word-card[data-word="${selectedSpanishWord}"]`);
    const russianElement = document.querySelector(`#russian-words .word-card[data-word="${selectedRussianWord}"]`);

    if (isCorrect) {
        spanishElement.classList.add('correct');
        russianElement.classList.add('correct');
        correctPairs++;
    } else {
        spanishElement.classList.add('incorrect');
        russianElement.classList.add('incorrect');

        // Убираем класс 'incorrect' через 1 секунду
        setTimeout(() => {
            spanishElement.classList.remove('incorrect');
            russianElement.classList.remove('incorrect');
        }, 1000);
    }

    selectedSpanishWord = null;
    selectedRussianWord = null;

    if (correctPairs === totalPairs) {
        matchingFeedbackElement.textContent = 'Поздравляем! Вы правильно сопоставили все слова.';
        checkMatchingButton.style.display = 'none';
        nextMatchingButton.style.display = 'inline-block';
    }
}

function checkAllPairs() {
    matchingPairs.forEach(pair => {
        const spanishElement = document.querySelector(`#spanish-words .word-card[data-word="${pair.spanish}"]`);
        const russianElement = document.querySelector(`#russian-words .word-card[data-word="${pair.russian}"]`);

        spanishElement.classList.add('correct');
        russianElement.classList.add('correct');
    });

    matchingFeedbackElement.textContent = `Правильные пары выделены зеленым. Вы угадали ${correctPairs} из ${totalPairs} пар.`;
    checkMatchingButton.style.display = 'none';
    nextMatchingButton.style.display = 'inline-block';
}

checkMatchingButton.addEventListener('click', checkAllPairs);
nextMatchingButton.addEventListener('click', generateMatchingExercise);

// Инициализация нового упражнения
generateMatchingExercise();

const verbConjugations = {
    ser: {
        infinitive: 'ser',
        conjugations: {
            'yo': 'soy',
            'tú': 'eres',
            'él': 'es',
            'ella': 'es',
            'usted': 'es',
            'nosotros': 'somos',
            'vosotros': 'sois',
            'ellos': 'son',
            'ellas': 'son',
            'ustedes': 'son'
        }
    },
    estar: {
        infinitive: 'estar',
        conjugations: {
            'yo': 'estoy',
            'tú': 'estás',
            'él': 'está',
            'ella': 'está',
            'usted': 'está',
            'nosotros': 'estamos',
            'vosotros': 'estáis',
            'ellos': 'están',
            'ellas': 'están',
            'ustedes': 'están'
        }
    },
    hacer: {
        infinitive: 'hacer',
        conjugations: {
            'yo': 'hago',
            'tú': 'haces',
            'él': 'hace',
            'ella': 'hace',
            'usted': 'hace',
            'nosotros': 'hacemos',
            'vosotros': 'hacéis',
            'ellos': 'hacen',
            'ellas': 'hacen',
            'ustedes': 'hacen'
        }
    },
    tener: {
        infinitive: 'tener',
        conjugations: {
            'yo': 'tengo',
            'tú': 'tienes',
            'él': 'tiene',
            'ella': 'tiene',
            'usted': 'tiene',
            'nosotros': 'tenemos',
            'vosotros': 'tenéis',
            'ellos': 'tienen',
            'ellas': 'tienen',
            'ustedes': 'tienen',
        }
    },
    ir: {
        infinitive: 'ir',
        conjugations: {
            'yo': 'voy',
            'tú': 'vas',
            'él': 'va',
            'ella': 'va',
            'usted': 'va',
            'nosotros': 'vamos',
            'vosotros': 'vais',
            'ellos': 'van',
            'ellas': 'van',
            'ustedes': 'van',
        }
    }
};

const sentenceTemplates = [
    "{pronoun} _____ {complement}",
    "¿{pronoun} _____ {complement}?",
    "{pronoun} no _____ {complement}",
];

const complementsByVerb = {
    ser: ["estudiante", "profesor", "de España", "alto", "inteligente"],
    estar: ["en casa", "feliz", "cansado", "enfermo", "ocupado"],
    hacer: ["la tarea", "ejercicio", "un pastel", "planes", "preguntas"],
    tener: ["hambre", "sed", "miedo", "20 años", "un perro"],
    ir: ["a la escuela", "al parque", "de vacaciones", "al cine", "a trabajar"]
};

let currentSentences = [];

function generateFillInBlankSet() {
    currentSentences = [];
    const sentencesContainer = document.getElementById('sentences');
    sentencesContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const sentence = generateSentence();
        currentSentences.push(sentence);

        const sentenceElement = document.createElement('div');
        sentenceElement.className = 'sentence';
        sentenceElement.innerHTML = `${i + 1}. ${sentence.displaySentence}`;

        const optionsElement = document.createElement('div');
        optionsElement.className = 'options';

        sentence.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => selectOption(i, option, button);
            optionsElement.appendChild(button);
        });

        sentenceElement.appendChild(optionsElement);
        sentencesContainer.appendChild(sentenceElement);
    }

    document.getElementById('feedback').textContent = '';
    document.getElementById('checkAnswersButton').style.display = 'block';
    document.getElementById('nextFillInBlankSetButton').style.display = 'none';
}

function generateSentence() {
    const verb = getRandomKey(verbConjugations);
    const pronoun = getRandomKey(verbConjugations[verb].conjugations);
    const correctAnswer = verbConjugations[verb].conjugations[pronoun];
    const complement = getRandomItem(complementsByVerb[verb]);
    const template = getRandomItem(sentenceTemplates);

    const displaySentence = template
        .replace("{pronoun}", pronoun)
        .replace("_____", "________")
        .replace("{complement}", complement);

    const fullSentence = template
        .replace("{pronoun}", pronoun)
        .replace("_____", correctAnswer)
        .replace("{complement}", complement);

    return {
        verb: verb,
        pronoun: pronoun,
        correctAnswer: correctAnswer,
        complement: complement,
        displaySentence: displaySentence,
        fullSentence: fullSentence,
        options: generateOptions(correctAnswer, verb),
        selectedAnswer: null
    };
}

function generateOptions(correctAnswer, verb) {
    const options = [correctAnswer];
    const allConjugations = Object.values(verbConjugations[verb].conjugations);
    while (options.length < 4) {
        const randomConjugation = getRandomItem(allConjugations);
        if (!options.includes(randomConjugation)) {
            options.push(randomConjugation);
        }
    }
    return shuffleArray(options);
}

function selectOption(sentenceIndex, option, buttonElement) {
    currentSentences[sentenceIndex].selectedAnswer = option;

    // Сброс стилей всех кнопок для этого предложения
    const buttons = buttonElement.parentElement.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.color = '';
    });

    // Выделение выбранной кнопки
    buttonElement.style.backgroundColor = '#3498db';
    buttonElement.style.color = 'white';
}

function checkAnswers() {
    let correctCount = 0;
    currentSentences.forEach((sentence, index) => {
        if (sentence.selectedAnswer === sentence.correctAnswer) {
            correctCount++;
        }
    });

    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = `Вы правильно ответили на ${correctCount} из 5 предложений.`;
    feedbackElement.style.color = correctCount === 5 ? 'green' : 'red';

    document.getElementById('checkAnswersButton').style.display = 'none';
    document.getElementById('nextFillInBlankSetButton').style.display = 'block';

    // Показываем правильные ответы
    const sentencesContainer = document.getElementById('sentences');
    currentSentences.forEach((sentence, index) => {
        const sentenceElement = sentencesContainer.children[index];
        const resultElement = document.createElement('p');
        resultElement.textContent = `Правильный ответ: ${sentence.fullSentence}`;
        resultElement.style.color = sentence.selectedAnswer === sentence.correctAnswer ? 'green' : 'red';
        sentenceElement.appendChild(resultElement);
    });
}

function getRandomKey(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.getElementById('checkAnswersButton').addEventListener('click', checkAnswers);
document.getElementById('nextFillInBlankSetButton').addEventListener('click', generateFillInBlankSet);

// Инициализация упражнения
generateFillInBlankSet();

const sentences = [{
        spanish: "El chico alto compra una bicicleta roja.",
        russian: "Высокий мальчик покупает красный велосипед."
    },
    {
        spanish: "La chica rubia toma un café en el bar.",
        russian: "Светловолосая девушка пьет кофе в баре."
    },
    {
        spanish: "Mi amigo es muy simpático y alegre.",
        russian: "Мой друг очень приятный и веселый."
    },
    {
        spanish: "El perro negro es fiel y activo.",
        russian: "Черная собака верная и активная."
    },
    {
        spanish: "La manzana verde está un poco cara.",
        russian: "Зеленое яблоко немного дорогое."
    },
    {
        spanish: "El estudiante ruso va a la universidad en bicicleta.",
        russian: "Русский студент едет в университет на велосипеде."
    },
    {
        spanish: "La calle principal de la ciudad es muy moderna.",
        russian: "Главная улица города очень современная."
    },
    {
        spanish: "El coche deportivo es cómodo pero caro.",
        russian: "Спортивная машина удобная, но дорогая."
    },
    {
        spanish: "Hoy hace un día gris y melancólico.",
        russian: "Сегодня серый и меланхоличный день."
    },
    {
        spanish: "La tienda de ropa está cerrada ahora.",
        russian: "Магазин одежды сейчас закрыт."
    },
    {
        spanish: "El joven estudiante trabaja para ganar dinero.",
        russian: "Молодой студент работает, чтобы заработать деньги."
    },
    {
        spanish: "La chica morena tiene ojos grandes y atractivos.",
        russian: "У смуглой девушки большие и привлекательные глаза."
    },
    {
        spanish: "El piso nuevo es grande y luminoso.",
        russian: "Новая квартира большая и светлая."
    },
    {
        spanish: "Me gusta desayunar tostadas con café por la mañana.",
        russian: "Мне нравится завтракать тостами с кофе по утрам."
    },
    {
        spanish: "El transporte público en esta ciudad es muy barato.",
        russian: "Общественный транспорт в этом городе очень дешевый."
    },
    {
        spanish: "La vida en la capital es diferente a la vida en el campo.",
        russian: "Жизнь в столице отличается от жизни в деревне."
    },
    {
        spanish: "El pelo rubio de la chica brilla bajo el sol.",
        russian: "Светлые волосы девушки блестят на солнце."
    },
    {
        spanish: "La residencia estudiantil está cerca de la universidad.",
        russian: "Студенческое общежитие находится рядом с университетом."
    },
    {
        spanish: "El color rojo es muy popular en España.",
        russian: "Красный цвет очень популярен в Испании."
    },
    {
        spanish: "Mi amigo alemán habla español muy bien.",
        russian: "Мой немецкий друг очень хорошо говорит по-испански."
    },
    {
        spanish: "La leche fresca es buena para la salud.",
        russian: "Свежее молоко полезно для здоровья."
    },
    {
        spanish: "El tiempo libre es importante para descansar.",
        russian: "Свободное время важно для отдыха."
    },
    {
        spanish: "La noche en la ciudad es muy animada.",
        russian: "Ночь в городе очень оживленная."
    },
    {
        spanish: "El estudiante inglés vive en una casa blanca.",
        russian: "Английский студент живет в белом доме."
    },
    {
        spanish: "La chica elegante compra ropa cara.",
        russian: "Элегантная девушка покупает дорогую одежду."
    },
    {
        spanish: "El bar de la esquina sirve café muy bueno.",
        russian: "Бар на углу подает очень хороший кофе."
    },
    {
        spanish: "Mi amigo trabaja mucho pero gana poco dinero.",
        russian: "Мой друг много работает, но мало зарабатывает."
    },
    {
        spanish: "La vida en Londres es muy diferente a la vida en Madrid.",
        russian: "Жизнь в Лондоне очень отличается от жизни в Мадриде."
    },
    {
        spanish: "El perro pequeño es muy activo y juguetón.",
        russian: "Маленькая собака очень активная и игривая."
    },
    {
        spanish: "La universidad pública ofrece cursos de español.",
        russian: "Государственный университет предлагает курсы испанского языка."
    },
    {
        spanish: "En octubre las hojas cambian de color.",
        russian: "В октябре листья меняют цвет."
    },
    {
        spanish: "Los jueves tengo una reunión importante.",
        russian: "По четвергам у меня важная встреча."
    },
    {
        spanish: "Marzo es el mes de la primavera.",
        russian: "Март - весенний месяц."
    },
    {
        spanish: "El domingo es un día de descanso.",
        russian: "Воскресенье - день отдыха."
    },
    {
        spanish: "En abril llueve mucho.",
        russian: "В апреле много дождей."
    },
    {
        spanish: "Los lunes son difíciles para mí.",
        russian: "Понедельники трудны для меня."
    },
    {
        spanish: "Junio es el mes de mi cumpleaños.",
        russian: "Июнь - месяц моего дня рождения."
    },
    {
        spanish: "El sábado vamos a la playa.",
        russian: "В субботу мы идем на пляж."
    },
    {
        spanish: "En mayo celebramos el Día de la Madre.",
        russian: "В мае мы празднуем День матери."
    },
    {
        spanish: "Los miércoles practico deporte.",
        russian: "По средам я занимаюсь спортом."
    },
    {
        spanish: "Noviembre es un mes fresco.",
        russian: "Ноябрь - прохладный месяц."
    },
    {
        spanish: "El martes tengo una cita con el médico.",
        russian: "Во вторник у меня прием у врача."
    },
    {
        spanish: "En agosto muchas personas están de vacaciones.",
        russian: "В августе многие люди в отпуске."
    },
    {
        spanish: "Los viernes salgo con mis amigos.",
        russian: "По пятницам я выхожу с друзьями."
    },
    {
        spanish: "Diciembre es el último mes del año.",
        russian: "Декабрь - последний месяц года."
    },
    {
        spanish: "El lunes comienzo una dieta nueva.",
        russian: "В понедельник я начинаю новую диету."
    },
    {
        spanish: "En febrero celebramos San Valentín.",
        russian: "В феврале мы празднуем День святого Валентина."
    },
    {
        spanish: "Los domingos leo un libro nuevo.",
        russian: "По воскресеньям я читаю новую книгу."
    },
    {
        spanish: "Julio es perfecto para las vacaciones de verano.",
        russian: "Июль идеален для летних каникул."
    },
    {
        spanish: "El sábado hago la compra semanal.",
        russian: "В субботу я делаю еженедельные покупки."
    },
];
let currentSentenceIndex = 0;
let currentSentence = {};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateSentenceExercise() {
    currentSentence = sentences[currentSentenceIndex];
    const words = currentSentence.spanish.split(' ').map(word => word.toLowerCase().replace(/[.,!?]/g, ''));
    const shuffledWords = shuffleArray([...words]);

    document.getElementById('russianSentence').textContent = currentSentence.russian;

    const wordBank = document.getElementById('word-bank');
    wordBank.innerHTML = '';
    shuffledWords.forEach(word => {
        const wordTile = createWordTile(word, true);
        wordBank.appendChild(wordTile);
    });

    document.getElementById('sentence-construction').innerHTML = '';
    document.getElementById('sentenceFeedback').textContent = '';
    document.getElementById('correctSentence').style.display = 'none';
    document.getElementById('checkSentenceButton').style.display = 'block';
    document.getElementById('nextSentenceButton').style.display = 'none';
    updateProgress();
}

function createWordTile(word, inBank) {
    const tile = document.createElement('div');
    tile.className = 'word-tile';
    tile.textContent = word;
    tile.onclick = inBank ? () => moveWordToSentence(tile) : () => moveWordToBank(tile);
    return tile;
}

function moveWordToSentence(tile) {
    const sentenceConstruction = document.getElementById('sentence-construction');
    const newTile = createWordTile(tile.textContent, false);
    sentenceConstruction.appendChild(newTile);
    tile.remove();
}

function moveWordToBank(tile) {
    const wordBank = document.getElementById('word-bank');
    const newTile = createWordTile(tile.textContent, true);
    wordBank.appendChild(newTile);
    tile.remove();
}

function checkSentence() {
    const constructedSentence = Array.from(document.getElementById('sentence-construction').children)
        .map(tile => tile.textContent)
        .join(' ')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim();

    const correctSentence = currentSentence.spanish.toLowerCase().replace(/[.,!?]/g, '').trim();
    const feedbackElement = document.getElementById('sentenceFeedback');
    const correctSentenceElement = document.getElementById('correctSentence');

    if (constructedSentence === correctSentence) {
        feedbackElement.textContent = '¡Correcto! Предложение составлено верно.';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = 'Неправильно. Правильный ответ:';
        feedbackElement.style.color = 'red';
        correctSentenceElement.textContent = currentSentence.spanish;
        correctSentenceElement.style.display = 'block';
    }

    document.getElementById('checkSentenceButton').style.display = 'none';
    document.getElementById('nextSentenceButton').style.display = 'block';
}

function nextSentence() {
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    generateSentenceExercise();
}

function updateProgress() {
    const progressElement = document.getElementById('progressIndicator');
    progressElement.textContent = `Предложение ${currentSentenceIndex + 1} из ${sentences.length}`;
}

function shuffleSentences() {
    shuffleArray(sentences);
    currentSentenceIndex = 0;
    generateSentenceExercise();
}

document.getElementById('checkSentenceButton').addEventListener('click', checkSentence);
document.getElementById('nextSentenceButton').addEventListener('click', nextSentence);
document.getElementById('shuffleSentencesButton').addEventListener('click', shuffleSentences);

// Инициализация упражнения
generateSentenceExercise();
