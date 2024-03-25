const button = document.querySelector('.buttonB');
const lightOff = document.querySelector('.lightOff');
const lightOn = document.querySelector('.lightOn');
const container = document.querySelector('.container');

button.addEventListener('click', toggle);

function toggle() {
    if (button.style.marginLeft === '180px') {
        button.style.marginLeft = '10px';
        lightOff.style.backgroundColor = 'red';
        lightOff.style.boxShadow = '0px 0px 10px 3px #f00';
        lightOn.style.backgroundColor = 'black';
        lightOn.style.boxShadow = 'inset 0px 0px 5px grey';
        button.style.boxShadow = 'inset 0px 0px 20px 10px red, 0px 0px 20px red';
        container.style.boxShadow = 'inset 0px 0px 20px 10px rgb(50, 50, 50),0px 0px 20px red';
    } else {
        button.style.marginLeft = '180px';
        lightOff.style.backgroundColor = 'black';
        lightOff.style.boxShadow = 'inset 0px 0px 5px grey';
        lightOn.style.backgroundColor = 'greenyellow';
        lightOn.style.boxShadow = '0px 0px 10px 3px greenyellow';
        button.style.boxShadow = 'inset 0px 0px 20px 10px greenyellow, 0px 0px 20px greenyellow';
        container.style.boxShadow = 'inset 0px 0px 20px 10px rgb(50, 50, 50),0px 0px 20px greenyellow';
    }
}