const { input, testInput } = require('./input');
const { calculateResult } = require('./part_one');

const createSumsArr = (input) => {
	const newArray = [];

	input.forEach((data, index) => {
		const sum = data + input[index + 1] + input[index + 2];
		if (sum > 0) {
			newArray.push(sum);
		}
	});
	return newArray;
};

const threeMeasurementSumsTest = createSumsArr(testInput);
const threeMeasurementSums = createSumsArr(input);

console.log('test: ', calculateResult(threeMeasurementSumsTest));
console.log('part_two: ', calculateResult(threeMeasurementSums));
