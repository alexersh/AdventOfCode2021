const { input, testInput } = require('./input');
const { convertBinaryToDecimal, countFrequencyOfSymbol } = require('./utilities');

const filterData = (input, isMostFrequent) => {
	let filteredArray = [...input];
	let currSymbol = 0;

	while (filteredArray.length !== 1) {
		filteredArray = filteredArray.filter((binary) => {
			return binary[currSymbol] === countFrequencyOfSymbol(filteredArray, currSymbol, isMostFrequent);
		});
		currSymbol++;
	}
	return filteredArray[0];
};

const calculateResult = (input) => {
	const oxygenRate = filterData(input);

	const oxygenRateDecimal = convertBinaryToDecimal(oxygenRate);

	const CO2Rate = filterData(input, false);

	const CO2RateDecimal = convertBinaryToDecimal(CO2Rate);

	return oxygenRateDecimal * CO2RateDecimal;
};

console.log('test: ', calculateResult(testInput));
console.log('part_two: ', calculateResult(input));
