let play = true;

function clickButton(params) {
    const element = document.getElementById("item"+params)
    if (play) {
        element.style.backgroundColor = "red"
    } else {
        element.style.backgroundColor = "blue"
    }
    play = !play;
}