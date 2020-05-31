let screenContent = [];
let numbers = [];

const screen = document.querySelector(".screen");

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearScreen);

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

//pushes inputs to the calculators screen
function addTextToScreen(number) {
    screenContent.push(number);
    screen.textContent = screenContent.join("");
}

// THIS IS A TEST FOR HOW OPERATIONS WILL WORK
// pushes digits from the screen to an array called numbers, which will hold these numbers
// eventually, on pressing enter the numbers array will be cleared out
function getOperators(operator) {
    numbers.push(screenContent.join(""));
    numbers.push(operator);
    screenContent = [];
    console.log(numbers);
}

//goes with the clear button, completely clears out the screen and  the numbers array
function clearScreen() {
    screen.textContent = "";
    screenContent = [];
    numbers = [];
    console.log(numbers);
}

function operate(lastNumber) {
    numbers.push(lastNumber);
    console.log(numbers.join(""));
    console.log(typeof numbers.join(""));
}
