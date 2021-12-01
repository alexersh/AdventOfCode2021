import { testData, input } from './data.js';
import { countResult } from './partOne.js';

const createArrayOfThreeMeasurementSums = (array) => {
	const newArray = [];

	array.forEach((data, index) => {
		const sum = data + array[index + 1] + array[index + 2];
		if (sum > 0) {
			newArray.push(sum);
		}
	});
	console.log(newArray);
	return newArray;
};

const threeMeasurementSumsTest = createArrayOfThreeMeasurementSums(testData);
const threeMeasurementSums = createArrayOfThreeMeasurementSums(input);

const testResult = countResult(threeMeasurementSumsTest);
const result = countResult(threeMeasurementSums);

console.log(`Task 2`);
console.log(`Test result: ${testResult}`, `Result: ${result}`);
