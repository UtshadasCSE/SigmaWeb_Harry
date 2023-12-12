let userNumber = 6;

function Factorial(number) {
  let arr = Array.from(Array(number).keys());
  let c = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  console.log(c);
}

Factorial(userNumber);
