var startButton = document.getElementById('start-btn');
var questionContain = document.getElementById('questionContainer');
var questionEl = document.getElementById('question');
var answersEL = document.getElementById('answerBtns');
var form = document.getElementById('highscoreForm')
var submit = document.getElementById('submit')
var highscorePage = document.getElementById('Highscores')
var sec = 120;
var timer;
var questionIndex = 0
var questionsAnswers = [
    {
       title: "Which of the following is an advantage of using JavaScript?",
       options: ["Less server interaction", "Immediate feedback to the visitors",
        "Increased interactivity", "All of the above"],
       correct: "All of the above", 
    },
    {
        title: "Which of these is a primitive data type?",
        options: ["Boolean", "Object", "String", "Array"],
        correct: "Boolean",
    },
    {
        title: "Which of the following is true about cookie handling in JavaScript?",
        options: ["JavaScript can manipulate cookies using the cookie property of the document object."
        , "JavaScript can read, create, modify and delete cookies or cookies that apply to the current web page."
        , "Both of the above."
        , "None of the above"],
        correct: "Both of the above.",
    },
    {
        title: "What is JavaScript?",
        options: ["JavaScript is a scripting language used to make the website interactive",
         "JavaScript is an assembly language used to make the website interactive",
          "JavaScript is a compiled language used to make the website interactive",
           "None of the mentioned"],
        correct: "JavaScript is a scripting language used to make the website interactive",
    },
    {
        title: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        options: ["Position", "Window", "Standard", "Location"],
        correct: "Window",
    },
]

// - Makes quiz visible
// - Sets timer to 120 seconds 
// - Ends quiz when the time is up 
// - Shows first question 

function startquiz() {
    questionContain.style.visibility = 'visible';
    startButton.disabled = true;
    timer = setInterval(function(){
        document.getElementById('timer').innerHTML= sec + ' sec';
        sec--;
        if (sec < 0) {
            endQuiz()
            clearInterval(timer);
        }
    }, 1000);
    showQuestion(questionIndex)
}

// Create Show Question Function 
// - Check current question 
// - Clear previous question 
// - Displays current question

function showQuestion(currentIndex){
    answersEL.innerHTML = ''
    questionEl.textContent = questionsAnswers[currentIndex].title
    var options = questionsAnswers[currentIndex].options
    options.forEach((option)=>{
        var optionBtn = document.createElement('button');
        optionBtn.style.display = 'flex'
        optionBtn.style.margin = '10px'
        optionBtn.textContent = option
        optionBtn.onclick = answerClick
        answersEL.append(optionBtn)

    
 })
}

// - Compare answer clicked to correct answer
// - if answer is correct then use show question function 
// - if answer is incorrect then subtract time from clock 

function answerClick() {
    var correctOpt =  questionsAnswers[questionIndex].correct
    var clickedAnswer = this.textContent
    if (correctOpt!= clickedAnswer ) {
        sec -= 15; 
}
    questionIndex++ 
    if(questionIndex < questionsAnswers.length) {
    showQuestion(questionIndex)
} 
else {
    clearInterval(timer);
    endQuiz()
}
}

// - Hides quiz container and shows endgame container with form 

function endQuiz() {
    questionContain.remove();
    form.style.visibility = 'visible';
}

// - takes current time from secs and initials from form input
// - gets scores from localstorage
// - combines time and intials into obj
// - pushes scoreObj to localstorage array.
// - Hides Current page
// - gets scores from localstorage 
// - loops through scores array to create score list.
function sumbitHighscore() {

    highscorePage.style.visibility = 'visible';

    var storeHighScores = localStorage.getItem('highScores');
    if (storeHighScores) {
        storeHighScores = JSON.parse(storeHighScores);
    } else {
        storeHighScores = [];
    }

    var initials = document.getElementById('initials').value;
    storeHighScores.push({
        initials: initials,
        score: sec
    });
    localStorage.setItem('highScores', JSON.stringify(storeHighScores));

    var listEl = document.createElement('ul')
    listEl.style.display = 'flex'
    listEl.style.justifyContent = 'center'
    listEl.style.flexDirection = 'column'
    listEl.style.alignItems = 'center'

    for (var i = 0; i < storeHighScores.length; i++){
        var scores = document.createElement('li')
        scores.innerHTML = storeHighScores[i].initials + ': ' +storeHighScores[i].score
        listEl.appendChild(scores)
    }
    highscorePage.appendChild(listEl)

    form.remove();
}



startButton.addEventListener('click', startquiz)
submit.addEventListener('click', sumbitHighscore)

 




 







 















