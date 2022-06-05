const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let timerID = null;
startBtn.addEventListener("click", toStartRandomColor)
stopBtn.addEventListener("click", toStopRandomColor)

function toStartRandomColor() {
    timerID = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    },1000)
    
    startBtn.setAttribute("disabled" , true)
}
function toStopRandomColor() {
    startBtn.removeAttribute("disabled")
    clearInterval(timerID) ;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
