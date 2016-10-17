function truncateString(str, num) {
	// Clear out that junk in your trunk
	var ending = "...";
	if (num <= ending.length) {
		return str.slice(0, num) + ending;
	} else if (num >= str.length) {
		return str.slice(0, num);
	} else {
		return str.slice(0, (num - ending.length)) + ending;
	}
}
