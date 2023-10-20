const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const correctAnswer = 17;

function askQuestion() {
  rl.question('wat is me leeftijd? Enter your answer: ', function(userAnswer) {
    if (parseInt(userAnswer) === correctAnswer) {
      console.log('Goed ik ben inderdaad 17.');
      rl.close();
    } else {
      console.log('Incorrect. Please try again.');
      askQuestion();
    }
  });
}

askQuestion(); 