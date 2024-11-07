let display = document.getElementById("display");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let stopBtn = document.getElementById("stopBtn");

let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let int = null;

startBtn.addEventListener("click", () => {
  if(int!==null){
    clearInterval(int);
  }
  int = setInterval(updateTime,10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(int);
});

resetBtn.addEventListener("click", () => {
  clearInterval(int);
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  display.style.letterSpacing="4px";
  display.innerHTML="00 : 00 : 00 : 000";
});


function updateTime() {

  milliseconds+=10;
  if(milliseconds==1000){
    seconds++;
    milliseconds=0;
    if(seconds>=60){
      seconds=0;
      minutes++;
      if(minutes>=60){
        minutes=0;
        hours++;
      }
    }
  }


  const formattedTime =
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    ":" +
    milliseconds;

  document.getElementById("display").textContent = formattedTime;
}



