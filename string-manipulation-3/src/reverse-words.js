/* exported reverseWords */
function reverseWords(string) {
  var newWord = '';
  var newPhrase = '';
  var splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    if (i === 0) {
      newWord = splitString[i];
    } else if (i > 0 && i <= splitString.length - 1) {
      newWord = splitString[i] + ' ';
    }
    var letters = newWord.split('');
    for (var j = letters.length - 1; j >= 0; j--) {
      newPhrase += letters[j];
    }
  }
  return newPhrase;
}

// create a new variable newWord assigned to an empty string
// create a variable splitString assigned to the result of the split method of the string at every space
// iterate through splitString
// at the first index, add the word to the newWord string
// every index after, add the word plus a space
// assign new variable letters to every letter of newWord split
// iterate through letters from end of string to beginning
// add each letter from last index to first
//  assign result to new variable newPhrase
// return newPhrase
