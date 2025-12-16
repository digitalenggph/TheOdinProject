const mainGrid = document.querySelector(".container");
const inputGridSize = document.querySelector("#grid-size")

setContainerSize();
drawGrid(inputGridSize.value);
inputGridSize.addEventListener("input", () => {
    drawGrid(Number(inputGridSize.value))
});

window.addEventListener("resize", setContainerSize);
mainGrid.addEventListener("mouseover", draw)

function setContainerSize(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const size = Math.floor(Math.min(width, height) * 0.75) ;
    mainGrid.style.height = `${size}px`
    mainGrid.style.width = `${size}px`
};

function drawGrid(size) {
    mainGrid.innerHTML = "";
    for(let row=0; row<size; row++) {
        const rowDiv = document.createElement("div")
        rowDiv.classList.add("row")
        mainGrid.appendChild(rowDiv);

        for(let i=0; i<size; i++) {
            const div = document.createElement("div");
            div.classList.add("cell");
            rowDiv.appendChild(div);
        }
    }
};

function draw(e) {
    const target = e.target;
    if (!target.matches('.cell')) return;
    target.classList.add("inked")
}




