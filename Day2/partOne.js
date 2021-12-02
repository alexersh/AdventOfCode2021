import { input, testData } from './data.js';

export const up = 'up'; // up decrease depth
export const down = 'down'; // down increase depth
export const forward = 'forward'; // forward increase horizontal

const reducer = (sum = 0, data) => {
	return sum + data;
};

const sumOfSteps = (array, stepName) => {
	return array
		.map((data) => {
			const step = data.split(' ');
			if (step[0] === stepName) return +step[1];
		})
		.filter((n) => n) // clear undefined from array
		.reduce(reducer); // sum all values in array
};

const horizontalTest = sumOfSteps(testData, forward);
const depthTest = sumOfSteps(testData, down) - sumOfSteps(testData, up);

const horizontal = sumOfSteps(input, forward);
const depth = sumOfSteps(input, down) - sumOfSteps(input, up);

const testResult = horizontalTest * depthTest;
const result = horizontal * depth;

console.log(`Task 1`);
console.log(`Test result: ${testResult}`, `Result: ${result}`);
