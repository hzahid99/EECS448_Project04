//Grab the temp button
let temp = document.querySelector('#temp')

//If temp button is clicked undo the show function which hides the buttons and change the inner text for the bottom left button
temp.addEventListener("click", ()=> {
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "C° to F°"
    pi.innerText = ""
    multiply.style.display = "none"
})

