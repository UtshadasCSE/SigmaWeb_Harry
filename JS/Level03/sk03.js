let mark = 70;
if ((mark) => 80 && mark <= 100) {
  console.log("A");
} else if ((mark) => 70 && mark <= 79) {
  console.log("B");
} else if ((mark) => 60 && mark <= 69) {
  console.log("C");
} else if ((mark) => 50 && mark <= 599) {
  console.log("D");
} else if ((mark) => 0 && mark <= 49) {
  console.log("F");
}
