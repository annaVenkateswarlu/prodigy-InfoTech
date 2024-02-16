let stopwatch;
let isRunning = false;
let elapsedTime = 0;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        stopwatch = setInterval(updateDisplay, 1000);
    }
}

function stopStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(stopwatch);
    }
}

function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    const seconds = pad(Math.floor(elapsedTime % 60));
    const minutes = pad(Math.floor((elapsedTime / 60) % 60));
    const hours = pad(Math.floor(elapsedTime / 3600));
    display.textContent = `${hours}:${minutes}:${seconds}`;
    elapsedTime++;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}
