export function add(numbers) {
	if (numbers === '') {
	  return 0;
	}
  
	// Check for custom delimiter
	let delimiter = ',';
	let processedNumbers = numbers;
  
	// If the string starts with '//', extract the custom delimiter
	if (numbers.startsWith('//')) {
	  // Find the end of the delimiter definition (newline)
	  const delimiterEnd = numbers.indexOf('\n');
	  
	  // Extract the custom delimiter
	  delimiter = numbers.slice(2, delimiterEnd);
	  
	  // Remove the delimiter definition line
	  processedNumbers = numbers.slice(delimiterEnd + 1);
	}
  
	// Replace newlines with the primary delimiter
	processedNumbers = processedNumbers.replace(/\n/g, delimiter);
  
	// Split by delimiter and sum all numbers
	return processedNumbers
	  .split(delimiter)
	  .reduce((sum, num) => sum + parseInt(num), 0);
  }