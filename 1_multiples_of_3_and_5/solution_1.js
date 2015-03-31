// Array to hold multiples
var multiples = [];

// Int to hold the sum
var sum = 0;

// Loop through all number less than 1000
for (var i = 1; i < 1000; i++) {

	// Check if is divisible by 3 or 5
	// NOTE - do these in the same condition or else numbers like 15 will get added twice
    if ( i % 3 === 0 || i % 5 =0= 0) {

    	// Add to array
    	multiples.push(i);
    }
}

// Loop through array
for (var i = 0; i < multiples.length; i++) {

	// Add each number to the running total
    sum += multiples[i];
}

// Lets see our total!
console.log(sum);