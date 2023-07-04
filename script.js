let canDraw = false;

let paintColor = "#332d38";

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

function generateHslaColor(saturation, lightness, alpha) {
    let hue = Math.floor(Math.random() * 360);
    return `hsla(${hue},${saturation}%,${lightness}%,${alpha})`;
}

function paint(box) {
    // Erase Mode
    eraseBtn = document.querySelector("#erase-btn");
    if (eraseBtn.classList.contains("erase-selected")) {
        box.classList.remove("drawn")
        return "#fbf7ff";
    }

    if (box.classList.contains("drawn")) {
        return;
    }

    let color;

    // Paint Mode
    paintBtn = document.querySelector("#paint-btn");
    if (paintBtn.classList.contains("selected")) {
        color = paintColor;
    }

    // Darken for paint
    darkenBtn = document.querySelector("#darken-btn");
    if (darkenBtn.classList.contains("selected")) {
        
    }

    // Rainbow Mode
    rainbowBtn = document.querySelector("#rainbow-btn");
    if (rainbowBtn.classList.contains("selected")) {
        color = generateHslaColor(80, 50, 1);
    }

    box.classList.add("drawn")
    return color;
}

createGrid(20);

// Toggle canDraw
container = document.querySelector(".container");
container.addEventListener("click", (e) => {
    canDraw = !canDraw;
});

// Color tiles black on hover
boxes = document.querySelectorAll(".grid-box");
boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
        if (canDraw) {
            box.style["background-color"] = paint(box);
        }
    });

    box.addEventListener("mouseover", (e) => {
        console.log("entered bonx");
    },
    {once : true});
});

// Get buttons by type
paintBtns = document.querySelectorAll(".paint");
eraseBtn = document.querySelector("#erase-btn");
drawBtns = document.querySelectorAll(".draw");

// Paint button events
paintBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btn.classList.toggle("selected");
    });
});

// Drawing buttons (toggle like radio buttons would)
drawBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        drawBtns.forEach((b) => {
            if (!(btn.id == b.id)) {
                b.classList.remove("selected");
                eraseBtn.classList.remove("erase-selected");
            }
        });
    });
});

// Erase button events
eraseBtn.addEventListener("click", (e) => {
    eraseBtn.classList.toggle("erase-selected");
    paintBtns.forEach((btn) => {
        btn.classList.remove("selected");
    });
});

// Set color
dotBtn = document.querySelector(".dot");
dotBtn.addEventListener("click", (e) => {
    const event = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    const cb = document.getElementById("color-picker");
    const cancelled = cb.dispatchEvent(event);
});

// Color picker
colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("input", (e) => {
    console.log(colorPicker.value);
    paintColor = colorPicker.value;
    dotBtn.style["background-color"] = paintColor;
});
