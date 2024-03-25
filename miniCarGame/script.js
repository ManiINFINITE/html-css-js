const steerRight = document.querySelector('.steerRight');
const steerLeft = document.querySelector('.steerLeft');
const car = document.querySelector('.car');

steerRight.addEventListener('click', goRight);
steerLeft.addEventListener('click', goLeft);

var countR = 0;
var countL = 0;

function goRight()
{
    countR = countR + 1;
    countL = countL - 1;
    if (countR === 1)
    {
        car.style.marginLeft = '220px';
    }
    if (car.style.marginLeft == '135px')
    {
        car.style.marginLeft = '220px';
    }
    if (car.style.marginLeft == '50px')
    {
        car.style.marginLeft = '135px';
    }
}

function goLeft()
{
    countL = countL + 1;
    countR = countR - 1;
    if (countL === 1)
    {
        car.style.marginLeft = '50px';
    }
    if (car.style.marginLeft == '135px')
    {
        car.style.marginLeft = '50px';
    }
    
    
    if (car.style.marginLeft == '220px')
    {
        car.style.marginLeft = '135px'
    }
    
}
