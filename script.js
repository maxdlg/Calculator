let screenContent = [];
let numbers = [];

let isNegative = false;
const screen = document.querySelector(".screen");

document.addEventListener("keydown", keyPush);
document.addEventListener("click", keyPush);

//pushes inputs to the calculators screen
function addTextToScreen(number) {
    if (screenContent.length > 11) {
        return;
    } else {
        screenContent.push(number);
        screen.textContent = screenContent.join("");
    }
}

//pushes the screen content to the numbers array, and then pushes the chosen operator to the number array
//then clears screen content so the next inputs are on a new screen
function getOperators(operator) {
    numbers.push(screenContent.join(""));
    numbers.push(operator);
    screenContent = [];
}

function makeNegative() {
    if (!isNegative) {
        screenContent.unshift("-");
        screen.textContent = screenContent.join("");
        isNegative = true;
    } else {
        screenContent.shift();
        screen.textContent = screenContent.join("");
        isNegative = false;
    }
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
    let unpolishedAnswer = +evaluate(numbers.join("")).toFixed(12);
    checkAnswerLength(unpolishedAnswer.toString());

    function evaluate(fn) {
        return new Function("return " + fn)();
    }

    numbers = [];
    screenContent = [];
}

//checks to see if there is a decimal in the number, if there is dissallows
//another decimal input
function addDecimal() {
    const dot = /[.]/;
    let decTest = dot.test(screenContent.join(""));
    if (decTest) {
        return;
    } else {
        screenContent.push(".");
        screen.textContent = screenContent.join("");
    }
}

function checkAnswerLength(answer) {
    let answerArray = [...answer];
    const dot = /[.]/;
    let decTest = dot.test(answer);

    //checks for an output greater than 11(the number of characters that can fit on the screen)
    //if more than 11 and is a decimal, just cuts off the other numbers
    //if more than 11 and is not a decimal, will give the answer in exponential notation
    if (answerArray.length > 12 && decTest) {
        answerArray.splice(12, answerArray.length).join("");
        screen.textContent = answerArray.join("");
    } else if (answerArray.length > 12) {
        screen.textContent = Number(answer).toExponential(6);
    } else if (answer === "NaN" || answer === "Infinity") {
        screen.textContent = "lol idiot";
    } else {
        screen.textContent = answer;
    }
}

//detects what button is pressed, what key is pressed without the need for a shit ton on document.addEventListeners and making consts
function keyPush(evt) {
    switch (evt.key || evt.originalTarget.id) {
        case "one":
        case "1":
            addTextToScreen(1);
            break;
        case "two":
        case "2":
            addTextToScreen(2);
            break;
        case "three":
        case "3":
            addTextToScreen(3);
            break;
        case "four":
        case "4":
            addTextToScreen(4);
            break;
        case "five":
        case "5":
            addTextToScreen(5);
            break;
        case "six":
        case "6":
            addTextToScreen(6);
            break;
        case "seven":
        case "7":
            addTextToScreen(7);
            break;
        case "eight":
        case "8":
            addTextToScreen(8);
            break;
        case "nine":
        case "9":
            addTextToScreen(9);
            break;
        case "zero":
        case "0":
            addTextToScreen(0);
            break;
        case "add":
        case "+":
            getOperators(" + ");
            break;
        case "subtract":
        case "-":
            getOperators(" - ");
            break;
        case "multiply":
        case "*":
            getOperators(" * ");
            break;
        case "divide":
        case "/":
            getOperators(" / ");
            break;
        case "decimal":
        case ".":
            addDecimal();
            break;
        case "equals":
        case "Enter":
        case "=":
            operate(screenContent.join(""));
            break;
        case "back":
        case "Backspace":
            backspace();
            break;
        case "clear":
        case "Delete":
        case "c":
            clearScreen();
            break;
        case "negative":
            makeNegative();
            break;
    }
}
