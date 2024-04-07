function changeColor(volumeLevel)
{
    if (volumeLevel >= 190 && volumeLevel <= 220)
    {
        document.querySelector('.volume').style.backgroundColor = '#fff';
        document.querySelector('.volume').style.boxShadow = 'inset 0 0 5px 2px grey';
    }
    else if (volumeLevel >= 130 && volumeLevel < 190)
    {
        document.querySelector('.volume').style.backgroundColor = 'rgb(184, 255, 207)';
        document.querySelector('.volume').style.boxShadow = 'inset 0 0 5px 2px rgb(0, 255, 0)';
    }
    else if (volumeLevel >= 90 && volumeLevel < 130)
    {
        document.querySelector('.volume').style.backgroundColor = 'rgb(255, 255, 158)';
        document.querySelector('.volume').style.boxShadow = 'inset 0 0 5px 2px rgb(255, 255, 0)';
    }
    else if (volumeLevel >= 40 && volumeLevel < 90)
    {
        document.querySelector('.volume').style.backgroundColor = 'rgb(255, 196, 148)';
        document.querySelector('.volume').style.boxShadow = 'inset 0 0 5px 2px rgb(255, 114, 0)';
    }
    else if (volumeLevel >= 0 && volumeLevel < 40)
    {
        document.querySelector('.volume').style.backgroundColor = 'rgb(255, 171, 171)';
        document.querySelector('.volume').style.boxShadow = 'inset 0 0 5px 2px rgb(255, 0, 0)';
    }
}

let volumeLevel = 220;

document.querySelector('.increase').addEventListener('click', function() {
    if (volumeLevel - 10 >= 0)
    {
        volumeLevel -= 10;
    }
    document.querySelector('.volume').style.top = volumeLevel + 'px';
    changeColor(volumeLevel);
    
});

document.querySelector('.decrease').addEventListener('click', function() {
    if (volumeLevel + 10 <= 220)
    {
        volumeLevel += 10;
    }
    document.querySelector('.volume').style.top = volumeLevel + 'px';
    changeColor(volumeLevel);
});

document.querySelector('.full').addEventListener('click', function() {
    volumeLevel = 0;
    document.querySelector('.volume').style.top = volumeLevel + 'px';
    changeColor(volumeLevel);
});

document.querySelector('.empty').addEventListener('click', function() {
    volumeLevel = 220;
    document.querySelector('.volume').style.top = volumeLevel + 'px';
    changeColor(volumeLevel);
});