// FreeCodeCamp challenge do not want you to go easy way with
// new built-in method .endsWith() and I support them all the way
// but when you solve this task go to MDN site and read about this
// 'forbiden' method


function confirmEnding(str, target_str) {

	var targetLength = target_str.length;

	if (str.substr(-targetLength) === target_str) {

		return true;

	} else {

		return false;
	}

}

confirmEnding("Bastian", "n");

confirmEnding("Connor", "n");

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");

confirmEnding("He has to give me a new name", "name");