function mutation(arr) {
    // put lowercase arguments in variable
    let searchValue = arr[0].toLowerCase();
    // split searchValue to single lowercase character
    let toSearchFor = arr[1].toLowerCase().split('');
    // get length of character array to use in for loop
    let searchForLength = toSearchFor.length;
    // control variable
    let j = 0;
    loop1:
        // loop tru string for all characters of searchValue
        for (let i = 0; i < searchForLength; i++) {

            // if char is in string add +1 to j
            // else reset j and break for loop
            if (searchValue.indexOf(toSearchFor[i]) !== -1) {
                j++;
            } else {
                j = 0;
                break loop1;
            }
        }
        // return true or false depends on value of control variable
    return (j > 0) ? true : false;
}


// Solution with use of new ES6 str.includes('this.str');

function mutation(arr) {
    var searchValue = arr[0].toLowerCase();
    var toSearchFor = arr[1].toLowerCase().split('');
    var searchForLength = toSearchFor.length;

    var j = 0;
    loop1:
        for (var i = 0; i < searchForLength; i++) {

            if (searchValue.includes(toSearchFor[i])) {
                j++;
            } else {
                j = 0;
                break loop1;
            }
        }
    return (j > 0) ? true : false;
}


// Check solution with consol.log

console.log(mutation(["hello", "hey"])); //false
console.log(mutation(["hello", "Hello"])); //true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //true
console.log(mutation(["Mary", "Army"])); //true
console.log(mutation(["Mary", "Aarmy"])); //true
console.log(mutation(["Alien", "line"])); //true
console.log(mutation(["floor", "for"])); //true
console.log(mutation(["hello", "neo"])); //false
console.log(mutation(["voodoo", "no"])); //false
