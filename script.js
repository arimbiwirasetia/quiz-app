const quizData = [
    {
        question: "What is the most used programming language in 2021?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",    
    }, 
    {
        question: "How old is Florin?",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "c",
    }, 
    {
        question: "What is the capital of America?",
        a: "Washington, D.C.",
        b: "San Francisco",
        c: "New York",
        d: "Washington",
        correct: "a",
    }, 
    {
        question: "What is a flying dinosaur called?",
        a: "Velociraptor",
        b: "Pterodactyl",
        c: "Archaeopteryx",
        d: "Stegosaurus",
        correct: "b",
    }, 
    {
        question: "How many letters are there in the alphabet?",
        a: "23",
        b: "24",
        c: "25",
        d: "26",
        correct: "d",
    }
]

const quiz = document.getElementById("quiz");
const answerELs = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData [currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerELs.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerELs.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
                
                <button onclick="location.reload()">Reload</button>    
            `;
        }
    }
})