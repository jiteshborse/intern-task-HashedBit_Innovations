function swapTheme() {
    const appDiv = document.getElementById("app");
    const button = document.getElementById("swap");

    if (appDiv.classList.contains("day")) {
        appDiv.classList.remove("day");
        appDiv.classList.add("night");

        button.classList.remove("button_day");
        button.classList.add("button_night");
    } else {
        appDiv.classList.remove("night");
        appDiv.classList.add("day");

        button.classList.remove("button_night");
        button.classList.add("button_day");
    }
}
