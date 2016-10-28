function rot13(str) { // LBH QVQ VG!
    // input characters
    var input_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    // output characters
    var output_alphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    //temp variable to store indexses from input str
    // depending on user input string
    var tmp = [];
    //var to get characters from output str with values
    //of tmp as index
    var result_rot13 = [];
    //user string length for use in for loop
    var strLen = str.length;
    //labeled for loop
    loop1:
        for (var i = 0; i < strLen; i++) {
            //if not alpha-numerical char add it unchanged and continue loop
            if (input_alphabet.indexOf(str[i]) === -1) {
                result_rot13.push(str[i]);
                tmp.push(str[i]);
                continue loop1;
            } else {
                //push coresponding index
                tmp.push(input_alphabet.indexOf(str[i]));

            }
            //push coresponding character[index]
            result_rot13.push(output_alphabet[tmp[i]]);
        }
        //result joined to string and returned
    return result_rot13.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC!"));
