// Quiz questions and answers
const Start = document.querySelector(".Start button");
const instruction = document.querySelector(".instruction");
const exit = instruction.querySelector(".button .I");
const cont = instruction.querySelector(".button .Ii");
const container = document.querySelector(".container");
const Score = document.querySelector(".Score");
const choices = document.querySelector(".choices");;

Start.onclick = ()=>{
    instruction.classList.add("activeInfo");
}
exit.onclick = () =>{
    instruction.classList.remove("activeInfo");
}
cont.onclick = () =>{
    instruction.classList.remove("activeInfo"),
    container.classList.add("activeQuiz");
}
const quiz = [
 {
  question: "1. What is the full form of HTML ?",
  choices: ["HighText Machine Language",
            "HyperText and links Markup Language",
            "HyperText Markup Language", 
            "None of these"],

  answer: 2
 },
 {
  question: "2. What is the full form of CSS ?",
  choices: ["Cascading Style Sheet", 
            "Coloured Special Sheets", 
            "Colour and Style Sheets", 
            "None of above"],
  answer: 0
 },
 {
  question: "3. Javascript is an _______ language?",
  choices: ["Object-Oriented", 
            "Object-Based", 
            "Procedural", 
            "None of above"],
  answer: 0
 },
 {
  question: "4. Which is smallest header in HTML?",
  choices: ["h6", 
            "h3", 
            "h4", 
            "h1"],
  answer: 3
 },
 {
  question: "5. What is full form of Js? ",
  choices: ["Java Style", 
            "Java System", 
            "Java Script", 
            "None of above"],
  answer: 2
}
];
// Quiz variables
let currentQuestion = 0;
let score = 0;
// Quiz elements
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const score_textElement = document.getElementById("score_text");
// Set up the quiz
function setUpQuiz() {
 showQuestion();
 showChoices();
}
// Show the current question
function showQuestion() {
 questionElement.innerHTML = quiz[currentQuestion].question;
}
// Show the current choices
function showChoices() {
 for (let i = 0; i < quiz[currentQuestion].choices.length; i++) {
  document.getElementById("choice" + i).innerHTML = quiz[currentQuestion].choices[i];
 }
}
// Show the quiz progress
function showscore_text() {
 progressElement.innerHTML = "Question " + (currentQuestion + 1) + " of " + quiz.length;
}
// Check the answer and move to the next question
function checkAnswer(choice) {
 if (choice === quiz[currentQuestion].answer) {
  document.getElementById("choice" + choice).classList.add("correct");
  score++;
 } else {
  document.getElementById("choice" + choice).classList.add("incorrect");
 }
 disableChoices();
 setTimeout(nextQuestion, 1000);
}
// Disable the answer choices after selection
function disableChoices() {
 for (let i = 0; i < quiz[currentQuestion].choices.length; i++) {
  document.getElementById("choice" + i).setAttribute("disabled", true);
 }
}
// Enable the answer choices for the next question
function enableChoices() {
 for (let i = 0; i < quiz[currentQuestion].choices.length; i++) {
  document.getElementById("choice" + i).removeAttribute("disabled");
  document.getElementById("choice" + i).classList.remove("correct", "incorrect");
 }
}
// Move to the next question
function nextQuestion() {
 if (currentQuestion < quiz.length - 1) {
  currentQuestion++;
  showQuestion();
  showChoices();
  enableChoices();
 } else {
  endQuiz();
 }
}
// End the quiz and show the final score
function endQuiz() {
 document.getElementById("question").innerHTML = "Congratulation! You completed the Quiz.";
 document.getElementById("choices").innerHTML = "Your score is " + score + " out of " + quiz.length;
}
// Start the quiz when the page loads
window.onload = setUpQuiz;


