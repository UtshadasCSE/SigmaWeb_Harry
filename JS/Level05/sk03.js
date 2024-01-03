let items = [250, 645, 300, 900, 50];
let index = 0;

for (let val of items) {
  console.log(`${index} value = ${val}`);
  let offer = val / 10;
  items[index] = items[index] - offer;
  console.log(`After offer value is ${items[index]}`);
  index++;
}
