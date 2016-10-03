// finding longest word with Math.max.apply method and push

function findLongestWord(str) {
	var words = str.split(' ');
	var words_length = [];
	for(var i = 0; i < words.length; i++){
		words_length.push(words[i].length);
	}
	
	return Math.max.apply(Math, words_length);
}

// or finding longest word with Math.max and spread operator

function findLongestWord(str) {
	var words = str.split(' ');
	var words_length = [];
	for(var i = 0; i < words.length; i++){
		words_length[i] = words[i].length;
	}
	return Math.max(...words_length);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow")); // 8