function createGrid(size) {
    container = document.querySelector(".container");
    container.textContent = "";

    for (let i = 0; i < size; i++) {
        let nextRow = document.createElement("div");
        nextRow.setAttribute("class", "row");
        container.appendChild(nextRow);

        for (let j = 0; j < size; j++) {
            let nextDivColItem = document.createElement("div");
            nextDivColItem.setAttribute("class", "grid-box");

            nextRow.appendChild(nextDivColItem);
        }
    }
}

createGrid(20);

// Color tiles black on hover
boxes = document.querySelectorAll(".grid-box")
boxes.forEach( (box) => {
   box.addEventListener("mouseover", (e) => {
        box.style['background-color'] = 'black';
        console.log('test');
   }); 
});



