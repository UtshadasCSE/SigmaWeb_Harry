let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.querySelector(".box").innerHTML = "Clicked";
});
console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 2000);
console.log(4);
