//Grab the base convertor button
let base = document.querySelector('#base')

//If temp button is clicked undo the show function which hides the buttons and change the inner text for the bottom left button
base.addEventListener("click", ()=> {
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "Bin/Dec"
})

