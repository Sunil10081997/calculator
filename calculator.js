console.log('imported');
const delet = document.querySelector('#del');
const input = document.querySelector('#inputscreen');
const num = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const equalto = document.querySelector('.eqls');
const dot = document.getElementById('dots');

let mathcalculation = [];
let currentNumber = '';
let previousNumber = '';
let operator = null;

const updateNumber = (e) => {
	if (previousNumber !== '' && operator === '') {
		previousNumber = '';
	}
	// this is for storing the clicked button
	let inputTxt = e.target.innerText;
	if (currentNumber === '' && inputTxt === '.') {
		currentNumber = '0';
		input.innerHTML = currentNumber;
	} else if (inputTxt === '.' && currentNumber.includes('.')) {
		inputTxt = null;
	} else {
		currentNumber = currentNumber + inputTxt;
		input.innerHTML = currentNumber;
		//console.log(currentNumber);
	}
};

const selectOperator = (e) => {
	if (previousNumber !== '') {
		mathcalculation.push(previousNumber);
		if (mathcalculation[mathcalculation.length - 1] !== ('+' || '-' || '*' || '/')) {
			operator = e.target.innerText;
			mathcalculation.push(operator);
		}
		previousNumber = '';
		input.innerHTML += previousNumber;
		//console.log(previousNumber);
	}
	if (currentNumber !== '') {
		mathcalculation.push(currentNumber);
		if (mathcalculation[mathcalculation.length - 1] !== ('+' || '-' || '*' || '/')) {
			operator = e.target.innerText;
			mathcalculation.push(operator);
		}
		currentNumber = '';
		input.innerText += operator;
		//console.log(mathcalculation);
	}
};

const findResult = (e) => {
	if (currentNumber !== '') {
		mathcalculation.push(currentNumber);
	}
	const result = eval(mathcalculation.join('')).toString();
	input.innerHTML = result;
	previousNumber = result;
	currentNumber = '';
	mathcalculation = [];
	operator = null;
};

delet.onclick = () => {
	input.innerHTML = '0';
	currentNumber = '';
	previousNumber = '';
	mathcalculation = [];
};

for (i = 0; i < num.length; i++) {
	num[i].addEventListener('click', updateNumber);
	//console.log(num[i])
}
for (let i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', selectOperator);
	//console.log(operators[i]);
}

equalto.addEventListener('click', findResult);

