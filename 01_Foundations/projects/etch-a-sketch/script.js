const mainGrid = document.querySelector(".container");
const inputGridSize = document.querySelector("#grid-size");
const inputPen = document.querySelector("#pen");
const darkeningButton = document.querySelector("#darkening")
const resetButton = document.querySelector("#reset");

let penSettings = "vanilla";
let isLeftMouseDown = false;

setContainerSize();
drawGrid(inputGridSize.value);
inputPen.addEventListener("click", setPen);
inputGridSize.addEventListener("input", () => {
    drawGrid(Number(inputGridSize.value))
});

window.addEventListener("resize", setContainerSize);
mainGrid.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("cell")) return;
    
    (!isLeftMouseDown) 
        ? draw(e)
        : erase(e)
});
mainGrid.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isLeftMouseDown = true;
    }
});

document.addEventListener("mouseup", () => {
    isLeftMouseDown = false;
});

mainGrid.addEventListener("mouseup", () => {
    isLeftMouseDown = false;
});

darkeningButton.addEventListener("click", setOpacity);
resetButton.addEventListener("click", reset);

function setContainerSize(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const size = Math.floor(Math.min(width, height) * 0.75) ;
    mainGrid.style.height = `${size}px`
    mainGrid.style.width = `${size}px`
};

function drawGrid(size) {
    clearCanvas();
    for(let row=0; row<size; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        mainGrid.appendChild(rowDiv);

        for(let i=0; i<size; i++) {
            const div = document.createElement("div");
            div.classList.add("cell");
            rowDiv.appendChild(div);
        };
    };
};

function setPen(e) {
    const target = e.target;
    if (!target.matches('button')) return;
    penSettings = target.id;
}

function setOpacity() {
    const inkedCells = mainGrid.querySelectorAll(".cell.inked");
    inkedCells.forEach(cell => {
    cell.style.opacity = "0.1";
    });
}


function draw(e) {
    const target = e.target;

    switch (penSettings) {
        case "rainbow":
            const color = getRandomColor();
            target.style.borderColor = color;
            target.style.backgroundColor = color;
            target.style.opacity = 1;
            target.classList.add("inked");
            break;
        case "darkening":
            const isInked = target.classList.contains("inked");
            const isDarkened = target.classList.contains("darkened")
            if (isInked) {
                target.style.opacity = 0.1;
                target.classList.remove("inked")
                target.classList.add("darkened")
            } else if (!isDarkened) {
                target.style.backgroundColor = "black";
                target.style.opacity = 0.1;
                target.classList.add("darkened");
            } else {
                let currentOpacity = parseFloat(target.style.opacity)
                if (currentOpacity !== 1) {
                    currentOpacity += 0.1
                    target.style.opacity = currentOpacity;
                };
            }
            break;
        default:
            target.style.borderColor = "black";
            target.style.backgroundColor = "black";
            target.style.opacity = 1;
            target.classList.add("inked");
            break;
    }   
};


function erase(e) {
    const target = e.target;
    target.removeAttribute("style");
}

function clearCanvas() {
    mainGrid.innerHTML = "";
};

function reset() {
    clearCanvas();
    inputGridSize.value = 16;
    drawGrid(inputGridSize.value);
};


function getRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b}`
}


