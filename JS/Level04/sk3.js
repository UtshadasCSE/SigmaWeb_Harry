const prompt = require("prompt-sync")();

let gameNumber = 26;
let userNumber = prompt("Enter your number:");
while (userNumber !== gameNumber) {
  console.log("Wrong...........");
  userNumber = prompt("Enter your number:");
}
console.log("Hurray! you caught the right number");
