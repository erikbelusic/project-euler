var solution = 0;
var count = 1;
var num = 2520;


while(solution === 0){
	for (var i = 11; i <= 21; i++) {
		if (i > 20) {solution = num; break;}
		if (num % i === 0) {continue;}
		break;
	}	
	
	console.log(num);
	count++;
	num = 2520*count;
}
console.log(solution);
