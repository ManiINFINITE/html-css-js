class Alert {
    constructor(message) {
        this.message = message;
    }

    show() {
        const newAlert = document.createElement("div");
        newAlert.textContent = this.message;
        newAlert.style.height = "150px";
        newAlert.style.width = "350px";
        newAlert.style.backgroundColor = "#FFF";
        newAlert.style.color = "#F00";
        newAlert.style.display = "grid";
        newAlert.style.placeItems = "center";
        newAlert.style.position = "fixed";
        newAlert.style.top = "50%";
        newAlert.style.left = "50%";
        newAlert.style.transform = "translate(-50%, -50%)";
        newAlert.style.boxShadow = "0 0 20px 5px #F00";
        newAlert.style.zIndex = "1000";
        newAlert.style.fontFamily = "Arial";
        newAlert.style.fontWeight = "900";
        newAlert.style.borderRadius = "15px";

        document.body.appendChild(newAlert);

        setTimeout(() => {
            newAlert.remove();
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('.square');
    let selectedPiece = null;
    let selectedSquare = null;
    let isWhiteTurn = true;

    squares.forEach(square => {
        square.addEventListener('click', function () {
            const piece = this.querySelector('img');

            if (piece && !selectedPiece) {
                if ((isWhiteTurn && piece.alt.startsWith('white')) || (!isWhiteTurn && piece.alt.startsWith('black'))) {
                    if (hasValidMoves(piece, this)) {
                        selectedPiece = piece;
                        selectedSquare = this;
                        selectedPiece.style.filter = 'drop-shadow(0 0 15px #ff0000)';
                    } else {
                        new Alert("This piece has no valid moves!").show();
                    }
                } else {
                    new Alert(`It's ${isWhiteTurn ? 'white' : 'black'}'s turn!`).show();
                }
            } else if (selectedPiece && this !== selectedSquare) {
                if (isValidMove(selectedPiece, selectedSquare, this)) {
                    if (this.querySelector('img')) {
                        this.querySelector('img').remove(); // Capture the piece
                    }
                    this.appendChild(selectedPiece);
                    selectedPiece.style.filter = '';
                    selectedPiece = null;
                    selectedSquare = null;

                    // Check for checkmate or stalemate
                    if (isCheckmate()) {
                        new Alert(`${isWhiteTurn ? 'Black' : 'White'} wins by checkmate!`).show();
                    } else if (isStalemate()) {
                        new Alert("The game is a stalemate!").show();
                    } else {
                        isWhiteTurn = !isWhiteTurn; // Switch turn
                    }
                } else {
                    new Alert("Invalid move!").show();
                }
            } else if (selectedPiece && this === selectedSquare) {
                selectedPiece.style.filter = '';
                selectedPiece = null;
                selectedSquare = null;
            }
        });
    });

    function hasValidMoves(piece, fromSquare) {
        const fromIndex = Array.from(fromSquare.parentNode.children).indexOf(fromSquare);
        const possibleMoves = [];

        squares.forEach(toSquare => {
            const toIndex = Array.from(toSquare.parentNode.children).indexOf(toSquare);
            const rowDifference = Math.floor(toIndex / 8) - Math.floor(fromIndex / 8);
            const colDifference = toIndex % 8 - fromIndex % 8;

            if (isValidMove(piece, fromSquare, toSquare)) {
                possibleMoves.push(toSquare);
            }
        });

        return possibleMoves.length > 0;
    }

    function isValidMove(piece, fromSquare, toSquare) {
        const pieceType = piece.alt.split('-')[1];
        const fromIndex = Array.from(fromSquare.parentNode.children).indexOf(fromSquare);
        const toIndex = Array.from(toSquare.parentNode.children).indexOf(toSquare);
        const rowDifference = Math.floor(toIndex / 8) - Math.floor(fromIndex / 8);
        const colDifference = toIndex % 8 - fromIndex % 8;
        const destinationPiece = toSquare.querySelector('img');

        if (destinationPiece && destinationPiece.alt.split('-')[0] === piece.alt.split('-')[0]) {
            return false;
        }

        switch (pieceType) {
            case 'pawn':
                return isValidPawnMove(piece, rowDifference, colDifference, fromSquare, toSquare);
            case 'rook':
                return isValidRookMove(rowDifference, colDifference, fromSquare, toSquare);
            case 'knight':
                return isValidKnightMove(rowDifference, colDifference);
            case 'bishop':
                return isValidBishopMove(rowDifference, colDifference, fromSquare, toSquare);
            case 'queen':
                return isValidQueenMove(rowDifference, colDifference, fromSquare, toSquare);
            case 'king':
                return isValidKingMove(rowDifference, colDifference);
            default:
                return false;
        }
    }

    function isValidPawnMove(piece, rowDifference, colDifference, fromSquare, toSquare) {
        const direction = piece.alt.startsWith('white') ? -1 : 1;
        const startRow = piece.alt.startsWith('white') ? 6 : 1;
        const fromIndex = Array.from(fromSquare.parentNode.children).indexOf(fromSquare);

        if (colDifference === 0 && toSquare.querySelector('img') === null) {
            if (rowDifference === direction) {
                return true;
            } else if (Math.floor(fromIndex / 8) === startRow && rowDifference === 2 * direction && fromSquare.parentNode.children[fromIndex + 8 * direction].querySelector('img') === null) {
                return true;
            }
        } else if (Math.abs(colDifference) === 1 && rowDifference === direction && toSquare.querySelector('img') !== null) {
            return true;
        }

        return false;
    }

    function isValidRookMove(rowDifference, colDifference, fromSquare, toSquare) {
        const fromIndex = Array.from(fromSquare.parentNode.children).indexOf(fromSquare);
        if (rowDifference === 0) {
            for (let i = 1; i < Math.abs(colDifference); i++) {
                if (fromSquare.parentNode.children[fromIndex + Math.sign(colDifference) * i].querySelector('img') !== null) {
                    return false;
                }
            }
            return true;
        } else if (colDifference === 0) {
            for (let i = 1; i < Math.abs(rowDifference); i++) {
                if (fromSquare.parentNode.children[fromIndex + Math.sign(rowDifference) * i * 8].querySelector('img') !== null) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    function isValidKnightMove(rowDifference, colDifference) {
        return (Math.abs(rowDifference) === 2 && Math.abs(colDifference) === 1) || (Math.abs(rowDifference) === 1 && Math.abs(colDifference) === 2);
    }

    function isValidBishopMove(rowDifference, colDifference, fromSquare, toSquare) {
        const fromIndex = Array.from(fromSquare.parentNode.children).indexOf(fromSquare);
        if (Math.abs(rowDifference) === Math.abs(colDifference)) {
            for (let i = 1; i < Math.abs(rowDifference); i++) {
                if (fromSquare.parentNode.children[fromIndex + Math.sign(rowDifference) * i * 8 + Math.sign(colDifference) * i].querySelector('img') !== null) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    function isValidQueenMove(rowDifference, colDifference, fromSquare, toSquare) {
        return isValidRookMove(rowDifference, colDifference, fromSquare, toSquare) || isValidBishopMove(rowDifference, colDifference, fromSquare, toSquare);
    }

    function isValidKingMove(rowDifference, colDifference) {
        return Math.abs(rowDifference) <= 1 && Math.abs(colDifference) <= 1;
    }

    function isCheck() {
        return false;
    }

    function isCheckmate() {
        return false;
    }

    function isStalemate() {
        return false;
    }
});
