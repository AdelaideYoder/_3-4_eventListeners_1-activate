/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/
document.querySelector("#activate-flight").addEventListener("click", handlerFunction)

function handlerFunction() {
    const element = document.getElementById("flight");
    element.className = element.className.replace("disable", "enabled");
    console.log(element)
}

handlerFunction()

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/
document.querySelector("#activate-mindreading").addEventListener("click", handlerFunction1)

function handlerFunction1() {
    const element = document.getElementById("mindreading");
    element.className = element.className.replace("disable", "enabled");
    console.log(element)
}

handlerFunction1()

document.querySelector("#activate-xray").addEventListener("click", handlerFunction2)

function handlerFunction2() {
    const element = document.getElementById("xray");
    element.className = element.className.replace("disable", "enabled");
    console.log(element)
}

handlerFunction2()


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/