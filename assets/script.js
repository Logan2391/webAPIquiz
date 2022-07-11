var startButton = document.querySelector("#start-btn")
var questions = document.querySelector("#questionContainer")

function startquiz() {
    questions.style.visibility = "visible";
    var sec = 60;
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