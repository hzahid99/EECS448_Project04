//Grabbing length by class and by id
let lbutton = document.querySelector('.length')
let length = document.querySelector('#length')

//Don't display the new divs in the regular calclator
lbutton.classList.add('show')

//Grab the = that evaluates differently for each calc mode
let convert = document.querySelector('.convert')

//Grab the C to I button that will display smth unqiue for each calc mode
let changed = document.querySelector('.unitC')
//Style the text red
changed.style.color = "red"

//Decalre counter variables for each calc mode
let tempbut = 0
let lengthbut = 0
let speedbut = 0;
let basebut = 0;

//If C to I (or other for other modes) is clicked 
changed.addEventListener("click", ()=> {
    let initial = changed.innerText
    //Alternate between C to F and F to C
    if(initial == "C° to F°" || initial == "F° to C°"){
        lengthbut++
        if(lengthbut % 2 == 1) {
            changed.innerText = "F° to C°"
        } else {
            changed.innerText = "C° to F°"
        } 
    } 

    //Alternate between kmh/mph to mph/kmh
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

    //Alternate bw Bin/Dec and Dec/Bin
    else if(initial == "Bin/Dec" || initial == "Dec/Bin")
    {
        basebut++
        if(basebut % 2 == 1)
        {
            changed.innerText = "Bin/Dec"
        }
        else
        {
            changed.innerText = "Dec/Bin"
        }
    }

    //Alternate bw Deg 2 Rad and Rad 2 Deg
    else if(initial == "Deg 2 Rad" || initial == "Rad 2 Deg")
    {
        basebut++
        if(basebut % 2 == 1)
        {
            changed.innerText = "Deg 2 Rad"
        }
        else
        {
            changed.innerText = "Rad 2 Deg"
        }
    }

    //Alternate bw In to Cm and Cm to In
    else {

        tempbut++
        if(tempbut % 2 == 1) {
            changed.innerText = "In to Cm"
        } else {
            changed.innerText = "Cm to In"
        }
    }    
})

//If switched to length tab undo the show function above that hid the buttons
length.addEventListener("click", () => {
    lbutton.classList.remove("show")
    button.style.display = "none"
    changed.innerText = "Cm to In"
})

//When = to clicked evaluate 
convert.addEventListener("click", ()=> {

    //If the button has the temp text
    if(changed.innerText == "C° to F°" || changed.innerText == "F to C"){
        //Calc for C to F
        if(changed.innerText == "C° to F°") {
            let input = display.innerText
            let ans = (input*9/5)+32
            display.innerText = ans
        } else                          //Calc for F to C
        {
            let input = display.innerText
            let ans = (input - 32)*5/9
            display.innerText = ans
        }

    }

    //If the button has the speed text
    else if(changed.innerText == "Kmh/Mph" || changed.innerText == "Mph/Kmh")
    {
        //Calc for kmh to mph 
        if(changed.innerText == "Kmh/Mph") {
            let input = display.innerText
            let ans = input * 0.6213711922
            display.innerText = ans
        } else {                        //Calc for mph to kmh
            let input = display.innerText
            let ans = input * 1.609344
            display.innerText = ans
        }
    }

    //If the button has base text
    else if(changed.innerText == "Bin/Dec" || changed.innerText == "Dec/Bin")
    {
        //Calc for bin to dec
        if(changed.innerText == "Bin/Dec") {
            let input = display.innerText
            let ans = parseInt(input, 2)
            display.innerText = ans
        } else {                        //Calc for dec to bin
            let input = display.innerText
            let ans = parseInt(input).toString(2)
            display.innerText = ans
        }
    }

    //If the button has angle text
    else if(changed.innerText == "Deg 2 Rad " || changed.innerText == "Rad 2 Deg")
    {
        //Calc for deg to rad
        if(changed.innerText == "Deg 2 Rad") {
            let input = display.innerText
            let ans = input * (Math.PI/180)
            display.innerText = ans
        } else {                        //Calc for rad to deg
            let input = display.innerText
            let ans = input * (180/Math.PI)
            display.innerText = ans
        }
    }

    //If the button has the length text
    else {
        //Calc for cm to in
        if(changed.innerText == "Cm to In") {
            let input = display.innerText
            let ans = input/2.54
            display.innerText = ans
        } else {                        //Calc for in to cm
            let input = display.innerText
            let ans = input*2.54
            display.innerText = ans
        }
    }
})

