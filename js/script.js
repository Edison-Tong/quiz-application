let startBtn = document.querySelector(".start_btn");
let exitBtn = document.querySelector(".quit");
let continueBtn = document.querySelector(".restart");
let instructions = document.querySelector(".info_box");
let quiz = document.querySelector(".quiz_box");
let timeLeft = document.querySelector(".timer_sec");
let nextBtn = document.querySelector(".next_btn");
let questionText = document.querySelector(".que_text");
let optionsList = document.querySelector(".options_list");
let questionIndex = document.querySelector(".total_que");

let maxTime = 15;
let interval;
let queNum = questionIndex.innerText;
let choices = [];

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
    let que = `<span> ${questions[queNum].numb}) ${questions[queNum].question}</span>`;
    let opt =
        `<div class="option"><span>1) ${questions[queNum].options[0]}</span></div>` +
        `<div class="option"><span>2) ${questions[queNum].options[1]}</span></div>` +
        `<div class="option"><span>3) ${questions[queNum].options[2]}</span></div>` +
        `<div class="option"><span>4) ${questions[queNum].options[3]}</span></div>`;

    questionIndex.innerText = ++queNum;

    questionText.innerHTML = que;
    optionsList.innerHTML = opt;
}

function startTimer() {
    clearInterval(interval);
    timeLeft.innerText = maxTime;
    interval = setInterval(timer, 250);
    function timer() {
        timeLeft.innerText--;
        if (timeLeft.innerText == 0) {
            clearInterval(interval);
        }
    }
}

startBtn.addEventListener("click", showInstructions);
nextBtn.addEventListener("click", displayQuestion);
