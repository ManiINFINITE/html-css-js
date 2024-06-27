// tapes
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
// identifiers
const h1i = document.getElementById("h1i");
const h2i = document.getElementById("h2i");
const m1i = document.getElementById("m1i");
const m2i = document.getElementById("m2i");
const s1i = document.getElementById("s1i");
const s2i = document.getElementById("s2i");

function move9(element, position) {
    switch (position) {
        case "0":
            element.style.top = "320px";
            break;
        case "1":
            element.style.top = "230px";
            break;
        case "2":
            element.style.top = "160px";
            break;
        case "3":
            element.style.top = "90px";
            break;
        case "4":
            element.style.top = "20px";
            break;
        case "5":
            element.style.top = "-50px";
            break;
        case "6":
            element.style.top = "-120px";
            break;
        case "7":
            element.style.top = "-190px";
            break;
        case "8":
            element.style.top = "-260px";
            break;
        case "9":
            element.style.top = "-330px";
            break;
    }
}

function move5(element, position) {
    switch (position) {
        case "0":
            element.style.top = "330px";
            break;
        case "1":
            element.style.top = "240px";
            break;
        case "2":
            element.style.top = "170px";
            break;
        case "3":
            element.style.top = "100px";
            break;
        case "4":
            element.style.top = "30px";
            break;
        case "5":
            element.style.top = "-40px";
            break;
    }
}

function move2(element, position) {
    switch (position) {
        case "0":
            element.style.top = "330px";
            break;
        case "1":
            element.style.top = "240px";
            break;
        case "2":
            element.style.top = "170px";
            break;
    }
}

function showTime() {
    var now = new Date();
    var currentHour = now.getHours();
    var currentMinute = now.getMinutes();
    var currentSecond = now.getSeconds();

    let h1p, h2p, m1p, m2p, s1p, s2p;

    // showing hour
    h1i.textContent = currentHour < 10 ? "0" : Math.floor(currentHour / 10);
    h2i.textContent = currentHour % 10;
    h1p = h1i.textContent;
    h2p = h2i.textContent;

    // showing minute
    m1i.textContent = currentMinute < 10 ? "0" : Math.floor(currentMinute / 10);
    m2i.textContent = currentMinute % 10;
    m1p = m1i.textContent;
    m2p = m2i.textContent;

    // showing second
    s1i.textContent = currentSecond < 10 ? "0" : Math.floor(currentSecond / 10);
    s2i.textContent = currentSecond % 10;
    s1p = s1i.textContent;
    s2p = s2i.textContent;

    move9(s2, s2p);
    move5(s1, s1p);
    move9(m2, m2p);
    move5(m1, m1p);
    move9(h2, h2p);
    move2(h1, h1p);
}

setInterval(showTime, 1000);