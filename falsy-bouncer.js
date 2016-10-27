function bouncer(arr) {
    return arr.filter(function(element) {
        if (element !== false) {
            return element;
        };
    });
}

console.log(bouncer([7, "ate", "", false, 9]););
