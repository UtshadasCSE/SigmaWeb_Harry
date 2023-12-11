function SayName(name) {
  console.log("Hey " + name + " What's up");
}
SayName("utsha");

function Sum(a, b) {
  console.log(a + b);
}
Sum(12, 23);

const AddTwo = (a, b) => {
  console.log(a + b);
};
AddTwo(12, 12);

const multi = (a, b) => {
  return a * b;
};
console.log("Multiplication is =", multi(2, 5));
