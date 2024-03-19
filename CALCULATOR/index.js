
const display = document.getElementById('display');
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        display.value = value;
        resultDisplayed = false;
    } else {
        if (value === '+' || value === '-' || value === 'x' || value === '÷') {
            display.value += ` ${value} `;
        } else {
            display.value += value;
        }
    }
}

function appendSymbol(symbol) {
    if (resultDisplayed) {
        display.value = '';
        resultDisplayed = false;
    }

    if (symbol === 'x') {
        symbol = '*';
    } else if (symbol === '÷') {
        symbol = '÷';
    }

    display.value += symbol;
}

function clearEntry() {
    display.value = display.value.slice(0, -1);
}

function clearAll() {
    display.value = '';
    resultDisplayed = false;
}

function calculate() {
    try {
        let expression = display.value.replace(/x/g, '*').replace(/÷/g, '/');
        display.value = eval(expression);
        resultDisplayed = true;
    } catch (error) {
        display.value = 'Error';
    }
}