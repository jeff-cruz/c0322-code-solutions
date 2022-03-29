/* exported ransomCase */
function ransomCase(string) {
  for (var i = 1; i < string.length; i++) {
    var lowercase = string.toLowerCase();
    var newString = '';
    if (lowercase[i % 2 !== 0]) {
      newString += lowercase;
    }
    newString += lowercase.charAt(i).toUpperCase();
  }
  return newString;
}

// create new variable assigned to an empty string
// lowercase string, result of that assign to new variable lowercase
//
