let isNight = false;
const glasses = ["glass1", "glass2", "glass3"];
const rightWall = document.getElementById("rightWall");
const house = document.querySelectorAll(".house");
const triangle = document.getElementById("triangle");
const lines = ["line1", "line2", "line3", "line4", "line5", "line6"];
const roofRight = document.getElementById("roofRight");
const part = document.querySelectorAll(".part");
const blocks = ["block1", "block2", "block3"];
const rightBush = ["standRightBush", "left", "mid", "right", "inner"];
const ground = document.querySelectorAll(".ground");
const chimney = document.querySelectorAll(".chimney");
const leftChimney = ["leftChimney", "topSmall", "topBig"];
const bottom = document.getElementById("bottom");
const bottomTape = document.getElementById("bottomTape");
const leftTape = document.getElementById("leftTape");
const rightStair = document.getElementById("rightStair");
const afterStair = document.getElementById("after");
const fronts = ["front1", "front2"];
const edges = ["edge", "edge2", "edge3", "edge2shadow", "edge3shadow"];
const behindBush = document.getElementById("behindBush");
const afterBehindBush = document.getElementById("afterBehindBush");
const bushBehind = ["stand", "bush1", "bush2"];
const door = document.querySelectorAll(".door");

function night() {
    for (let i = 0; i < 3; i++) {
        document.getElementById(glasses[i]).style.backgroundColor = !isNight ? "#f6c06a" : "#61bdde";
    }
    rightWall.style.backgroundColor = !isNight ? "#be7d4f" : "#f6a221";
    rightWall.style.boxShadow = !isNight ? "inset 0 30px 10px #885520" : "inset 0 30px 10px #cb6c2d";
    house[0].style.backgroundColor = !isNight ? "#d29b5a" : "#febe38";
    triangle.style.backgroundColor = !isNight ? "#d29b5a" : "#febe38";
    lines.forEach(line => {
        document.getElementById(line).style.backgroundColor = !isNight ? "#fad8a5" : "#95daf7";
    });
    roofRight.style.backgroundColor = !isNight ? "#ab3a45" : "#f94f40";
    for (let i = 0; i < 4; i++) {
        part[i].style.backgroundColor = !isNight ? "#962832" : "#e93e2d";
    } 
    blocks.forEach(block => {
        document.getElementById(block).style.backgroundColor = !isNight ? "#9c5f2f" : "#f6911f";
    });
    rightBush.forEach(bush => {
        document.getElementById(bush).style.backgroundColor = !isNight ? "#739033" : "#a2c237";
    });
    ground[0].style.backgroundColor = !isNight ? "#3b4a39" : "#669e53";
    chimney[0].style.backgroundColor = !isNight ? "#852933" : "#e93429";
    leftChimney.forEach(part => {
        document.getElementById(part).style.backgroundColor = !isNight ? "#d15363" : "#fe644e";
    });
    chimney[0].style.boxShadow = !isNight ? "inset 0 5px #ad3a47" : "inset 0 5px #d02d25";
    document.getElementById("topSmall").style.boxShadow = !isNight ? "inset 0 4px #ad3a47, inset -50px 0 #852933" : "inset 0 4px #e9524a, inset -50px 0 #e93429";
    document.getElementById("topBig").style.boxShadow = !isNight ? "inset -60px 0 #852933" : "inset -60px 0 #e93429";
    document.getElementById("leftChimney").style.boxShadow = !isNight ? "inset 0 5px #ad3a47" : "inset 0 5px #e9524a";
    bottom.style.backgroundColor = !isNight ? "#8b5e20" : "#fc832a";
    bottom.style.boxShadow = !isNight ? "inset 0 -5px 6px #894f27" : "inset 0 -5px 6px #b85f1f";
    bottomTape.style.backgroundColor = !isNight ? "#ba7c4f" : "#fd9e23";
    bottomTape.style.boxShadow = !isNight ? "inset 0 -5px 10px #894f27" : "inset 0 -5px 10px #a76917";
    leftTape.style.backgroundColor = !isNight ? "#8b5e20" : "#fc832a";
    rightStair.style.backgroundColor = !isNight ? "#8e5e1f" : "#e1782c";
    afterStair.style.backgroundColor = !isNight ? "#8e5e1f" : "#e1782c";
    fronts.forEach(front => {
        document.getElementById(front).style.backgroundColor = !isNight ? "#dea458" : "#fdcb64";
    });
    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            document.getElementById(edges[i]).style.backgroundColor = !isNight ? "#813028" : "#d93f18";
        } else if (i === 1 || i === 2) {
            document.getElementById(edges[i]).style.backgroundColor = !isNight ? "#c3575d" : "#f16831";
        } else if (i === 3 || i === 4) {
            document.getElementById(edges[i]).style.backgroundColor = !isNight ? "#b97d44" : "#f6a221";
        }
    }
    behindBush.style.backgroundColor = !isNight ? "#4f7230" : "#70ab43";
    afterBehindBush.style.backgroundColor = !isNight ? "#4f7230" : "#70ab43";
    bushBehind.forEach(bush => {
        document.getElementById(bush).style.backgroundColor = !isNight ? "#4f7328" : "#6dad45";
    });
    door[0].style.backgroundColor = !isNight ? "#774129" : "#aa5639";
    door[0].style.boxShadow = !isNight ? "inset 0px 15px 10px #693318, inset 0 -10px 10px #693318, -15px 0 #8e5d1f" : "inset 0px 15px 10px #8a3e26, inset 0 -10px 10px #8a3e26, -15px 0 #e87929";
    // changing day and night
    isNight = !isNight;
}