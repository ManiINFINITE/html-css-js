const borders = document.querySelectorAll('.border');
const reflexes = document.querySelectorAll('.reflex');
const items = document.querySelectorAll('.items');
const images = document.querySelectorAll('.images');

function isHovered(number) {
    borders[number - 1].style.zIndex = "2";
    borders[number - 1].style.transform = "scale(1.2)";
    reflexes[number - 1].style.top = "80px";
}

function reset(number) {
    borders[number - 1].style.zIndex = "0";
    borders[number - 1].style.transform = "scale(1)";
    reflexes[number - 1].style.top = "-160px";
}