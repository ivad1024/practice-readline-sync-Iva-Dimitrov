const input = require('readline-sync');
const questions = [
  "What is your name? ",
  "What is your favorite color? ",
  "How old are you? ",
  "What is your favorite programming language? ",
  "What city do you live in? "
];
const answers = [];
for (let i = 0; i < questions.length; i++) {
  let answer = input.question(questions[i]);
  answers.push(answer);
}
console.log("\n--- Your Answers ---");
console.log(`Name: ${answers[0]}`);
console.log(`Favorite Color: ${answers[1]}`);
console.log(`Age: ${answers[2]}`);
console.log(`Programming Language: ${answers[3]}`);
console.log(`City: ${answers[4]}`);
