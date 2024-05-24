let on = false;
let temp = 'c';

document.getElementById('powerButton').addEventListener('click', function() {
    if (on === false)
    {
        document.getElementById('nature').style.opacity = '1';
        document.getElementById('circle').style.border = '3px solid rgb(167, 176, 188)';
        document.getElementById('line').style.backgroundColor = 'rgb(167, 176, 188)';
        document.getElementById('T').style.color = 'rgb(167, 176, 188)';
        document.getElementById('T').style.textShadow = '0 0 10px rgb(167, 176, 188)';
        document.getElementById('F').style.color = 'rgb(167, 176, 188)';
        document.getElementById('C').style.color = 'rgb(167, 176, 188)';
        document.getElementById('clock').style.height = '50px';
        document.getElementById('clock').style.color = 'rgb(167, 176, 188)';
        document.getElementById('clock').style.textShadow = '0 0 10px rgb(167, 176, 188)';
        document.getElementById('monitor').innerHTML = '34.5 C';
        document.getElementById('monitor').style.textShadow = '0 0 10px rgb(167, 176, 188)';
        on = true;
    }
    else
    {
        document.getElementById('nature').style.opacity = '0';
        document.getElementById('circle').style.border = '3px solid rgb(8, 15, 24)';
        document.getElementById('line').style.backgroundColor = 'rgb(8, 15, 24)';
        document.getElementById('T').style.color = 'rgb(31, 32, 35)';
        document.getElementById('T').style.textShadow = '0 0 10px rgb(73, 75, 82)';
        document.getElementById('F').style.color = 'rgb(23, 26, 33)';
        document.getElementById('C').style.color = 'rgb(23, 26, 33)';
        document.getElementById('clock').style.height = '10px';
        document.getElementById('clock').style.color = 'transparent';
        document.getElementById('clock').style.textShadow = '0 0 10px transparent';
        document.getElementById('monitor').innerHTML = '';
        document.getElementById('monitor').style.textShadow = 'none';
        on = false;
    }
});

function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    document.getElementById('clock').innerHTML = (hours + 1) + ":" + minutes + ":" + seconds;
  }
  
setInterval(displayTime, 1000);

document.getElementById('F').addEventListener('click', function() {
    if (on === true && temp === 'c')
    {
        document.getElementById('monitor').innerHTML = '94.1 F';
        temp = 'f';
    }
});

document.getElementById('C').addEventListener('click', function() {
    if (on === true && temp === 'f')
    {
        document.getElementById('monitor').innerHTML = '34.5 C';
        temp = 'c';
    }
});

document.getElementById('rocket').addEventListener('click', function() {
    if (on === true)
    {
        document.getElementById('rocket3d').style.animation = 'rocket 1.8s linear';
        setTimeout (function() {
            document.getElementById('rocket3d').style.animation = 'none';
            document.getElementById('explosive').style.animation = 'explosion 2.5s ease';
            setTimeout(function() {
                document.getElementById('explosive').style.animation = 'none';
            }, 2500)
        }, 1700);
    }
});

document.getElementById('airplane').addEventListener('click', function() {
    if (on === true)
    {
        document.getElementById('airplane3d').style.animation = 'airplane 3s linear';
        setTimeout (function() {
            document.getElementById('airplane3d').style.animation = 'none';
        }, 2500)
    }
});