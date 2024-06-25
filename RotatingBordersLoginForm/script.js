const container = document.getElementById("container");
const form = document.getElementById("form");
const borders = document.querySelectorAll(".borders");
const heading = document.getElementById("heading");

function formActivated() {
    heading.style.color = "transparent";
    heading.style.backgroundClip = "text";
    heading.style.background = "linear-gradient(to right, rgb(255, 119, 119), rgb(118, 255, 118), rgb(255, 255, 127))";
    heading.style.webkitBackgroundClip = "text";
    document.getElementById("submit").style.background = "linear-gradient(45deg, rgb(255, 100, 100), rgb(116, 255, 116), rgb(255, 255, 120))";
    // first border
    borders[0].style.borderColor = "rgb(102, 255, 102)";
    borders[0].style.boxShadow = "0 0 10px 0px rgb(102, 255, 102), inset 0 0 10px 0px rgb(102, 255, 102)";
    // second border
    borders[1].style.borderColor = "rgb(255, 65, 65)";
    borders[1].style.boxShadow = "0 0 10px 0px rgb(255, 65, 65), inset 0 0 10px 0px rgb(255, 65, 65)";
    // third border
    borders[2].style.borderColor = "rgb(255, 255, 67)";
    borders[2].style.boxShadow = "0 0 10px 0px rgb(255, 255, 67), inset 0 0 10px 0px rgb(255, 255, 67)";
}

function resetForm() {
    borders.forEach(border => {
        border.style.borderColor = "white";
        border.style.animation = "none";
        border.style.boxShadow = "none";
    });
    document.getElementById("submit").style.background = "white";
    heading.style.color = "white";
    heading.style.backgroundColor = "transparent";
    heading.style.backgroundClip = "none";
    heading.style.webkitBackgroundClip = "none";
}

let rotateInterval0, rotateInterval1, rotateInterval2;
let degree0 = 0, degree1 = 0, degree2 = 0;
let isRotating = false;

document.addEventListener("click", function(event) {
    if (container.contains(event.target) || form.contains(event.target)) {
        if (!isRotating) {
            isRotating = true;
            rotateInterval0 = setInterval(() => {
                borders[0].style.transform = `rotate(${degree0}deg)`;
                degree0++;
            }, 20);
            rotateInterval1 = setInterval(() => {
                borders[1].style.transform = `rotate(${degree1}deg)`;
                degree1++;
            }, 15);
            rotateInterval2 = setInterval(() => {
                borders[2].style.transform = `rotate(${degree2}deg)`;
                degree2++;
            }, 10);
            formActivated();
        }
    } else {
        isRotating = false;
        clearInterval(rotateInterval0);
        clearInterval(rotateInterval1);
        clearInterval(rotateInterval2);
        resetForm();
    }
});
