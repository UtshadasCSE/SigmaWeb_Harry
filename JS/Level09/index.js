// document.innerHTML;
// document.innerTEXT;
// console.log(innerHeight);
// document.hidden = true;
// document.DesignMode = "on";
let div = document.createElement("div");
div.innerHTML = "Hello Iam <b>Bold</b>";
div.setAttribute("class", "created");
document.querySelector(".container").append(div);
