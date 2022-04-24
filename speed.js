//Grab speed button
let speed = document.querySelector('#speed')
//If speed button is clicked undo the show function which hides the buttons and change the inner text for the bottom left button
speed.addEventListener("click", ()=> {
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "Kmh/Mph"
    pi.innerText = ""
    multiply.style.display = "none"
    
})

