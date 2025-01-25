export function add(numbers) {
	if (numbers === "") {
		return 0;
	}
	// If no comma, return as single number
	if (!numbers.includes(",")) {
		return parseInt(numbers);
	}

	// Split and sum two numbers
	const [num1, num2] = numbers.split(",");
	return parseInt(num1) + parseInt(num2);
}
