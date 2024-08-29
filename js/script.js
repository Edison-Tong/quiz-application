let startBtn = document.querySelector(".start_btn");
let exitBtn = document.querySelector(".quit");
let continueBtn = document.querySelector(".restart");
let instructions = document.querySelector(".info_box");
let quiz = document.querySelector(".quiz_box");
let timeLeft = document.querySelector(".timer_sec");
let nextBtn = document.querySelector(".next_btn");
let question = document.querySelector(".que_text");

let maxTime = 15;
let interval;

function showInstructions() {
    instructions.classList.add("activeInfo");
    exitBtn.addEventListener("click", exitQuiz);
    continueBtn.addEventListener("click", startQuiz);
}

function startQuiz() {
    instructions.classList.remove("activeInfo");
    quiz.classList.add("activeQuiz");
    nextBtn.classList.add("show");
    displayQuestion();
    startTimer();
}

function exitQuiz() {
    instructions.classList.remove("activeInfo");
}

function displayQuestion() {
    console.log("questions");
}

function nextQuestion() {
    displayQuestion();
    startTimer();
}

function startTimer() {
    clearInterval(interval);
    timeLeft.innerText = maxTime;
    interval = setInterval(timer, 250);
    function timer() {
        timeLeft.innerText--;
        if (timeLeft.innerText == 0) {
            console.log(0);
            clearInterval(interval);
        }
    }
}

startBtn.addEventListener("click", showInstructions);
nextBtn.addEventListener("click", nextQuestion);
