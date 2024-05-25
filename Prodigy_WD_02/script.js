let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display p");
let int = null;
let pausedTimes = document.getElementById("paused-times");
let startPauseBtn = document.getElementById("start-pause-timer");
let resetBtn = document.getElementById("reset-timer");

startPauseBtn.addEventListener("click", () => {
    if (startPauseBtn.innerHTML.includes("Start")) {
        if (int !== null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
        startPauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
    } else {
        clearInterval(int);
        recordPauseTime();
        startPauseBtn.innerHTML = '<i class="fas fa-play"></i> Start';
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
    pausedTimes.innerHTML = "";
    startPauseBtn.innerHTML = '<i class="fas fa-play"></i> Start';
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

function recordPauseTime() {
    let pausedTime = timeRef.innerHTML;
    let p = document.createElement("p");
    p.textContent = pausedTime;
    pausedTimes.appendChild(p);
}
