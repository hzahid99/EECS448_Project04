//Grab the angle button
let angle = document.querySelector('#angle')

//If angle button is clicked undo the show function which hides the buttons and change the inner text for the bottom left button
angle.addEventListener("click", () => {
    display.innerText = ""
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "Deg/Rad"
    
    multiply.style.display = "block"

    angle.style.fontWeight = "bold"
    length.style.fontWeight = "normal"
    speed.style.fontWeight = "normal"
    base.style.fontWeight = "normal"
    temp.style.fontWeight = "normal"
    home.style.fontWeight = "normal"
})

