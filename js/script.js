let startBtn = document.querySelector(".start_btn");
let exitBtn = document.querySelector(".quit");
let continueBtn = document.querySelector(".restart");
let instructions = document.querySelector(".info_box");
let quiz = document.querySelector(".quiz_box");
let timeLeft = document.querySelector(".timer_sec");
let nextBtn = document.querySelector(".next_btn");
let questionText = document.querySelector(".que_text");
let optionsList = document.querySelector(".option_list");
let questionIndex = document.querySelector(".total_que");

let maxTime = 15;
let interval;
let queNum = questionIndex.innerText;
let choices = [];
let score = 0;

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
        `<div class="option"><span>${questions[queNum].options[0]}</span></div>` +
        `<div class="option"><span>${questions[queNum].options[1]}</span></div>` +
        `<div class="option"><span>${questions[queNum].options[2]}</span></div>` +
        `<div class="option"><span>${questions[queNum].options[3]}</span></div>`;

    questionText.innerHTML = que;
    optionsList.innerHTML = opt;

    let select = document.querySelectorAll(".option");
    console.log(select);

    for (let i = 0; i < select.length; i++) {
        select[i].setAttribute("onclick", "optionSelected(this)");
        select;
    }

    questionIndex.innerText = `Question ${++queNum} out of ${questions.length}`;
    startTimer();
}

function optionSelected(answer) {
    let userAns = answer.innerText;
    let correctAns = questions[queNum - 1].answer;
    if (userAns === correctAns) {
        score++;
        answer.classList.add("correct");
    } else {
        answer.classList.add("incorrect");
    }
    console.log(correctAns);
    console.log(userAns);
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
