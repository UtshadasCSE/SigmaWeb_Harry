let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }

for (let val of marks) {
  sum += val;
}
let avg = sum / marks.length;
console.log(avg);
