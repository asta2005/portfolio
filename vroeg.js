const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const correctAnswer = 17;
const numberOfAttempts = 3;

function askQuestion(attempt) {
  rl.question(`Poging ${attempt}: wat is mijn leeftijd? Enter your answer: `, function(userAnswer) {
    if (parseInt(userAnswer) === correctAnswer) {
      console.log('Goed, ik ben inderdaad 17.');
      rl.close();
    } else {
      console.log('Incorrect. Probeer opnieuw.');
      if (attempt < numberOfAttempts) {
        askQuestion(attempt + 1); 
      } else {
        console.log(`Je hebt ${numberOfAttempts} pogingen gebruikt. Het juiste antwoord is ${correctAnswer}.`);
        rl.close();
      }
    }
  });
}

askQuestion(1); 
