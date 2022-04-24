//Grab the temp button
let temp = document.querySelector('#temp')

//If temp button is clicked undo the show function which hides the buttons and change the inner text for the bottom left button
temp.addEventListener("click", ()=> {
    display.innerText = ""
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "C° to F°"
    pi.innerText = "-"
    multiply.style.display = "none"

    angle.style.fontWeight = "normal"
    length.style.fontWeight = "normal"
    speed.style.fontWeight = "normal"
    base.style.fontWeight = "normal"
    temp.style.fontWeight = "bold"
    home.style.fontWeight = "normal"
})

