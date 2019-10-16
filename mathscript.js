const calcState = {
    firstVal: '',
    secondVal: '',
    operator: null,
    doSomething: false
}

let display = document.getElementById('screen')

const factorialize = n => n === 0 ? 1 : n * factorialize(n - 1)
const add = (x, y) => parseFloat(x) + parseFloat(y)
const subtract = (x, y) => parseFloat(x) - parseFloat(y)
const divide = (x, y) => parseFloat(x) / parseFloat(y)
const multiply = (x, y) => parseFloat(x) * parseFloat(y)
const calculate = op => {
    let display = document.getElementById('screen')
    if (op === '+') {
        display.value = add(calcState.firstVal, calcState.secondVal)
        calcState.firstVal = display.value.toString();
        calcState.secondVal = ''
        calcState.doSomething = true;
    }
    else if (op === '-') {
        display.value = subtract(calcState.firstVal, calcState.secondVal)
        calcState.firstVal = display.value.toString();
        calcState.secondVal = ''
        calcState.doSomething = true;
    }
    else if (op === '/') {

        display.value = divide(calcState.firstVal, calcState.secondVal)
        calcState.firstVal = display.value.toString();
        calcState.secondVal = ''
        calcState.doSomething = true;
    }
    else if (op === '*') {
        display.value = multiply(calcState.firstVal, calcState.secondVal)
        calcState.firstVal = display.value.toString();
        calcState.secondVal = ''
        calcState.doSomething = true;
    }
}

function doMath(btn) {
    let display = document.getElementById('screen')
    if (btn !== 'clear') {
        if (!calcState.doSomething) {
            if (btn === '=') {
                calculate(calcState.operator)
            }
            else if (String(btn).match(/[0-9]/) !== null) {
                btn = btn.toString()
                calcState.firstVal += btn
                display.value = calcState.firstVal
            }
            else if (btn === '.') {
                btn = btn.toString()
                calcState.firstVal += btn
                display.value = calcState.firstVal
            } else if (btn !== '=' && btn !== 'clear' && btn !== 'delete' && btn !== 'factorialize') {
                btn = btn.toString();
                calcState.operator = btn
                display.value = calcState.operator
                calcState.doSomething = true
            } else if (btn === 'clear') {
                calcState.operator = null
                calcState.secondVal = ''
                calcState.firstVal = ''
                display.value = '0'
            } else if (btn === 'delete') {
                if (calcState.firstVal.length >= 1) {
                    calcState.firstVal = calcState.firstVal.slice(0, calcState.firstVal.length - 1)
                    display.value = calcState.firstVal
                }
                else {
                    calcState.firstVal = ''
                    display.value = calcState.secondVal
                }
            } else if (btn === 'factorialize') {
                calcState.firstVal = factorialize(parseFloat(display.value)).toString()
                display.value = calcState.firstVal
            }
        } else if (calcState.doSomething) {
            if (btn === '=') {
                calculate(calcState.operator)
                calcState.doSomething = false;
            }
            else if (String(btn).match(/[\+\-\/\*]/) !== null) {
                calcState.operator = btn
                calculate(calcState.operator)
            } else if (String(btn).match(/[0-9]/) !== null) {
                btn = btn.toString()
                calcState.secondVal += btn
                display.value = calcState.secondVal
            }
            else if (btn === '.') {
                btn = btn.toString()
                calcState.secondVal += btn
                display.value = calcState.secondVal
            } else if (btn !== '=' && btn !== 'clear' && btn !== 'delete' && btn !== 'factorialize') {
                btn = btn.toString();

                calcState.operator = btn
                display.value = calcState.operator
                calcState.doSomething = true
            } else if (btn === 'clear') {
                calcState.operator = null
                calcState.secondVal = ''
                calcState.firstVal = ''
                display.value = '0'
            } else if (btn === 'delete') {
                ('delete2');
                if (calcState.firstVal.length >= 1) {
                    calcState.secondVal = calcState.secondVal.slice(0, calcState.secondVal.length - 1)
                    display.value = calcState.secondVal
                }
                else {
                    calcState.secondVal = ''
                    display.value = calcState.secondVal
                }
            } else if (btn === 'factorialize') {
                calcState.secondVal = factorialize(parseFloat(display.value)).toString()
                display.value = calcState.secondVal
            }
        }
    }
    else if (btn === 'clear') {
        calcState.operator = null
        calcState.secondVal = ''
        calcState.firstVal = ''
        display.value = '0'
        calcState.doSomething = false
    }
}




