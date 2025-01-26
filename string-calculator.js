export function add(numbers) {
	if (numbers === "") {
		return 0;
	}
	// If no comma, return as single number
	if (!numbers.includes(",")) {
		return parseInt(numbers);
	}

	// Split by comma and sum all numbers
	return numbers
    .split(',')
    .reduce((sum, num) => sum + parseInt(num), 0);
}
