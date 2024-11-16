let timerInterval;
let running = false;
let elapsedTime = 0;
let startTime;
const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsContainer = document.getElementById('laps');

function startStopwatch() {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
        startStopButton.textContent = 'Pause';
    } else {
        running = false;
        clearInterval(timerInterval);
        startStopButton.textContent = 'Start';
    }
}

function resetStopwatch() {
    running = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    lapsContainer.innerHTML = '';
}

function lapTime() {
    if (running) {
        const lapDiv = document.createElement('div');
        lapDiv.textContent = display.textContent;
        lapsContainer.appendChild(lapDiv);
    }
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

startStopButton.addEventListener('click', startStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', lapTime);
