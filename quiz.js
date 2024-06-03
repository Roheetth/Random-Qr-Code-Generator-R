const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: "Jupiter"
    },
    // Add more questions as needed
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion(question) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => handleAnswer(option, question.answer);
        optionsElement.appendChild(button);
    });
}

function handleAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion(quizQuestions[currentQuestionIndex]);
    } else {
        displayScore();
    }
}

function displayScore() {
    const quizElement = document.getElementById('quiz');
    quizElement.innerHTML = `<h2>Quiz complete! Your score is ${score} out of ${quizQuestions.length}.</h2>`;
}

document.addEventListener('DOMContentLoaded', () => {
    shuffleArray(quizQuestions);
    displayQuestion(quizQuestions[currentQuestionIndex]);
});
