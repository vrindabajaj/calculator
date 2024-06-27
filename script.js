let valueA = "";
let valueB = "";
let operation = "";

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
    return valueA / valueB;
}

function operate(valueA, valueB, operation){
    switch (operation) {
        case "+":
            add(valueA, valueB);
            break;
        case "-":
            subtract(valueA, valueB);
            break;
        case "×":
            add(valueA, valueB);
            break;
        case "+":
            add(valueA, valueB);
            break;
    }
}