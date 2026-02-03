function createDiv(width, height, text) {
    const container = document.getElementById("container");

    const div = document.createElement("div");
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.textContent = text;

    container.appendChild(div);
}

Window.createDiv = createDiv;
