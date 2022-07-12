var startButton = document.querySelector("#start-btn");
var questionContain = document.querySelector("#questionContainer");

var questionsAnswers = [
    {
       title: "this is question 1",
       options: ["op 1", "op2", "op3", "op4"],
       correct: "op3", 
    },
    {
        title: "this is question 2",
        options: ["op 1", "op2", "op3", "op4"],
        correct: "op1",
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
    var sec = 150;
    startButton.disabled = true;
    var timer = setInterval(function(){
        document.getElementById("timer").innerHTML= sec + " sec";
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
   
}



startButton.addEventListener("click", startquiz)