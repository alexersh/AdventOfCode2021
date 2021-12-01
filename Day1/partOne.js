import { input, testData } from './data.js';

export const countResult = (array) => {
	let counter = 0;

	array.forEach((data, index) => {
		if (array[index + 1] - data > 0) {
			counter += 1;
		}
	});

	return counter;
};

const testResult = countResult(testData);

const result = countResult(input);

console.log(`Task 1`);
console.log(`Test result: ${testResult}`, `Result: ${result}`);
