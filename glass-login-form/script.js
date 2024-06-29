const signin = document.getElementById("signin");
const signup = document.getElementById("signup");
const visual = document.querySelector(".visual");
const form = document.querySelector(".form");
const heading = document.getElementById("heading");
const button = document.getElementById("button");
let position = "signin";

function changePage(toWhat) {
    if (toWhat === 'toSignin' && position !== 'signin') {
        visual.style.transform = "rotateY(0deg)";
        visual.style.left = "0";
        form.style.right = "0";
        signin.style.backgroundColor = "azure";
        signin.style.color = "rgb(70, 70, 255)";
        signin.style.boxShadow = "inset 3px -3px 15px rgb(50, 50, 50), inset -2px 2px 10px rgb(234, 234, 234), -3px 3px 10px rgb(50, 50, 50), 1px -1px 5px rgb(234, 234, 234)";
        signup.style.backgroundColor = "rgb(70, 70, 255)";
        signup.style.color = "azure";
        signup.style.boxShadow = "inset 3px -3px 15px rgb(31, 31, 112),inset -2px 2px 10px rgb(178, 178, 255),-3px 3px 10px rgb(31, 31, 112),2px -2px 5px rgb(178, 178, 255)";
        heading.textContent = "Sign In";
        button.textContent = "Sign In";
        position = "signin";
    } else if (toWhat === 'toSignup' && position !== 'signup') {
        visual.style.transform = "rotateY(180deg)";
        visual.style.left = "500px";
        form.style.right = "500px";
        signin.style.backgroundColor = "rgb(70, 70, 255)";
        signin.style.color = "azure";
        signin.style.boxShadow = "inset 3px -3px 15px rgb(31, 31, 112),inset -2px 2px 10px rgb(178, 178, 255),-3px 3px 10px rgb(31, 31, 112),2px -2px 5px rgb(178, 178, 255)";
        signup.style.backgroundColor = "azure";
        signup.style.color = "rgb(70, 70, 255)";
        signup.style.boxShadow = "inset 3px -3px 15px rgb(50, 50, 50), inset -2px 2px 10px rgb(234, 234, 234), -3px 3px 10px rgb(50, 50, 50), 1px -1px 5px rgb(234, 234, 234)";
        heading.textContent = "Sign Up";
        button.textContent = "Sign Up";
        position = "signup";
    }
}