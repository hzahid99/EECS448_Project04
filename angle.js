//Grab the angle button
let angle = document.querySelector('#angle')

//If angle button is clicked undo the show function which hides the buttons and change the inner text for the bottom left button
angle.addEventListener("click", ()=> {
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "Deg/Rad"
})

