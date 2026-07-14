const test = document.getElementById("testa");
const button = document.getElementById("btn");
const counter = document.getElementById("counter");

console.log("hello?");
console.log(test);
test.innerText = "Yeet";

let counta = 0;

button.addEventListener("click", () => {
  test.innerText = "Clicked";
  counta = counta + 1;
  counter.innerText = counta;
});
