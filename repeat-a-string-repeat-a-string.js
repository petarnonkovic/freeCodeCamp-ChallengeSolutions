function repeatStringNumTimes(str, num) {
	// if number is negative then string is empty
	if (num < 0) {
		str = "";
	} else {
		// else string is repeated num times
		str = str.repeat(num);
	}
	return str;
}

repeatStringNumTimes("abc", 3);

repeatStringNumTimes("*", 8);

repeatStringNumTimes("abc", -2);
