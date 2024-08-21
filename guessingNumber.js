const readline = require('readline');
const randomNumber = Math.floor(Math.random() * 100);
let score = 100;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion() {
    rl.question('Please guess your number: ', (guessedNumber) => {
        if (guessedNumber == randomNumber) {
            console.log(`Correct! Your Score is : ${score}`);
            rl.close();
        } else if (guessedNumber > randomNumber) {
            console.log(`your input is greater than random number`);
            score = score - 1;
            askQuestion();
        } else {
            console.log(`your input is lesser than random number`);
            score = score - 1;
            askQuestion();
        }
    });
}

askQuestion();
