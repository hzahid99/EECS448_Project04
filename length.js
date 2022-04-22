let lbutton = document.querySelector('.length')
let length = document.querySelector('#length')
lbutton.classList.add('show')

let convert = document.querySelector('.convert')

let changed = document.querySelector('.unitC')
changed.style.color = "red"

let tempbut = 0
let lengthbut = 0
let speedbut = 0;

changed.addEventListener("click", ()=> {
    let initial = changed.innerText
    if(initial == "C° to F°" || initial == "F° to C°"){
        lengthbut++
        if(lengthbut % 2 == 1) {
            changed.innerText = "F° to C°"
        } else {
            changed.innerText = "C° to F°"
        } 
    } 
    else if(initial == "Kmh/Mph" || initial == "Mph/Kmh")
    {
        speedbut++
        if(speedbut % 2 == 1)
        {
            changed.innerText = "Kmh/Mph"
        }
        else
        {
            changed.innerText = "Mph/Kmh"
        }
    }
    else {

        tempbut++
        if(tempbut % 2 == 1) {
            changed.innerText = "In to Cm"
        } else {
            changed.innerText = "Cm to In"
        }
    }    
})

length.addEventListener("click", () => {
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "Cm to In"
})


convert.addEventListener("click", ()=> {
    if(changed.innerText == "C° to F°" || changed.innerText == "F to C"){
        if(changed.innerText == "C° to F°") {
            let input = display.innerText
            let ans = (input*9/5)+32
            display.innerText = ans
        } else
        {
            let input = display.innerText
            let ans = (input - 32)*5/9
            display.innerText = ans
        }

    }
    else if(changed.innerText == "Kmh/Mph" || changed.innerText == "Mph/Kmh")
    {
        if(changed.innerText == "Kmh/Mph") {
            let input = display.innerText
            let ans = input * 0.6213711922
            display.innerText = ans
        } else {
            let input = display.innerText
            let ans = input * 1.609344
            display.innerText = ans
        }
    }
    else {
        if(changed.innerText == "Cm to In") {
            let input = display.innerText
            let ans = input/2.54
            display.innerText = ans
        } else {
            let input = display.innerText
            let ans = input*2.54
            display.innerText = ans
        }
    }
})

