let startBtn = document.querySelector(".start_btn");
let exitBtn = document.querySelector(".quit");
let continueBtn = document.querySelector(".restart");
let instructions = document.querySelector(".info_box");
let quiz = document.querySelector(".quiz_box");
let timeLeft = document.querySelector(".timer_sec");
let nextBtn = document.querySelector(".next_btn");

let maxTime = 15;

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

function nextQuestion() {
    timeLeft.innerText = maxTime;
    startTimer();
}

function startTimer() {
    let interval = setInterval(() => {
        timeLeft.innerText--;
        if (timeLeft.innerText == 0) {
            clearInterval(interval);
            nextBtn.classList.add("show");
        }
    }, 250);
}

startBtn.addEventListener("click", showInstructions);
nextBtn.addEventListener("click", nextQuestion);
