let displayValue = '';

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function clearLastEntry() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function toggleSign() {
    if (displayValue !== '' && displayValue !== '0') {
        if (displayValue.charAt(0) === '-') {
            displayValue = displayValue.slice(1);
        } else {
            displayValue = `-${displayValue}`;
        }
        updateDisplay();
    }
}

function calculate() {
    try {
        let result = eval(displayValue);
        displayValue = String(result);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
