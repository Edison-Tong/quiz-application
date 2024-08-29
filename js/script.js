let startBtn = document.querySelector(".start_btn");
let exitBtn = document.querySelector(".quit");
let continueBtn = document.querySelector(".restart");
let instructions = document.querySelector(".info_box");
let quiz = document.querySelector(".quiz_box");
let timeLeft = document.querySelector(".timer_sec");

function showInstructions() {
    instructions.classList.add("activeInfo");
    exitBtn.addEventListener("click", exitQuiz);
    continueBtn.addEventListener("click", startQuiz);
}

function startQuiz() {
    instructions.classList.remove("activeInfo");
    quiz.classList.add("activeQuiz");
    startTimer();
}

function exitQuiz() {
    instructions.classList.remove("activeInfo");
}

function cycleQuestions() {
    console.log("questions");
}

function startTimer() {
    let interval = setInterval(() => {
        timeLeft.innerText--;
        if (timeLeft.innerText == 0) {
            console.log("done");
            clearInterval(interval);
        }
    }, 1000);
}

startBtn.addEventListener("click", showInstructions);
