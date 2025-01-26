export function add(numbers) {
	if (numbers === "") {
		return 0;
	}
	// If no comma, return as single number
	if (!numbers.includes(",")) {
		return parseInt(numbers);
	}

	// Replace newlines with commas to normalize delimiters
	const normalizedNumbers = numbers.replace(/\n/g, ',');

	// Split by comma and sum all numbers
	return normalizedNumbers
	  .split(',')
	  .reduce((sum, num) => sum + parseInt(num), 0);

}
