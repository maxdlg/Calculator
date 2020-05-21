let screenContent = [];

const screen = document.querySelector(".screen");
const clear = document.querySelector("#clear");
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

function addTextToScreen(number) {
    screenContent.push(number);
    screen.textContent = screenContent.join("");
}

function operate(numberOne, numberTwo, operator) {
    if (operator === "add") {
        return add(numberOne, numberTwo);
    } else if (operator === "subtract") {
        return subtract(numberOne, numberTwo);
    } else if (operator === "multiply") {
        return multiply(numberOne, numberTwo);
    } else if (operator === "divide") {
        return divide(numberOne, numberTwo);
    } else {
        return 0;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
