const readline = require('readline-sync');

console.log("Welcome to the 5-Question Survey!");

let name = readline.question("What is your name? ");
let age = readline.question("How old are you? ");
let favoriteColor = readline.question("What is your favorite color? ");
let hobby = readline.question("What is your favorite hobby? ");
let dreamJob = readline.question("What is your dream job? ");

console.log("\nThank you for participating in the survey!");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Favorite Color: ${favoriteColor}`);
console.log(`Hobby: ${hobby}`);
console.log(`Dream Job: ${dreamJob}`);
