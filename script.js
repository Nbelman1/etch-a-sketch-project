let container = document.querySelector("#container");

function createDivs(num) {
    for (i = 0; i < num; i++) {
        let childDiv = document.createElement("div");
        childDiv.classList.add("childDiv");
        container.appendChild(childDiv);
    }
}

createDivs(16);