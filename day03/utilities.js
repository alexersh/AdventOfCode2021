const countFrequencyOfSymbol = (input, place, isMostFrequent = true) => {
	const count = input.reduce((sum, curr) => {
		return curr[place] === '1' ? (sum += 1) : sum;
	}, 0);

	if (count === input.length / 2) {
		return isMostFrequent ? '1' : '0';
	}

	return count > input.length / 2 ? (isMostFrequent ? '1' : '0') : isMostFrequent ? '0' : '1';
};

const convertBinaryToDecimal = (binary) => {
	return binary
		.split('')
		.reverse()
		.reduce((decimal, curr, index) => {
			return curr === '1' ? decimal + Math.pow(2, index) : decimal;
		}, 0);
};

module.exports = {
	countFrequencyOfSymbol,
	convertBinaryToDecimal,
};
