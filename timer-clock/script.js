const clock = document.getElementById("clock");
const play = document.getElementById("playPause");
const pomo = document.getElementById("pomo");
const short = document.getElementById("short");
const long = document.getElementById("long");
const pomoInput = document.getElementById("pomoI");
const shortInput = document.getElementById("shortI");
const longInput = document.getElementById("longI");
const setting = document.querySelectorAll(".setting");
const settingShadow = document.getElementById("settingShadow");

let minutePomo = 25, minuteShort = 5, minuteLong = 15, minute = minutePomo, showM; 
let second = 0, showS; 
let timer; 
let isRunning = false; 
let currentMode = "pomo";

pomoInput.value = `${minutePomo}`;
shortInput.value = `${minuteShort}`;
longInput.value = `${minuteLong}`;

showM = minute < 10 ? "0" + minute : minute;
showS = second < 10 ? "0" + second : second;
clock.textContent = `${showM}:${showS}`;

function openSetting() {
    setting[0].style.display = "flex";
    settingShadow.style.display = "flex";
}

function apply() {
    minutePomo = pomoInput.value;
    minuteShort = shortInput.value;
    minuteLong = longInput.value;
    setting[0].style.display = "none";
    settingShadow.style.display = "none";

    clearInterval(timer);
    play.textContent = "play";
    play.style.transform = "translateX(0px)";
    isRunning = false;
    
    switch (currentMode) {
        case "pomo":
            minute = pomoInput.value;
            break;
        case "short":
            minute = shortInput.value;
            break;
        case "long":
            minute = longInput.value;
            break;
    }

    updateClock();
}

function updateClock() {
    const formattedMinute = String(minute).padStart(2, '0');
    const formattedSecond = String(second).padStart(2, '0');
    clock.textContent = `${formattedMinute}:${formattedSecond}`;
}

function countdown() {
    if (second === 0) {
        if (minute === 0) {
            clearInterval(timer); 
            play.textContent = "play";
            play.style.transform = "translateX(0px)";
            window.alert("Time's up!!");
            return;
        }
        minute--;
        second = 59; 
    } else {
        second--; 
    }
    updateClock();
}

play.addEventListener("click", function() {
    if (isRunning) {
        clearInterval(timer); 
        play.textContent = "play";
        play.style.transform = "translateX(0px)";
    } else {
        play.textContent = "pause";
        play.style.transform = "translateX(-10px)";
        timer = setInterval(countdown, 1000); 
    }
    isRunning = !isRunning; 
});

function switchMode(mode) {
    switch (mode) {
        case 'pomo':
            pomo.style.backgroundColor = "rgb(255, 83, 83)";
            short.style.backgroundColor = "transparent";
            long.style.backgroundColor = "transparent";
            pomo.style.color = "rgb(0, 0, 50)";
            short.style.color = "rgb(215, 255, 255)";
            long.style.color = "rgb(215, 255, 255)";
            clock.style.color = "rgb(255, 83, 83)";
            minute = minutePomo;
            currentMode = "pomo";
            break;
        case 'short':
            pomo.style.backgroundColor = "transparent";
            short.style.backgroundColor = "rgb(132, 255, 83)";
            long.style.backgroundColor = "transparent";
            short.style.color = "rgb(0, 0, 50)";
            pomo.style.color = "rgb(215, 255, 255)";
            long.style.color = "rgb(215, 255, 255)";
            clock.style.color = "rgb(132, 255, 83)";
            minute = minuteShort;
            currentMode = "short";
            break;
        case 'long':
            pomo.style.backgroundColor = "transparent";
            short.style.backgroundColor = "transparent";
            long.style.backgroundColor = "rgb(255, 245, 50)";
            long.style.color = "rgb(0, 0, 50)";
            pomo.style.color = "rgb(215, 255, 255)";
            short.style.color = "rgb(215, 255, 255)";
            clock.style.color = "rgb(255, 245, 50)";
            minute = minuteLong;
            currentMode = "long";
            break;
    }
    second = 0;
    clearInterval(timer);
    play.textContent = "play";
    play.style.transform = "translateX(0px)";
    isRunning = false;
    updateClock();
}

