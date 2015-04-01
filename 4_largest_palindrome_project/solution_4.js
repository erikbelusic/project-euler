// Int to track largest palindrome
var maxPalindromeProduct = 0;

// Loop through all 3 digit numbers starting at the highest (for first factor)
for (var i = 999; i >= 100; i--) {
	
	// Loop through all 3 digit numbers starting at the highest (for second factor)
	for (var j = 999; j >= 100; j--) {
		
		// Find the product
		var num = i*j;
		
		// Convert product to string
		var numString = num.toString();
		
		// Reverse the string
		var numStringReverse = numString.split('').reverse().join('');
		
		// Check if string is a palindrome
		if (numString == numStringReverse) {
			
			// Check if this palindrome is larger than last big palindrome
			if (num > maxPalindromeProduct) {
				maxPalindromeProduct = num;
			}
		}
	}
}

// Lets see our palindrome!
console.log(maxPalindromeProduct);