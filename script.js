// GLOBAL SCOPE VARIABLES
let startButton = document.getElementById('start-btn');
let questionEl = document.getElementById('question')
let answerBtnEl = document.getElementById('answer-buttons')
let questionContainerEl = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
let timeEl;

// let correctAnswers = 0
// let wrongAnswers = 0
// let finalScore = 0

//Here we have our constant array of questions, which contains objects with key value pairs. There will be a for loop that will cycle through the array of objects and plugs the text content into buttons using jQuery. 
const questions = [
    {
        question: "Where do domestic carrots originate from?",
        choices: [
            { text: 'central asia', correct: true },
            { text: 'australia', correct: false},
            { text: 'canada', correct: false },
            { text: 'the midwest', correct: false},
        ],
        answer: 0
    },
    {
        question: "What is kombucha?",
        choices: [
            { text: 'sparkling vineager', correct: false },
            { text: 'old soda', correct: false},
            { text: 'fermented tea', correct: true },
            { text: 'fermented juice', correct: false},
        ],
        answer: 2
    },
    {
        question: "What is the main ingredient in tequila?",
        choices: [
            { text: 'corn', correct: false },
            { text: 'agave', correct: true},
            { text: 'lime peel', correct: false },
            { text: 'wheat', correct: false},
        ],
        answer: 1
    },
    {
        question: "What year was The Wedding Singer made?",
        choices: [
            { text: '1985', correct: false },
            { text: '1998', correct: true },
            { text: '2001', correct: false },
            { text: '1980', correct: false},
        ],
        answer: 1
    },
]

//A click event on the start button. This will launch the questions and begin the timer.
startButton.addEventListener('click', startGame)

//This function decrements the value of the #time id. Once the timer hits 0, the interval will be cleared.
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


let correctCount = document.querySelector('#counter-correct');
let incorrectCount = document.querySelector('#counter-incorrect');


function changePoints() {
    if (questions.choices.correct === true){
        correctCount++;
    }
    else {
        incorrectCount++;
    }
}

//This function is the main launching point for the game. The .hide class coming from CSS  will display block the start button and simutaneously remove the display block from the question container. Additionally, the setInterval function will begin decrementing the timeEl by 1 second. 
function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');
    timeEl = setInterval(quizTime, 1000);
    setNextQuestion();
}

//setNextQuestion is taking the values gathered from showQuestion and running through the empty values in a random order each time. This is because we created the variable shuffledQuestions in the main start function which uses Math.random to shuffle through the questions differently each time you take the quiz.
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//showQuestion is punching the text into the document through the use of a for loop and jQuery. At the start of the function, there is a .empty() to clear each object after the click event has happened. Without this, the questions began stacking on top of each other. The questionEl then gains data from question array.
function showQuestion(currentQuestion) {
    $('#answer-buttons').empty()
    $('#question').empty()
    questionEl.innerText = currentQuestion.question

    //This for loop is running through the question array, and then the property choices inside of each object. As the for loop runs it will add text and class to each button after each click. Once there are no more questions, the question container will be empty. Need to work on how it switches to the high score html page.
    for (let i = 0; i < currentQuestion.choices.length; i++) {

        // 1 2 3 punch to put on page!! (Help from Tom McCarthy)

        //1 make a piece of html with jquery. In this case, the <button> tag.
        var button = $('<button>')

        //2 dress it up as you want it , class names text, id's, ect.
        button.text(currentQuestion.choices[i].text)
        button.addClass('btn')    
        button.addClass('choice-btn')     

        //3 .append to page! aka stick the button(s) you just made on the page!
        $('#answer-buttons').append(button)
    }   
}

//Here we have an on click event using jQuery syntax. When each time a choice button is clicked, the questions being displayed will be coming from the question array. The ++ is what makes [currentQuestionIndex] increase by one with each click event.
$(document).on('click', '.choice-btn', () => {
    currentQuestionIndex++
    showQuestion(shuffledQuestions[currentQuestionIndex])
})


//This will hopefully be the function that logs the answers into local storage.
function selectAnswer() {

}


function goToHighscore() {

}
