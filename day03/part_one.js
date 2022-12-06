const { input, testInput } = require('./input');
const { convertBinaryToDecimal, countFrequencyOfSymbol } = require('./utilities');

const calculateResult = (input) => {
	const gammaRate = input[0].split('').reduce((gamma, _, index) => {
		return gamma + countFrequencyOfSymbol(input, index);
	}, '');

	const decimalGamma = convertBinaryToDecimal(gammaRate);

	const epsilonRate = input[0].split('').reduce((gamma, _, index) => {
		return gamma + countFrequencyOfSymbol(input, index, false);
	}, '');

	const decimalEpsilon = convertBinaryToDecimal(epsilonRate);

	return decimalEpsilon * decimalGamma;
};

console.log('test: ', calculateResult(testInput));
console.log('part_one: ', calculateResult(input));
