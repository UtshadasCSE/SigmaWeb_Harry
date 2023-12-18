let marks = [90, 88, 80, 90, 70];
console.log(marks);
marks[1] = 89;
let items = ["bag", "cloth", "shoes", "watch"];
console.log(marks);
console.log(marks.length);
console.log(items);
console.log(typeof items);

// for (let i = 0; i < marks.length; i++) {
//   const element = marks[i];
//   console.log(element);
// }

for (let item of items) {
  console.log(item.toLocaleUpperCase());
}
