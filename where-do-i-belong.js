function getIndexToIns(arr, num) {
    // sort array ASC
    arr.sort(function(a, b) {
        return a - b;
    });
    //return index of first bigger or equal num
    var index = arr.findIndex(function(item) {
        return item >= num;
    });
    //if no bigger num,insert at end
    if (index == -1) {
        index = arr.length;
    }
    return index;
}


console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([10, 50, 30, 40, 20], 35));
console.log(getIndexToIns([2, 5, 10], 15));
