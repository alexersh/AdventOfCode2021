const { input, testInput } = require('./input');

const calculateResult = (input) => {
	let counter = 0;

	input.forEach((data, index) => {
		if (input[index + 1] - data > 0) {
			counter++;
		}
	});

	return counter;
};

console.log('test: ', calculateResult(testInput));
console.log('part_one: ', calculateResult(input));

module.exports = {
	calculateResult,
};
