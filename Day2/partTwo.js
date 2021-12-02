import { input, testData } from './data.js';
import { up, down, forward } from './partOne.js';

// down increases your aim by X units.
// up decreases your aim by X units.
// forward now does two things:
//   It increases your horizontal position by X units.
//   It increases your depth by your aim multiplied by X.

const calculateResult = (array) => {
	let aim = 0;
	let horizontalPos = 0;
	let depth = 0;

	array.forEach((data) => {
		const step = data.split(' ');

		switch (step[0]) {
			case forward: {
				horizontalPos += +step[1];
				depth += aim * +step[1];
				break;
			}
			case up: {
				aim -= +step[1];
				break;
			}
			case down: {
				aim += +step[1];
				break;
			}
		}
	});

	return horizontalPos * depth;
};

const testResult = calculateResult(testData);
const result = calculateResult(input);

console.log(`Task 2`);
console.log(`Test result: ${testResult}`, `Result: ${result}`);
