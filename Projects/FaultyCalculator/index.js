let randomNumber = Math.random();

let a = prompt("Enter first number:");
let b = prompt("Enter Operation:");
let c = prompt("Enter second number:");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (randomNumber > 0.1) {
  // perform the correct answer
  alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
} else {
  b = obj[b];
  alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
 
}
