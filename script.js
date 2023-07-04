function createGrid(size) {
    container = document.querySelector(".container");
    container.textContent = "";

    for (let i = 0; i < size; i++) {
        let nextRow = document.createElement("div");
        nextRow.setAttribute("class", 'row');
        container.appendChild(nextRow);

        for (let j = 0; j < size; j++) {
            let nextDivColItem = document.createElement("div");
            nextDivColItem.setAttribute("class", 'grid-box');

            nextRow.appendChild(nextDivColItem);
        }
    }
}

createGrid(40);
