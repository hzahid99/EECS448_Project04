//Grab the temp button
let temp = document.querySelector('#temp')

//If temp button is clicked undo the show function which hides the buttons and change the inner text for the bottom left button
temp.addEventListener("click", ()=> {
    display.innerText = "" //Clear display if tab changed
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "C° to F°"
    //A button for negative temp
    pi.innerText = "-"
    multiply.style.display = "none"

    // Temp tab in bold to indicate the current tab
    angle.style.fontWeight = "normal"
    length.style.fontWeight = "normal"
    speed.style.fontWeight = "normal"
    base.style.fontWeight = "normal"
    temp.style.fontWeight = "bold"
    home.style.fontWeight = "normal"
})

