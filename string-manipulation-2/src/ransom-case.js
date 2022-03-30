/* exported ransomCase */
function ransomCase(string) {
  var input = string.toLowerCase();
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      output += input[i].toUpperCase();
    } else {
      output += input[i];
    }
  }
  return output;
}

// create new variable input assigned to the string being lowercased
// create new variable output assigned to an empty string
// access every index of the string
// if remainder of i does not equal zero, capitalize the letter and add it to the output
// if remainder of i equals zero, add letter to the output
// return output
