//Grab speed button
let speed = document.querySelector('#speed')
//If speed button is clicked undo the show function which hides the buttons and change the inner text for the bottom left button
speed.addEventListener("click", ()=> {
    display.innerText = ""
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "Kmh/Mph"
    pi.innerText = ""
    multiply.style.display = "none"
    
    angle.style.fontWeight = "normal"
    length.style.fontWeight = "normal"
    speed.style.fontWeight = "bold"
    base.style.fontWeight = "normal"
    temp.style.fontWeight = "normal"
    home.style.fontWeight = "normal"
})

