var startButton = document.querySelector("#start-btn");
var questionContain = document.querySelector("#questionContainer");
var questionEl = document.getElementById('question');
var answersEL = document.getElementById('answerBtns');
var sec = 150;
var questionIndex = 0
var questionsAnswers = [
    {
       title: "this is question 1",
       options: ["op 1", "op2", "op3", "op4"],
       correct: "op3", 
    },
    {
        title: "Which of these is a primitive data type?",
        options: ["Boolean", "Object", "String", "Array"],
        correct: "Boolean",
    },
    {
        title: "this is question 3",
        options: ["op 1", "op2", "op3", "op4"],
        correct: "op4",
    },
    {
        title: "this is question 4",
        options: ["op 1", "op2", "op3", "op4"],
        correct: "op2",
    },
    {
        title: "this is question 5",
        options: ["op 1", "op2", "op3", "op4"],
        correct: "op1",
    },
]

function startquiz() {
    questionContain.style.visibility = "visible";
    startButton.disabled = true;
    var timer = setInterval(function(){
        document.getElementById("timer").innerHTML= sec + " sec";
        sec--;
        if (sec < 0) {
// Put endgame function here
            clearInterval(timer);
        }
    }, 1000);
    showQuestion(questionIndex)
}

function showQuestion(currentIndex){
 answersEL.innerHTML = ''
 questionEl.textContent = questionsAnswers[currentIndex].title
 var options = questionsAnswers[currentIndex].options
 options.forEach((option)=>{
    var optionBtn = document.createElement('button');
    optionBtn.textContent = option
    optionBtn.onclick = answerClick
    answersEL.append(optionBtn)

 })
}
function answerClick() {
var correctOpt =  questionsAnswers[questionIndex].correct
var clickedAnswer = this.textContent
if (correctOpt!= clickedAnswer ) {
    sec -= 10; 
    console.log('incorrectAnswer')
}
questionIndex++ 
if(questionIndex <= questionsAnswers.length) {
showQuestion(questionIndex)
} else {
    // endgame function goes here
    console.log('game has ended')
}
}


// var scores = JSON.parse(localStorage.getItem('scores')) || []
// localStorage.setItem('scores', JSON.stringify(newScores ))

// TODO: Create Show Question Function 
// - Has to check current question 
// - Clear previous question 
// - Displays current question 

// TODO: Create Answer Click Function 
// - Compare answer clicked to correct answer
// - if answer is correct then use show question function 
// - if answer is incorrect then subtract time from clock 

// TODO: Create End Quiz Function
// - Hides quiz container and shows endgame container with form 

// TDDO: Create Submit Score Function 
// - takes current time from secs and initials from form input
// - gets scores from localstorage
// - combines time and intials into obj
// - pushes scoreObj to localstorage array. 

// TODO: Create Display Scores function 
// - Hides Current page
// - gets scores from localstorage 
// - loops through scores array to create score list. 










startButton.addEventListener("click", startquiz)

