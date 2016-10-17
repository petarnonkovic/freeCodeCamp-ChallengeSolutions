function chunkArrayInGroups(arr, size) {

	var resultChunk = [];
	var arrayLength = arr.length;

	for (var i = 0; i < arrayLength; i += size) {
		resultChunk.push(arr.slice(0, size));
		arr = arr.slice(size);
	}
	return resultChunk;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2);

		console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
