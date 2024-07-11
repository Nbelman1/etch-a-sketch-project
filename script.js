const boxContainer = document.querySelector(".box-container");

function createGrid(numSquares) {
    for (i = 0; i < numSquares; i++) {
        for (j = 0; j < numSquares; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            boxContainer.appendChild(box);
            box.style.width = `calc(100% / ${numSquares})`;
            box.style.height = `calc(100% / ${numSquares})`;
        }
    }
}

createGrid(16);