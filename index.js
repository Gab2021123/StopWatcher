const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const milisecondLabel = document.getElementById("milliseconds");

const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const pauseButton = document.getElementById("pauseBtn");
const resetButton = document.getElementById("resetBtn");

const lisLap = document.getElementById("laplist");
//StopWatch Variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
const startTimer = () => {
  interval = setInterval(updateTimer, 10);
  startButton.disabled = true;
};
const resetTimer = () => {
  clearInterval(interval);
  resetTimerData();
  resetTimerData.disabled = true;
  startButton.disabled = false;
};
const resetTimerData = () => {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayTimer();
};
const stopTimer = () => {
  clearInterval(interval);

  let contador = 0;
  contador++;
  const li = document.createElement("li");
  li.textContent = `Lap ${contador} = ${validation(minutes)}: ${validation(
    seconds
  )} :${validation(milliseconds)}`;
  lisLap.appendChild(li);
  resetTimer();
};
const pauseTimer = () => {
  clearInterval(interval);
  startButton.disabled = false;
};

const validation = (num) => {
  if (Number.isInteger(num) && num < 10) {
    return num.toString().padStart(2, "0");
  } else {
    return num;
  }
};
const displayTimer = () => {
  milisecondLabel.textContent = validation(milliseconds);
  minutesLabel.textContent = validation(minutes);
  secondsLabel.textContent = validation(seconds);
};
const updateTimer = () => {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  displayTimer();
};

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
