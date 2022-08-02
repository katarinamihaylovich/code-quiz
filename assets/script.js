// var seconds = 75;

// var countDown;
// function timeFunction(){
//     if (seconds < 75) {
//         document.getElement("#timer").innerHTML = seconds;
//     }
//     if (seconds > 0){
//         seconds--;
//     } else {
//         clearInterval(countDown);
//         alert("Out of time! Failed.");
//     }
//     document.getElement("#digitsLeft").onkeypress = function(){
//     if(!timer){
//         timer = window.setInterval(function(){
//             timeFunction();
//         }, 1000);
//     }
// }}

// document.getElementById("timer").innerHTML= seconds;

var title = document.getElementById("title");

var questions = [{
    question: "Commonly used data types do NOT include:",
    choices: ["numbers", "strings", "booleans", "alerts"],
    answer: "alerts",
}, {
    question: "The conditional if/else statement is enclosed with _______.",
    choices: ["square brackets", "curly brackets", "parentheses", "quotes"],
    answer: "curly brackets",
}, {
    question: "Arrays in JavaScript can be used to store:",
    choices: ["numbers and strings", "booleans", "other arrays", "all of the above"],
    answer: "all of the above",
}, {
    question: "String values must be enclosed in ______ when being assigned to variables.",
    choices: ["quotes", "commas", "curly brackets", "parentheses"],
    answer: "quotes",
}, {
    question: "A very useful tool used during development and for printing content to the debugger is _______.",
    choices: ["JavaScript", "console.log", "Terminal/Bash", "for loops"],
    answer: "console.log",
},]


var containerEl = document.getElementById("container");
var ulEl = document.querySelector(".answerButtons");
var currentQuestionAll = 0;
var questionName = document.createElement("h2");

function createQuestion(){
    var currentQuestion = questions[currentQuestionAll];
    
    questionName.textContent = currentQuestion.question;
    containerEl.appendChild(questionName);
    ulEl.textContent="";

    for (var i = 0; i < currentQuestion.choices.length; i++){
        var liEl = document.createElement("button");
        liEl.textContent = currentQuestion.choices[i];
        liEl.onclick = checkAns;
        ulEl.appendChild(liEl);
        liEl.setAttribute("style","color:darkmagenta; font-size: 20px; font-family:Verdana, Geneva, Tahoma, sans-serif; background-color:white; margin-bottom:10px; display:block; border-radius:4px; border-color:darkmagenta;");
    }

    containerEl.appendChild(ulEl);
    console.log("testing");
}


var timer = 75;
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startButton");

startBtn.addEventListener("click", function(){
    title.style.display = "none";
    startBtn.style.display = "none";
    createQuestion();
    
    myInterval = setInterval(function(){
        timerEl.textContent = (timer + " seconds remaining");
        timer--;
        if (timer < 0){
            clearInterval(myInterval);
        }
    }, 1000)
});

var score = 0;
var scoreEl = document.getElementById("score");

// containerEl.addEventListener("click", function(event){
//     if(event.target.matches("button")){
//         // var currentQuestion = questions[currentQuestionAll];
//         // var userChoice = event.target.textContent;

        
//         ulEl.textContent = "";
        
//         if (currentQuestionAll === questions.length){
//             gameOver();
//         } else {
//             createQuestion();
//         }
//     }
// });

function checkAns() {
    var currentQuestion = questions[currentQuestionAll];
    var userChoice = event.target.textContent;
    if (userChoice === currentQuestion.answer){;
        score += 10;
        scoreEl.textContent = ("Correct! +" + score);
    } else {
        score -= 5;
        scoreEl.textContent = ("Incorrect! " + score);
    }
    questionName.textContent = "";
    currentQuestionAll++;
    if (currentQuestionAll === questions.length){
        gameOver();
    } else {
        createQuestion();
    }
    console.log("check");
}


function gameOver() {
    containerEl.textContent = "";
    var gameText = containerEl.appendChild(document.createElement("h2"));
    gameText.textContent = "Game Over!";
    var finalScore = containerEl.appendChild(document.createElement("h3"));

    if (score === (questions.length * 10)){
        finalScore.textContent = ("Maximum score achieved! Total: " + score);
    } else{
        finalScore.textContent = ("Your final score is" + score);
    }
}