let arr = [1, 2, 3, 4, 5];
arr[0] = 309;
console.log(arr);
console.log(arr.length);
console.log(arr);
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.push(21));
console.log(arr);

let seq = [21, 23, 11, 13, 34, 25, 34, 11, 23];
seq.sort();
console.log(seq);
console.log(arr.concat(seq));
console.log(seq.splice(1, 2));

seq.forEach((value, index, arr) => {
  console.log(value, index, arr);
});
