// Solution with new spread operator

function largestOfFour(arr) {
	// define variable as array to store max values of each array
	// and get length of main array
	var largestArrayValue = [];
	var arrLength = arr.length;
	// use for loop to iterate over each element of main array
	// witch is array it self and push max value to variable
	for (var i = 0; i < arrLength; i++) {
		largestArrayValue.push(Math.max(...arr[i]));
	}
	// at end return result array
	return largestArrayValue;
}


// Solution with combination of Math.max and apply function

function largestOfFour(arr) {

	var largestArrayValue = [];
	var arrLength = arr.length;

	for (var i = 0; i < arrLength; i++) {
		// only next line is changed
		largestArrayValue.push(Math.max.apply(null, arr[i]));
	}
  // return result array
	return largestArrayValue;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
