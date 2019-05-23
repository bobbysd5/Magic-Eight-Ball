const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector(".message");
const answerArray = ["It will work","Maybe maybe not","Probably Not","Highly Likely","I don't know"];

button.addEventListener("click", function (){
    let random = Math.floor(Math.random() * answerArray.length)
    message.innerText = `${input.value} ${answerArray[random]}`;
})