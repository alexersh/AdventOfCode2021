const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString().split('\r\n').map(Number);
const testInput = fs.readFileSync(path.join(__dirname, 'testInput.txt'), 'utf-8').toString().split('\r\n').map(Number);

module.exports = {
	input,
	testInput,
};
