let isOperatorSelected = false;
let isEqualsPressed = false;
let valueA = "";
let valueB = "";
let operation = "";

const display = document.querySelector(".value");
const operatorDisplay = document.querySelector(".operation");

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
        operation = e.target.textContent;
        if (isOperatorSelected && valueB != "") {
            calculate();
            operation = "";
        }
        isOperatorSelected = true;
        operatorDisplay.textContent = operation;
    })
})

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener(("click"), () => {
    if (isOperatorSelected) {
        calculate();
    }
    operatorDisplay.textContent = "";
    operation = "";
})

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener(("click"), () => {
    valueA = "";
    valueB = "";
    isOperatorSelected = false;
    isEqualsPressed = false;
    display.textContent = "000";
    operatorDisplay.textContent = "";
})

const backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener("click", () => {
    if (isOperatorSelected) {
        if (valueB != "") {
            valueB = backspace(valueB);
            display.textContent = valueB;
            if(valueB == ""){
                display.textContent = "";
            }
        }
        else {
            isOperatorSelected = false;
            operatorDisplay.textContent = "";
        }
    }
    else{
        valueA = backspace(valueA);
        display.textContent = valueA;
        if(valueA == ""){
            display.textContent = "000";
        }
    } 
})

function calculate(){
    valueA = operate(valueA, valueB, operation);
    //To prevent display overflow
    if (valueA.toString().length > 13){
        valueA = valueA.toExponential(3);
    }
    display.textContent = valueA;
    valueB = "";
    isOperatorSelected = false;
    isEqualsPressed = true;
}

function backspace(value){
    return value = value.slice(0, -1);
}

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