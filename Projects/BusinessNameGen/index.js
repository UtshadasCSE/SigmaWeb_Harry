const adjectives = {
  1: "Crazy",

  2: "Amazing",

  3: "fire",
};

const ShopName = {
  1: "Engine",

  2: "Foods",

  3: "Garments",
};

const anotherWord = {
  1: "Bros",

  2: "Limited",

  3: "Hub",
};

const randomOne = Math.floor(Math.random() * 3 + 1);

const randomTwo = Math.floor(Math.random() * 3 + 1);

const randomThree = Math.floor(Math.random() * 3 + 1);

const adding = (a, b, c) => {
  console.log(a[randomOne] + " " + b[randomTwo] + " " + c[randomThree]);
};

adding(adjectives, ShopName, anotherWord);
