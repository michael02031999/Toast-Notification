let body = document.getElementsByTagName("body");
let button = document.getElementById("button");
let anotherTest = document.getElementById("anotherTest");

let cat = document.getElementById("cat");

button.addEventListener("click", newDivs);

let messages = ["Message One", "Message Two", "Message Three", "Message Four"];
let colors = ["red", "green", "purple"];

function pickMessage() {
  let message = messages[Math.floor(Math.random() * messages.length)];
  return message;
}

function pickColor() {
  let color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

function createDiv() {
  let div = document.createElement("div");
  div.innerHTML = pickMessage();
  div.style.color = pickColor();
  div.style.position = "absolute";
  div.style.bottom = "0px";
  div.style.right = "0px";
  div.style.height = "50px";
  div.style.width = "160px";
  div.style.backgroundColor = "white";
  div.style.zIndex = "1";
  div.style.transform = "translate(-25%, -50%)";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.borderRadius = "5px";

  setTimeout(() => {
    div.style.display = "none";
  }, 3000);

  return div;
}

let count = 0;
let bottom = 0;

function newDivs() {
  let allDivs = document.querySelectorAll("div");
  let arrayOfDivs = [...allDivs];

  //arrayOfDivs[0].style.bottom = bottom + "px";

  everyDivPlus60(arrayOfDivs);

  document.body.appendChild(createDiv());

  count++;
}

function everyDivPlus60(array) {
  for (let i = 0; i < array.length; i++) {
    bottom = array[i].style.bottom;

    array[i].style.bottom = parseInt(bottom.replace(/px/, "")) + 60 + "px";
  }
}
