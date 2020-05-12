const screen = document.querySelector(".screen");
// const zero = document.querySelector("#zero");
// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#three");
// const four = document.querySelector("#four");
// const five = document.querySelector("#five");
// const six = document.querySelector("#six");
// const seven = document.querySelector("#seven");
// const eight = document.querySelector("#eight");
// const nine = document.querySelector("#nine");
const numbers = document.querySelector(".numbers");

let stuff = Array.from(numbers.childNodes);
let badStuff = stuff
	.map((button) => button.textContent)
	.filter((weirdShit) => weirdShit.includes("\n"));

console.log(badStuff);

populateScreen();

function populateScreen() {
	screen.textContent = badStuff;
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
