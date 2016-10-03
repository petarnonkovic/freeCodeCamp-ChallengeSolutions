function palindrome(str) {
	// First remove all non-alphanumerical characters
  var cleanString = str.replace(/[\W,_]/gi, '').toLowerCase();
  // then reverse string
  var reverseString = cleanString.split('').reverse().join('');
  // and at end compare strings
  // if they spelled same return true
  if (cleanString === reverseString) {
  	return true;
  }
  	// else return false
    return false;
}


console.log(palindrome("eye- _")); // true

console.log(palindrome("0_0 (: /-\ :) 0-0")); // true

console.log(palindrome("eyes- _ ")); // false

console.log(palindrome("five|\_/|four")); // false