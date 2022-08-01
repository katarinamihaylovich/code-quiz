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


var questions = [{
    question: "what's the deal with this?",
    choices: ["1 choice", "2 choice", "3 choice", "4 choice"],
    answer: "2",
}, {
    question: "what's the deal with this",
    choices: ["1 choice", "2 choice", "3 choice"],
    answer: "2",
}, {
    question: "what's the deal with this",
    choices: ["1 choice", "2 choice", "3 choice"],
    answer: "2",
}, {
    question: "what's the deal with this",
    choices: ["1 choice", "2 choice", "3 choice"],
    answer: "2",
}, {
    question: "what's the deal with this",
    choices: ["1 choice", "2 choice", "3 choice"],
    answer: "2",
},]


var containerEl = document.getElementById("container");
var ulEl = document.querySelector(".answerButtons");
var currentQuestionAll = 0;


function createQuestion(){
    containerEl.textContent="";
    var currentQuestion = questions[currentQuestionAll];
    var questionName = document.createElement("h2");
    questionName.textContent = currentQuestion.question;
    containerEl.appendChild(questionName);

    for (var i = 0; i < currentQuestion.choices.length; i++){
        var liEl = document.createElement("li");
        liEl.textContent = currentQuestion.choices[i];
        ulEl.appendChild(liEl);
    }
    containerEl.appendChild(ulEl);
    console.log("testing");
}


var timer = 75;
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startButton");

startBtn.addEventListener("click", function(){
    createQuestion();
    
    myInterval = setInterval(function(){
        timerEl.textContent = (timer + " seconds remaining");
        timer--;
        if (timer < 0){
            clearInterval(myInterval);
        }
    }, 1000)
});