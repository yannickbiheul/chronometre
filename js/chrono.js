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
    minutes.txtContent = "00m";
    secondes.textContent = "00s";
    start.addEventListener("click", lancerChrono);
}

start.addEventListener("click", lancerChrono);
stop.addEventListener("click", arreterChrono);