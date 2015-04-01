// Array to store our prime numbers
var primes = [];

// Target number we need to get the prime factors of
var target = 600851475143;

// Int to hold our max factor at the end
var maxFactor = 0;

// Loop through all possible factors greater than 1 of the target number
for (var candidate = 2; target > 1; candidate++) {
	
	// Placeholder initializer. i = 0;
	// If the candidate is a factor of the target	// divide the target by the candidate
	// and assign the differnce to target
	for (i = 0; target % candidate === 0; target /= candidate) {
		
		// Add the factor to the primes arrays
		primes.push(candidate);
	}
}

// Loop through our primes
for (i = 0; i < primes.length; i++) {
	
	// If the prime is bigger than the last prime
	if (primes[i] > maxFactor) {
		
		// Set it as the largest
		maxFactor = primes[i];
	}
}

// Lets see our largest factor!
console.log(maxFactor);