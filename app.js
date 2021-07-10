const container = document.getElementById("container");
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", resetBoard);

// Function that builds a grid in the "container"
function createGrid(x) {
  const dimension = `${960 / x}px`;
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      const cell = document.createElement("div");
      cell.classList.add("grid");
      cell.style.width = dimension;
      cell.style.height = dimension;
      cell.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
      });
      container.appendChild(cell);
    }
  }
}

function resetBoard() {
  container.innerText = "";
  const input = prompt("How many pixels wide/high? 100px max please");
  createGrid(input);
}

createGrid(32);
