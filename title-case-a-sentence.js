// solution with substr

function titleCase(str) {
	var arr =str.split(" ");
	var arrLength = arr.length;
	for(var i = 0; i < arrLength; i++) {
		arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1).toLowerCase();
		str = arr.join(" ");
	}
  return str;
}

// solution with regular expression

function titleCase(str) {
var str_lower = str.toLowerCase();
return str_lower.replace(/(^|\s)(\w)/g, function(x) {
	return x.toUpperCase();
});
}


console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
