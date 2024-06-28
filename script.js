let isOperatorSelected = false;
let isEqualsPressed = false;
let displayValue = "";
let valueA = "";
let valueB = "";
let operation = "";

const display = document.querySelector(".lcd-screen");

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.textContent == "." && display.textContent.includes(".")) return;
        if (display.textContent.length < 13){
            if (isOperatorSelected) {
                valueB += e.target.textContent;
                display.textContent = valueB;
            }
            else {
                if (isEqualsPressed) {
                    valueA = "";
                    isEqualsPressed = false;
                }
                valueA += e.target.textContent;
                display.textContent = valueA;
            }
        }
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        isOperatorSelected = true;
        operation = e.target.textContent;
        display.textContent = operation;
    })
})

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener(("click"), () => {
    if (isOperatorSelected) {
        valueA = operate(valueA, valueB, operation);
        if (valueA.toString().length > 13){
            valueA = valueA.toExponential(3);
        }
        display.textContent = valueA;
        valueB = "";
        isOperatorSelected = false;
        isEqualsPressed = true;
    }
})

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener(("click"), () => {
    valueA = "";
    valueB = "";
    isOperatorSelected = false;
    isEqualsPressed = false;
    display.textContent = "000";
})

function add(valueA, valueB){
    return valueA + valueB;
}

function subtract(valueA, valueB){
    return valueA - valueB;
}

function multiply(valueA, valueB){
    return valueA * valueB;
}

function divide(valueA, valueB){
    if(valueB == 0) return "lol, nice try";
    else return valueA / valueB;
}

function operate(valueA, valueB, operation){
    let numA = parseFloat(valueA);
    let numB = parseFloat(valueB);
    switch (operation) {
        case "+":
            return add(numA, numB);
        case "-":
            return subtract(numA, numB);
        case "×":
            return multiply(numA, numB);
        case "÷":
            return divide(numA, numB);
    }
}