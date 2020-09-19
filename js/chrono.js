let heures = document.querySelector(".heures>span");
let minutes = document.querySelector(".minutes>span");
let secondes = document.querySelector(".secondes>span");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let h = 0;
let m = 0;
let s = 0;
let intervalId = null;

heures.textContent = "00h";
minutes.textContent = "00m";
secondes.textContent = "00s";


function demarrerChrono() {
    start.removeEventListener("click", lancerChrono);
    s += 1;
    if (s < 10) {
        secondes.textContent = "0" + s + "s";
    } else {
        secondes.textContent = s + "s";
    }
    if (s === 60) {
        s = 0;
        secondes.textContent = "0" + s + "s";
        m += 1;
        if (m < 10) {
            minutes.textContent = "0" + m + "m";
        } else {
            minutes.textContent = m + "m";
        }
    }
    if (m === 60) {
        m = 0;
        minutes.textContent = "0" + m + "m";
        h += 1;
        if (h < 10) {
            heures.textContent = "0" + h + "h";
        } else {
            heures.textContent = h + "h";
        }
    }
}

function lancerChrono() {
    intervalId = setInterval(demarrerChrono, 1000);
}

function arreterChrono() {
    clearInterval(intervalId);
    h = 0;
    m = 0;
    s = 0;
    heures.textContent = "00h";
    minutes.textContent = "00m";
    secondes.textContent = "00s";
    start.addEventListener("click", lancerChrono);
}

start.addEventListener("click", lancerChrono);
stop.addEventListener("click", arreterChrono);