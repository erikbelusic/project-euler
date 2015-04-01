var fibonacciSequence = [1,2,3];
var i = 2;
var sum = 0;

while (fibonacciSequence[i] < 4000000) {
	fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[(i - 1)]);
	i++;
}

for (j = 0; j < fibonacciSequence.length; j++) {
	if (fibonacciSequence[j] % 2 === 0) {
		sum += fibonacciSequence[j];
	}
}

console.log(sum);