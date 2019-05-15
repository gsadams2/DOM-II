// Your code goes here

const home = document.querySelector(".nav-link-home");
const intro = document.querySelector(".intro");

//1
home.addEventListener("click", function(event) {
  intro.classList.toggle("hidden");
});

const letsGoParent = document.querySelector(".content-section .text-content");
const letsGo = document.querySelector(".content-section .text-content h2");
const bodyYo = document.querySelector("body");

const dblButton = document.querySelector(".destination .btn");
const yellowFont = document.querySelector(".destination p");

//2
letsGo.addEventListener("mouseover", event => {
  bodyYo.style.color = "red";
});
//3
letsGo.addEventListener("mouseout", event => {
  bodyYo.style.color = "green";
});

//4
dblButton.addEventListener("dblclick", event => {
  yellowFont.style.color = "yellow";
});

const copyFooter = document.querySelector(".footer p");

//5
copyFooter.addEventListener("copy", event => {
  copyFooter.style.color = "red";
});

const middleImg = document.querySelector(".img-content-LFG");

//6
middleImg.addEventListener("drag", event => {
  letsGo.style.fontSize = "15rem";
});

const advImg = document.querySelector(".img-content-ADV");
const advContent = document.querySelector(".text-content-ADV");

//7
advImg.addEventListener("mousedown", event => {
  letsGo.style.color = "blue";
});

//8

dblButton.addEventListener("dragstart", event => {
  bodyYo.style.color = "red";
});

//9

document.addEventListener("scroll", event => {
  copyFooter.style.fontSize = "15rem";
});

//10

document.addEventListener("keydown", event => {
  dblButton.style.color = "black";
});

const contentDest = document.querySelector(".content-destination-yo");
const contentDestH2 = document.querySelector(".content-destination-yo h2");

contentDest.addEventListener("mouseover", event => {
  contentDest.style.color = "red";
});

contentDestH2.addEventListener("mouseover", event => {
  contentDestH2.style.color = "green";
  event.stopPropagation();
});

const navItems = document.querySelector("nav");

navItems.addEventListener("click", event => event.preventDefault());
