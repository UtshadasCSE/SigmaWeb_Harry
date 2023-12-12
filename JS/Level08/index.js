// let name = document.getElementsByClassName("box");
// let balck = (document.getElementById("black").style.backgroundColor = "black");
// name[1].style.backgroundColor = "red";
// console.log(name);

let box = document.querySelectorAll(".box");

box.forEach((e) => {
  e.style.backgroundColor = "red";
});
