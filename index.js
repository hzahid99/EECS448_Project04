//
let display = document.getElementById('calDisplay'); 

//Getting all the divs with the class button that are all the keys of the calc
let buttons = Array.from(document.getElementsByClassName('button'));
let button = document.querySelector('.buttons')
let change = document.querySelector('.change')
change.style.color = "red"

let home = document.querySelector('#home')

home.addEventListener("click", ()=> {
    lbutton.classList.add("show")
    button.style.display = ""
})

let dneed = document.querySelector('.l')
let degree = 0

change.addEventListener("click", ()=> {
    degree++
    if(degree % 2 == 1) {
        change.innerText = "Rad"
    } else {
        change.innerText = "Deg"
    }
})

//Traversing through the array of buttons and adding event listener to each of them, keys waiting for clicks to happen
//event object is the button that gets clicked
buttons.map(button => { 
    button.addEventListener('click', (event) => {   
        if (event.target.innerText == 'C') {                            //If the key C is clicked 
            display.innerText = '';                                     //Reset the calculator and clear out the display by using an empty string
        }



        else if (event.target.innerText == '←') {                       //If backspace is clicked
            if (display.innerText) {                                    //Check if the display has text in it
                display.innerText = display.innerText.slice(0, -1);     //If it does, remove the last charachter of the string
            }
        }

        else if (event.target.innerText == '=') {    
            if(display.innerText.slice(0,3) == 'sin' || display.innerText.slice(0,3) == 'cos' || display.innerText.slice(0,3) == 'tan') {
                let angle = display.innerText.slice(3)
                let unit = change.innerText
                if(display.innerText.slice(0,3) == 'sin') {
                    if(unit == "Deg") {
   
                    } else {
                        let ans = Math.sin(angle)
                        display.innerText = ans
                    }
                }

                else if(display.innerText.slice(0,3) == 'cos') {
                    if(unit == "Deg") {
   
                    } else {
                        let ans = Math.cos(angle)
                        display.innerText = ans
                    }
                }
                else if(display.innerText.slice(0,3) == 'tan') {
                    if(unit == "Deg") {
   
                    } else {
                        let ans = Math.tan(angle)
                        display.innerText = ans
                    }
                }
            }
                              
            try {                                                       //Try to the evaluate the operation between the strings eg 1+1
                display.innerText = eval(display.innerText);
            } catch {                                                   //If it can't evaluate, display "Error"
                display.innerText = "Error"
            }
        }

        else {
            display.innerText += event.target.innerText;                //For all the digits and operators, display will display the strings eg 2*6
        }                                                               //This is evaluated by =

    });
});


