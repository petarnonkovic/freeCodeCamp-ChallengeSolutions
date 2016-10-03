
// Solution with recursive function

function factorial(num) {
	if (num < 0 || typeof num !== "number") {
		return -1;
	}
	else if (num === 0 || num === 1) {
		return 1;
	}
  else {
  	return num = num * factorialize(num - 1);
  }
}

// Solution with while loop

function factorialWhile(num) {
	var result = 1;
	if (num < 0 || typeof num !== "number") {return -1};
	if (num === 0 || num === 1) {return 1};
	
  while(num > 1) {
  	result *= num;
  	num--;
  }
  return result;
}

// Solution with reduce function

function factorialReduce(num) {
	var arr = [];
	for (var i = 1; i <= num; i++) {
		arr.push(i);
	}
	num = arr.reduce(function(prevVal, currVal) {
		return prevVal * currVal;
	}, 1);

	// arrow function
	num = arr.reduce((prevVal, currVal) => prevVal * currVal);

	return num;
}


// Solution with reduce function + new ecma6 arrow function expression

function factorialArrow(num) {
	var arr = [];
	for (var i = 1; i <= num; i++) {
		arr.push(i);
	}

	// arrow function expression
	num = arr.reduce((prevVal, currVal) => prevVal * currVal);

	return num;
}


console.log(factorialArrow(5));// logs = 120
console.log(factorialReduce(5));// logs = 120