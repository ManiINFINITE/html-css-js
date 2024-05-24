let firstTurn = Math.floor(Math.random() * 2 + 1);
let turn, redWins = 0, blueWins = 0, draws = 0;

if (firstTurn === 1) {
    turn = "blue";
} else if (firstTurn === 2) {
    turn = "red";
}

const turnText = document.getElementById("turn");

if (turn === "blue") {
    turnText.textContent = "Blue's Turn";
    turnText.style.color = "blue";
    turnText.style.textShadow = "0px 0px 15px whitesmoke";
} else if (turn === "red") {
    turnText.textContent = "Red's Turn";
    turnText.style.color = "red";
    turnText.style.textShadow = "0px 0px 15px whitesmoke";
}

const cells = document.querySelectorAll(".cell");
const wins = [];

let currentPlayer = turn;

function switchTurn() {
    currentPlayer = currentPlayer === "blue" ? "red" : "blue";
    turnText.textContent = currentPlayer === "blue" ? "Blue's Turn" : "Red's Turn";
    turnText.style.color = currentPlayer;
}

function clearBoard() {
    for (let i = 0; i < 9; i++) {
        cells[i].textContent = "";
    }
    document.getElementById("lines").style.display = "none";
    document.getElementById("l" + currentLine).style.display = "none";
    currentLine = "000";
    currentPlayer = turn; // Reset currentPlayer to the initial turn value
    turnText.textContent = currentPlayer === "blue" ? "Blue's Turn" : "Red's Turn"; // Reset turnText to the initial turn value
    turnText.style.color = currentPlayer;
}

let currentLine = "000";
function lineCross(a, b, c) {
    document.getElementById("lines").style.display = "flex";
    if (a === 0 && b === 1 && c === 2) {
        document.getElementById("l012").style.display = "flex";
        currentLine = "012";
    } else if (a === 3 && b === 4 && c === 5) {
        document.getElementById("l345").style.display = "flex";
        currentLine = "345";
    } else if (a === 6 && b === 7 && c === 8) {
        document.getElementById("l678").style.display = "flex";
        currentLine = "678";
    } else if (a === 0 && b === 3 && c === 6) {
        document.getElementById("l036").style.display = "flex";
        currentLine = "036";
    } else if (a === 1 && b === 4 && c === 7) {
        document.getElementById("l147").style.display = "flex";
        currentLine = "147";
    } else if (a === 2 && b === 5 && c === 8) {
        document.getElementById("l258").style.display = "flex";
        currentLine = "258";
    } else if (a === 0 && b === 4 && c === 8) {
        document.getElementById("l048").style.display = "flex";
        currentLine = "048";
    } else if (a === 2 && b === 4 && c === 6) {
        document.getElementById("l246").style.display = "flex";
        currentLine = "246";
    }
}

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

function checkWinner() {
    for (let i = 0; i < 8; i++) {
        const aCONTENT = cells[winningCombinations[i][0]].textContent;
        const bCONTENT = cells[winningCombinations[i][1]].textContent;
        const cCONTENT = cells[winningCombinations[i][2]].textContent;

        let a = winningCombinations[i][0];
        let b = winningCombinations[i][1];
        let c = winningCombinations[i][2];        
        
        if (aCONTENT === bCONTENT && bCONTENT === cCONTENT && aCONTENT !== "") {
            lineCross(a, b, c);
            return aCONTENT;
        }
    }
    return null;
}

function declareWinner(winner, event) {
    if (winner) {
        if (winner === "❌") {
            redWins++;
        } else if (winner === "⭕") {
            blueWins++;
        }
        turnText.style.color = "greenyellow"
        turnText.textContent = winner === "❌" ? "RED WINS! Rematch?(R)" : "BLUE WINS! Rematch?(R)"
        document.addEventListener('keydown', function(e) {
            const key = e.key;
            if (key === 'r' || key === 'R') {
                clearBoard();
            }
        });   
        document.getElementById("redWinCount").textContent = "RED : " + redWins;
        document.getElementById("blueWinCount").textContent = "BLUE : " + blueWins;     
    }
}

function checkDraw() {
    let flag = true;
    for (let i = 0; i < 9; i++) {
        if (cells[i].textContent === "") {
            flag = false;
            break;
        }
    }
    if (flag === true) {
        draws++;
        turnText.style.color = "greenyellow";
        turnText.textContent = "DRAW! Rematch? (R)";
        document.getElementById("drawCount").textContent = "DRAW : " + draws;
        document.addEventListener('keydown', function(e) {
            const key = e.key;
            if (key === 'r' || key === 'R') {
                clearBoard();
            }
        });
    }
}

cells.forEach(cell => {
    cell.addEventListener('click', function(event) { 
        if (!cell.textContent) {
            const symbol = currentPlayer === "blue" ? "⭕" : "❌";
            const span = document.createElement('span');
            span.textContent = symbol;
            span.style.filter = currentPlayer === "blue" ? "hue-rotate(250deg)" : "hue-rotate(0deg)";
            cell.appendChild(span);
            const winner = checkWinner();
            declareWinner(winner, event);
            if (!winner) {
                switchTurn();
                checkDraw();
            }
        }
    });
});
