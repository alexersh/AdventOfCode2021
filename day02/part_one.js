const { input, testInput } = require('./input');

const sumOfSteps = (array, stepName) => {
	return array
		.map((data) => {
			const step = data.split(' ');
			if (step[0] === stepName) return +step[1];
		})
		.filter((n) => n) // clear undefined from array
		.reduce((a, b) => a + b); // sum all values in array
};

const horizontalTest = sumOfSteps(testInput, 'forward');
const depthTest = sumOfSteps(testInput, 'down') - sumOfSteps(testInput, 'up');

const horizontal = sumOfSteps(input, 'forward');
const depth = sumOfSteps(input, 'down') - sumOfSteps(input, 'up');

const testResult = horizontalTest * depthTest;
const result = horizontal * depth;

console.log('test: ', testResult);
console.log('part_one: ', result);
