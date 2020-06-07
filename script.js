let screenContent = [];
let numbers = [];

const screen = document.querySelector(".screen");

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearScreen);
const back = document.querySelector("#back");
back.addEventListener("click", backspace);

//creates buttons for all the numbers and operators
const zero = document.querySelector("#zero");
zero.addEventListener("click", () => addTextToScreen(0));
const one = document.querySelector("#one");
one.addEventListener("click", () => addTextToScreen(1));
const two = document.querySelector("#two");
two.addEventListener("click", () => addTextToScreen(2));
const three = document.querySelector("#three");
three.addEventListener("click", () => addTextToScreen(3));
const four = document.querySelector("#four");
four.addEventListener("click", () => addTextToScreen(4));
const five = document.querySelector("#five");
five.addEventListener("click", () => addTextToScreen(5));
const six = document.querySelector("#six");
six.addEventListener("click", () => addTextToScreen(6));
const seven = document.querySelector("#seven");
seven.addEventListener("click", () => addTextToScreen(7));
const eight = document.querySelector("#eight");
eight.addEventListener("click", () => addTextToScreen(8));
const nine = document.querySelector("#nine");
nine.addEventListener("click", () => addTextToScreen(9));

const add = document.querySelector("#add");
add.addEventListener("click", () => getOperators(" + "));
const subtract = document.querySelector("#subtract");
subtract.addEventListener("click", () => getOperators(" - "));
const multiply = document.querySelector("#multiply");
multiply.addEventListener("click", () => getOperators(" * "));
const divide = document.querySelector("#divide");
divide.addEventListener("click", () => getOperators(" / "));
const equals = document.querySelector("#equals");
equals.addEventListener("click", () => operate(screenContent.join("")));

const point = document.querySelector("#decimal");
point.addEventListener("click", () => decimal());

//pushes inputs to the calculators screen
function addTextToScreen(number) {
    screenContent.push(number);
    screen.textContent = screenContent.join("");
}

//pushes the screen content to the numbers array, and then pushes the chosen operator to the number array
//then clears screen content so the next inputs are on a new screen
function getOperators(operator) {
    numbers.push(screenContent.join(""));
    numbers.push(operator);
    screenContent = [];
}

//goes with the clear button, completely clears out the screen and  the numbers array
function clearScreen() {
    screen.textContent = "";
    screenContent = [];
    numbers = [];
}

//does what it says, pops out the last number on the screen
function backspace() {
    screenContent.pop();
    screen.textContent = screenContent.join("");
}

//on pressing the "=" sign, this is called
//pushes the number that is on the screen to the numbers array
//to avoid using the eval function, created the evaluate, which is probably lighter than eval
//then clears out the screen content and numbers for a fresh new calculation
function operate(lastNumber) {
    numbers.push(lastNumber);
    screenContent = [];
    screen.textContent = +evaluate(numbers.join("")).toFixed(12);

    function evaluate(fn) {
        return new Function("return " + fn)();
    }

    numbers = [];
}

function decimal() {
    const dot = /[.]/;
    let decTest = dot.test(screenContent.join(""));
    if (decTest) {
        return;
    } else {
        screenContent.push(".");
        screen.textContent = screenContent.join("");
    }
}
