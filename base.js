//Grab the base convertor button
let base = document.querySelector('#base')

//If temp button is clicked undo the show function which hides the buttons and change the inner text for the bottom left button
base.addEventListener("click", ()=> {
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "Bin/Dec"
    pi.innerText = ""
    multiply.style.display = "none"

    angle.style.fontWeight = "normal"
    length.style.fontWeight = "normal"
    speed.style.fontWeight = "normal"
    base.style.fontWeight = "bold"
    temp.style.fontWeight = "normal"
    home.style.fontWeight = "normal"
    
})

