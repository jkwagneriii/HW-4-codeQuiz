//WORK ON COMMENTS FOR SILLY TA
var userScore = 0;
var quizContainer = document.querySelector("#quizContainer");
var highScore;
var questionText = document.querySelector("#question");


//WORK ON COMMENTS FOR PAUL OKAY PAUL NEEEEEDS IT

quizContainer.addEventListener("click", function(event) {
    var element = event.target;
})

//WORK ON COMMENTS
var questions = [
    {
        question: "Here is a question",
        choices: ["x", "y", "z", "f"],
        answer: 2
    },
    {
        question: "Here is a question1",
        choices: ["x", "y", "z", "f"],
        answer: 2
    },
    {
        question: "Here is a question2",
        choices: ["x", "y", "z", "f"],
        answer: 2
    },
    {
        question: "Here is a question3",
        choices: ["x", "y", "z", "f"],
        answer: 2
    }
]

//COMMENTS NEEDED COMMUNICASH
for (let index = 0; index < questions.length; index++) {
    var questionText =  questions[index].question;
    var choicesText = questions[index].choices;
    var correctAnswer = questions[index].answer;
    drawQuestionText(questionText, choicesText, correctAnswer);
}


//This function should display the QUESTION as an h1 and display each CHOICE inside a button.

function drawQuestionText (question, choices, correct) {
    console.log(question);
    console.log(choices);
    console.log(correct);
    //Loop through the choices array and add element back into HTML
    //Turn question into HTML element as well (h1)

    // questionText.textContent = questions
}


$(document).on('click', '.choice-btn', () => {
    console.log('current qesiotn index!!!', currentQuestionIndex)
    currentQuestionIndex++
    showQuestion(shuffledQuestions[currentQuestionIndex])
})

$(document).on('click', '.start-btn', () =>)



// Countdown Timer WORKS!!! Still need to figure out how to link this and getting an answer wrong
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
// This is supposed to be the function that makes the timer start once I click the Start Game button
window.body.startbutton.onclick = function () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};



$(document).on('click', '.start-btn', () => {
    startTimer();
})





// for (var choice in questions.choices) {
//     console.log(choice);
//     // if (questions.hasOwnProperty(key)) {
//     //     console.log(choice);
//     // }
// } 



// for (var index = 0; index < questions.length; index++) {

//     var question = questions[index].question;
//     var choices = questions[index].question;
//     console.log(question);
//     console.log(choices)
    
// }



// var p = document.p;
// //Create question elements to appear on the page
// var questionEl = document.getElementById("question");
// p.textContent = JSON.stringify(questions);

// p.appendChild(questionEl);

