function chunkArrayInGroups(arr, size) {

	var resultChunk = [];
	var arrayLength = arr.length;

	for (var i = 0; i < arrayLength; i += size) {
		resultChunk.push(arr.slice(0, size));
		arr = arr.slice(size);
	}
	return resultChunk;
}