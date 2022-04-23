let temp = document.querySelector('#temp')

temp.addEventListener("click", ()=> {
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "C° to F°"
})

