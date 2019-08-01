function solve() {
	let inputElement = document.getElementById('input').value;
	let resultElement = document.getElementsByClassName('resultBox')[0].getElementsByTagName('p')[0];

	let splittedNums = inputElement.split('').map(x => Number(x));
	let sum = splittedNums.reduce((x, y) => x + y, 0);

	if (sum % 10 == 0) {
		sum /= 10;
	}
	else {
		let remainder = sum % 10;
		sum = parseInt(sum / 10);
		sum += remainder;

	}

	splittedNums.splice(0, sum);
	splittedNums.splice(splittedNums.length - sum, splittedNums.length);

console.log(splittedNums.length);


	let newString = splittedNums.join('');

	let result = '';
	for (let i = 0; i < newString.length; i += 8) {
		let character = newString.substr(i, 8);

		console.log(character);

		result += String.fromCharCode(parseInt(character, 2).toString(10));
	}

	resultElement.innerHTML += result;
}