// set querySelectors
const boxContainer = document.querySelector(".box-container");
const promptBtn = document.querySelector("#promptMe");

// creates a grid with number of rows and columns of boxes defined by numSquares
// box size scales to fit inside grid container
// boxes change color to black when hovered over with mouse
function createGrid(numSquares) {
    for (i = 0; i < numSquares; i++) {
        for (j = 0; j < numSquares; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            boxContainer.appendChild(square);
            square.style.width = `calc(100% / ${numSquares})`;
            square.style.height = `calc(100% / ${numSquares})`;

            square.addEventListener("mouseover", function(e) {
                square.style.backgroundColor = "black";
            });
        }
    }
}

// call createGrid function on page load
createGrid(16);

// prompt user to enter size of grid on button press
// calls createGrid with user-specified number of squares 
promptBtn.addEventListener("click", function(e) {
    let userInput = prompt("How many squares should each row and column have?", "Enter number lower than 100");
    if (userInput <= 100) {
        const squares = boxContainer.querySelectorAll(".square");
        squares.forEach((s) => {
            s.remove();
        });
        createGrid(userInput);
    } else {
        alert("Your number is too high! Try again.");
    }
});