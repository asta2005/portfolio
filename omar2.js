const readline = require('readline');

// Create an interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define quiz questions and answers in Dutch
const questions = [
  {
    question: "Wat is de hoofdstad van Frankrijk?",
    choices: ["Berlijn", "Madrid", "Parijs", "Rome"],
    correctAnswer: "Parijs"
  },
  {
    question: "Welke planeet staat bekend als de Rode Planeet?",
    choices: ["Aarde", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars"
  },
  {
    question: "Wat is 2 + 2?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  console.log(`Vraag ${currentQuestionIndex + 1}: ${currentQuestion.question}`);

  currentQuestion.choices.forEach((choice, index) => {
    console.log(`${index + 1}. ${choice}`);
  });
}

function checkAnswer(selectedChoice) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedChoice === currentQuestion.correctAnswer) {
    console.log("Correct!");
    score++;
  } else {
    console.log(`Fout! Het juiste antwoord is ${currentQuestion.correctAnswer}`);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  console.log("Quiz voltooid!");
  console.log(`Je Score: ${score} / ${questions.length}`);
  rl.close();
}

// Start the quiz
displayQuestion();

// Listen for user input
rl.on('line', (input) => {
  const selectedChoice = questions[currentQuestionIndex].choices[parseInt(input) - 1];
  if (selectedChoice) {
    checkAnswer(selectedChoice);
  } else {
    console.log("Ongeldige keuze. Voer alstublieft een geldig nummer in.");
  }
});
