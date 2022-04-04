/* exported lastChars */
function lastChars(length, string) {
  for (var i = 0; i < string.length; i++) {
    var letters = string.substring(string.length - length, string.length);
  }
  return letters;

}

// iterate through string with for of loop
// assign new variable letters to string's substring starting from string.length - length index
// with the second argument of string.length
// return letters
