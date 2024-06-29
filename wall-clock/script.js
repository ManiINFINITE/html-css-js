const h = document.querySelector(".hourOrbit");
const m = document.querySelector(".minuteOrbit");
const s = document.querySelector(".secondOrbit");
const hangh = document.getElementById("hour");
const hangm = document.getElementById("minute");
const hangs = document.getElementById("second");
const AorP = document.getElementById("AorP");
let sec = false, min = false, hou = false;

function wallClock() {
    var now = new Date();
    var second = now.getSeconds() / 60;
    var minute = (second + now.getMinutes()) / 60;
    var hour = (minute + now.getHours()) / 12;
    if (second === 0 && sec === false) {
        sec = true;
    }
    if (minute === 0 && min === false) {
        min = true;
    }
    if (hour === 0 && hou === false) {
        hou = true;
    }

    if (sec) {
        s.style.transform = `rotate(${360 + (second * 360)}deg)`;
    } else {
        s.style.transform = `rotate(${second * 360}deg)`;
    }
    if (min) {
        m.style.transform = `rotate(${360 + (minute * 360)}deg)`;
    } else {
        m.style.transform = `rotate(${minute * 360}deg)`;
    }
    if (hou) {
        h.style.transform = `rotate(${360 + (hour * 360)}deg)`;
    } else {
        h.style.transform = `rotate(${hour * 360}deg)`;
    }
}

wallClock();
setInterval(wallClock, 1000);

let ap;
function hangingClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (hour >= 0 && hour < 12) {
        ap = "A";
    } else if (hour >= 12 && hour <= 23) {
        ap = "P";
    }

    hour = hour > 12 ? hour - 12 : hour;

    hangh.textContent = hour < 10 ? "0" + hour : hour;
    hangm.textContent = minute < 10 ? "0" + minute : minute;
    hangs.textContent = second < 10 ? "0" + second : second;
    AorP.textContent = ap === "A" ? "A" : "P";
}

setInterval(hangingClock, 1000);