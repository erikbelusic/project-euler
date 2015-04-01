// Array to store the fibonacci sequence.
// Start with the first 3 numbers since 3rd is calculated from first two
var fibonacciSequence = [1,2,3];

// Int to track the index we are on
var i = 2;

// Int to store the sum
var sum = 0;

// Loop until last number is larger than our limit
while (fibonacciSequence[i] < 4000000) {
	
	// Add the sum of our last two numbers together to create the next
	fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[(i - 1)]);
	
	// Increase the array index tracker
	i++;
}

// Remove the last entry from our sequence since it MUST
// be greater than 4000000 to exit the loop
fibonacciSequence.pop();

// Loop through all our fibonacci numbers
for (j = 0; j < fibonacciSequence.length; j++) {

	// Check if its divisible by 2
	if (fibonacciSequence[j] % 2 === 0) {
		
		// Add it to the running total
		sum += fibonacciSequence[j];
	}
}

// Lets see our total!
console.log(sum);