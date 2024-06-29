const moveButton = document.getElementById("signinb");
const moveButton2 = document.getElementById("signupb");
const purple = document.getElementById("purpleContainer");
const white = document.getElementById("rightContainer");
const whiteHeader = document.getElementById("createAccount");
const whiteHeader2 = document.getElementById("signinToAccount");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signupText = document.getElementById("signupText");
const signinText = document.getElementById("signinText");

function changePurple(move) {
    if (move === "to right") {
        // moving purple container to right
        purple.style.left = "425px";
        purple.style.borderTopLeftRadius = "140px";
        purple.style.borderBottomLeftRadius = "140px";
        purple.style.borderTopRightRadius = "25px";
        purple.style.borderBottomRightRadius = "25px";
        // move header, hint and button
        signupText.style.left = "-700px";
        signinText.style.left = "0";
    } else if (move === "to left") {
        // moving purple container to left
        purple.style.left = "0px";
        purple.style.borderTopLeftRadius = "25px";
        purple.style.borderBottomLeftRadius = "25px";
        purple.style.borderTopRightRadius = "140px";
        purple.style.borderBottomRightRadius = "140px";
        // moving header, hint and button
        signupText.style.left = "0px";
        signinText.style.left = "800px";
    }
}

function changeWhite(move) {
    if (move === "to left") {
        white.style.right = "425px";
        // change white stuff
        whiteHeader.style.opacity = "0";
        whiteHeader2.style.opacity = "1";
        username.style.opacity = "0";
        email.style.top = "260px";
        password.style.top = "330px";
    } else if (move === "to right") {
        white.style.right = "0px";
        // change white stuff
        whiteHeader.style.opacity = "1";
        whiteHeader2.style.opacity = "0";
        username.style.opacity = "1";
        email.style.top = "320px";
        password.style.top = "390px";
    }
}

moveButton.addEventListener("click", function() {
    document.getElementById("container").style.boxShadow = "10px 10px 20px 5px rgb(48, 36, 59), inset 0 0 15px 3px rgb(191, 124, 245)"
    changePurple("to right");
    changeWhite("to left");
});

moveButton2.addEventListener("click", function() {
    document.getElementById("container").style.boxShadow = "-10px 10px 20px 5px rgb(48, 36, 59), inset 0 0 15px 3px rgb(191, 124, 245)"
    changePurple("to left");
    changeWhite("to right");
});