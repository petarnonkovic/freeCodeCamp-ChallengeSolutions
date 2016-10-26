// Solution with slice() method
// arr.slice([begin[, end]]);

function slasher_slice(arr, howMany) {
    return arr.slice(howMany);

}

// Solution with splice() method
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);

function slasher_splice(arr, howMany) {
    return arr.splice(howMany);
}


console.log(slasher_slice([1, 2, "chicken", 3, "potatoes", "cheese", 4], 2));
console.log(slasher_splice([1, 2, "chicken", 3, "potatoes", "cheese", 4], 2));
