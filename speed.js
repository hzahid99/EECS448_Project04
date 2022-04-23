let speed = document.querySelector('#speed')

speed.addEventListener("click", ()=> {
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "Kmh/Mph"
})

