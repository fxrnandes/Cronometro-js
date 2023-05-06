const minuteEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milisecondsEl = document.querySelector("#miliseconds")
const StartBtn = document.querySelector("#StartBtn")
const PauseBtn = document.querySelector("#PauseBtn")
const ResumeBtn = document.querySelector("#ResumeBtn")
const ResetBtn = document.querySelector("#ResetBtn")

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

StartBtn.addEventListener("click", startTimer);
PauseBtn.addEventListener("click", pauseTimer);
ResumeBtn.addEventListener("click", resumeTimer);
ResetBtn.addEventListener("click", resetTimer);

function startTimer() {

    Interval = setInterval(() => {

        if(!isPaused){

            miliseconds += 10

            if(miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
        }

        minuteEl.textContent = formatTime(minutes);
        secondsEl.textContent = formatTime(seconds);
        milisecondsEl.textContent = formatMiliseconds(miliseconds);
        }
    }, 10);

    StartBtn.style.display = "none";
    PauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true
    PauseBtn.style.display = "none";
    ResumeBtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false
    PauseBtn.style.display = "block";
    ResumeBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(Interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minuteEl.textContent = "00";
    secondsEl.textContent = "00";
    milisecondsEl.textContent = "000";

    StartBtn.style.display = "block";
    PauseBtn.style.display = "none";
    ResumeBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}