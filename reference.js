// GLOBAL SCOPE VARIABLES
let startButton = document.getElementById('start-btn');
let questionContainerEl = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
let questionEl = document.getElementById('question')
let answerBtnEl = document.getElementById('answer-buttons')
let timeEl;

startButton.addEventListener('click', startGame)

function quizTime() {
    var timeElapsed = parseInt(time.textContent);
    timeElapsed--
    // Changed timeElapsed number is added to the span #time
    time.textContent = timeElapsed;
    // If/else conditional to indicate when to stop quiz --> use clearInterval();
    if (timeElapsed === 0) {
        clearInterval(timeEl);
    }
}


function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide');
    timeEl = setInterval(quizTime, 1000)
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(currentQuestion) {
    $('#answer-buttons').empty()
    $('#question').empty()
    questionEl.innerText = currentQuestion.question

    //console.log('question choices ??', currentQuestion)

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        //console.log('i??', i );
        
        //console.log('singldue due ???????',  currentQuestion.choices[i].text)
        // 1 2 3 punch to put on page!!

        //1 make a piece of html with jquery
        var button = $('<button>')

        //2 dress it up as u want it , class names text, id's, ect
        button.text(currentQuestion.choices[i].text)
        button.addClass('btn')    
        button.addClass('choice-btn')     

        //3 .append to page!! aka stick the button u just made on the page!
        $('#answer-buttons').append(button)
    }   
}


$(document).on('click', '.choice-btn', () => {
    console.log('current qesiotn index!!!', currentQuestionIndex)
    currentQuestionIndex++
    showQuestion(shuffledQuestions[currentQuestionIndex])
})



function selectAnswer() {

}

const questions = [
    {
        question: "How many friends do I have",
        choices: [
            { text: 'so many', correct: true },
            { text: 'too many', correct: false},
            { text: '11', correct: false },
            { text: 'only some', correct: false},
        ],
        answer: 0
    },
    {
        question: "What does my hair look like?",
        choices: [
            { text: 'old', correct: false },
            { text: 'french', correct: false},
            { text: '11', correct: true },
            { text: 'octupus', correct: false},
        ],
        answer: 2
    },
    {
        question: "Where are my keys?",
        choices: [
            { text: '11', correct: false },
            { text: 'the alley', correct: true},
            { text: 'with allie', correct: false },
            { text: 'squid', correct: false},
        ],
        answer: 1
    },
    {
        question: "How many questions are there?",
        choices: [
            { text: '5', correct: false },
            { text: '4', correct: true },
            { text: '11', correct: false },
            { text: 'eight', correct: false},
        ],
        answer: 1
    },
 
]

