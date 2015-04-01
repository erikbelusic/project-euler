// Array to store the fibonacci sequence.
// Start with the first 3 numbers since 3rd is calculated from first two
var fibonacciSequence = [1,2,3];

// Int to track the index we are on
var i = 2;

// Int to store the sum
var sum = 0;

// Loop until
while (fibonacciSequence[i] < 4000000) {
	fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[(i - 1)]);
	i++;
}

for (j = 0; j < fibonacciSequence.length; j++) {
	//if (fibonacciSequence[j] < 4000000) {
		if (fibonacciSequence[j] % 2 === 0) {
				sum += fibonacciSequence[j];
			}
	//}

}

console.log(sum);