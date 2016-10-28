// This challenge was very challenging but somehow
// I solved, first destroyer function is mine and
// second I found on web its cleaner,shorter code,
// better. This I do for every solved challenge,
// check for web for solutions from other and if its better
// studie and adopt if not continue;


// this is mine solution with includes() which I preffer more
// then indexOf() in sitations like this where only have need for
// true || false, includes or not includes
function destroyer(arr) {
    var argLen = arguments.length;
    var mainArr = arguments[0];
    var restArg = [];
    for (var i = 1; i < argLen; i++) {
        restArg.push(arguments[i]);
    }
    return mainArr.filter(function(item) {
        return restArg.includes(item) === false;
    });

}

// this one I found on web and only reason for puting with
// mine code is that this is like I said better

function destroyer(arr) {

    var args = Array.from(arguments);
    //console.log(args);
    return args[0].filter(function(item) {
        // console.log([item, args.indexOf(item)]);
        return args.indexOf(item) === -1;
    });


    console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
