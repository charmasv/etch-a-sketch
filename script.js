//////////////////////////////////////
/// set variables and DOM elements ///
//////////////////////////////////////
const gridContainer = document.createElement("div");
gridContainer.setAttribute("class", "flex-container");
const resetBtn = document.getElementById("reset-btn");
const newGrid = document.getElementById("change-grid");
var opacityValue = 0;

// initialize grid with default value (16)
changeGrid();

// paint the element when mouseover
gridContainer.addEventListener("mouseover", (e) => {
  e.target.classList.add("painted");
  paintCell(e.target);
});

// reset the board
resetBtn.addEventListener("click", () => {
  reset();
});

// change the grid size to user input 1-100
newGrid.addEventListener("click", () => {
  changeGrid(getNewSize());
})


 /////////////////
 /// FUNCTIONS ///
 /////////////////

 //sets background randomly and opacity
 function paintCell(cell){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  cell.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacityValue/10})`;
  if (opacityValue < 10 ) {
    opacityValue += 1;
  };
}

// prompts for new grid size 1 - 100
function getNewSize() {
  let entry = 0;
  do {
    entry = prompt("Enter new grid size, between 1 and 100;")
    console.log(entry);
  } while (entry < 1 || entry > 100);
  return entry;
}

// draws the grid
function changeGrid(newSize = 16) {
  gridContainer.innerHTML = "";
  for ( let i = 0; i < newSize; i++){
    let row = createRowContainer();
    for (let i = 0; i < newSize; i++){
      row.appendChild(createElementDiv());
    }
    gridContainer.appendChild(row);
  };
  document.body.appendChild(gridContainer);
};

// creates new row div
function createRowContainer() {
  const rowContainer = document.createElement("div");
  rowContainer.setAttribute("class", "flex-row");
  return rowContainer;
};
// creates new cell div
function createElementDiv() {
  const elementDiv = document.createElement("div");
  elementDiv.setAttribute("class", "flex-item");
  return elementDiv;
};

//resets background and classes to default
function reset() {
  const elementArr = Array.from(document.getElementsByClassName("painted"));
  for ( let i = 0; i < elementArr.length; i++) {
    elementArr[i].classList.remove("painted");
    elementArr[i].style.backgroundColor = "initial";
    opacityValue = 0;
  }
}
