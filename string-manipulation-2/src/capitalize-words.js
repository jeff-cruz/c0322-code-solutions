/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  var output = [];
  for (var word of words) {
    var firstLetter = word.substring(0, 1).toUpperCase();
    var otherLetters = word.substring(1).toLowerCase();
    var wholeWord = firstLetter + otherLetters;
    output.push(wholeWord);
  }
  return output.join(' ');
}

// create new variable words assigned to string splitting each word by itself into an array
// create a new variable output as an empty array
// access each string in the array of strings
// create a new variable firstLetter and assign it to the first index of the string being capitalized
// create a new variable otherLetters and assign it to the rest of the words being lowercased
// create a new variable wholeWord concatenating firstLetter and otherLetters
// push wholeWord into the output array
// return the output array back into a string with spaces between the words
