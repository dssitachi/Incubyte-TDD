# String Calculator Kata

## Problem Description
The String Calculator Kata is a coding exercise that systematically builds a function to parse and sum numbers from a string input.

Create a simple `add` function with the following requirements:
1. The method can take 0, 1, or 2 numbers, and will return their sum
2. An empty string returns zero
3. A single number returns the value
4. Two numbers, comma delimited, returns the sum
5. Two numbers, newline delimited, returns the sum
6. Support different delimiters
7. Throw an exception for negative numbers

## TDD Approach

We solved this problem using strict Test-Driven Development:
1. Write a failing test
2. Write the minimal code to make the test pass
3. Refactor if necessary
4. Repeat

### Development Steps
- Step 1: Handle empty string
- Step 2: Handle single number
- Step 3: Handle two comma-separated numbers
- Step 4: Handle multiple numbers
- Step 5: Support newline delimiter
- Step 6: Support custom delimiters
- Step 7: Handle negative numbers

## Project Setup

### Prerequisites
- Node.js
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/dssitachi/Incubyte-TDD.git 

# Install dependencies
npm install
```

### Running Tests
```bash
# Run tests
npm test

# Run tests with coverage
npm run coverage
```