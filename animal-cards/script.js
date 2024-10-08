const cards = document.querySelectorAll(".cards");
let totalCards = 3, current, right, left, previous;

current = 1, previous = 3;
right = current + 1 > totalCards ? 1 : current + 1;
left = current - 1 < 1 ? totalCards : current - 1;

function goRight() {
    cards[current - 1].style.transform = "translateX(-350px) rotate(20deg)";
    cards[previous - 1].style.transform = "rotate(10deg)";
    cards[right - 1].style.transform = "rotate(0deg)";
    setTimeout(() => {
        cards[current - 1].style.zIndex = "0";
        cards[right - 1].style.zIndex = "2";
        cards[previous - 1].style.zIndex = "1";
        cards[current - 1].style.transform = "translateX(0px) rotate(20deg)";
    }, 300);    
    
    setTimeout(() => {
        previous = current;
        current = current + 1 <= totalCards ? current + 1 : 1;
        right = current + 1 > totalCards ? 1 : current + 1;
        left = current - 1 < 1 ? totalCards : current - 1;
    }, 600);
}

function goLeft() {
    cards[left - 1].style.transform = "translateX(-350px) rotate(0deg)";
    cards[current - 1].style.transform = "rotate(10deg)";
    cards[right - 1].style.transform = "rotate(20deg)";
    setTimeout(() => {
        cards[left - 1].style.zIndex = "2";
        cards[current - 1].style.zIndex = "1";
        cards[right - 1].style.zIndex = "0";
        cards[left - 1].style.transform = "translate(0px) rotate(0deg)";
    }, 300);

    setTimeout(() => {
        let temp = current;
        previous = right;
        current = left;
        left = right;
        right = temp;
    }, 600);
}