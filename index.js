//
let display = document.getElementById('calDisplay'); 

//Getting all the divs with the class button that are all the keys of the calc
let buttons = Array.from(document.getElementsByClassName('button'));
let button = document.querySelector('.buttons')
let change = document.querySelector('.change')
change.style.color = "red"

let multiply = document.querySelector(".angle")

//Grab the home button
let home = document.querySelector('#home')

//If home is clicked invoke show which hides the buttons for other calc modes
home.addEventListener("click", ()=> {
    lbutton.classList.add("show")
    button.style.display = ""
})

let dneed = document.querySelector('.l')
let degree = 0

//If the Deg/Rad button is clicked, switch bw deg and rad with every click
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
        else if(event.target.innerText == "π"){
            display.innerText += "π"
        }
        else if (event.target.innerText == '←') {                       //If backspace is clicked
            if (display.innerText) {                                    //Check if the display has text in it
                display.innerText = display.innerText.slice(0, -1);     //If it does, remove the last charachter of the string
            }
        }

        else if (event.target.innerText == '=') { 
           
            //If user wants to use trig functions
            if(display.innerText.slice(0,3) == 'sin' || display.innerText.slice(0,3) == 'cos' || display.innerText.slice(0,3) == 'tan') {
                //get the nunber after sin/cos/tan
                let count = display.innerText.length
                let angle = display.innerText.slice(4, count-1)  //removes sin/cos/tan and paranthesis
                //get whether it is deg or rad
                let unit = change.innerText
                if (!(display.innerText.includes('(', 3)) || !display.innerText.includes(')', count-1))
                {
                    display.innerText = "Error"
                }
                //If the fun is sin
                else if(display.innerText.slice(0,3) == 'sin') {
                    //if the fun is in degree
                    if(unit == "Deg") 
                    {
                        let ans = Math.sin(deg2rad(angle));
                        display.innerText = ((ans));
                    } 
                    //If the func is in rad
                    else {
                        let ans = Math.sin(angle)
                        display.innerText = ans
                    }
                }

                //If the func is cos
                else if(display.innerText.slice(0,3) == 'cos') {
                    //if the fun is in degree
                    if(unit == "Deg") 
                    {
                        let ans = Math.cos(deg2rad(angle));
                        display.innerText = ((ans));
                    }
                    //If the func is in rad
                    else {
                        let ans = Math.cos(angle)
                        display.innerText = ans
                    }
                }

                //If the func is tan
                else if(display.innerText.slice(0,3) == 'tan') {
                    //if the fun is in degree
                    if(unit == "Deg") 
                    {
                        let ans = Math.tan(deg2rad(angle));
                        display.innerText = ((ans));
                    } 
                    //If the func is in rad
                    else {
                        let ans = Math.tan(angle)
                        display.innerText = ans
                    }
                }
            }
            //If no trig func  
            else
            {
                try 
                {                                                       //Try to the evaluate the operation between the strings eg 1+1
                    display.innerText = eval(display.innerText);
                } catch {                                                   //If it can't evaluate, display "Error"
                    display.innerText = "Error"
                }
            }                
        }

        else {
            display.innerText += event.target.innerText;                //For all the digits and operators, display will display the strings eg 2*6
        }                                                               //This is evaluated by =

        function deg2rad(degrees)                                       //To convert angle in degrees to radians
        {
            return ( degrees * ((Math.PI) / 180));
        }
    });
});


