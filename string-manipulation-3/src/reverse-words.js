/* exported reverseWords */
function reverseWords(string) {
  var newWord = '';
  var newPhrase = '';
  var splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    if (i === 0) {
      newWord = splitString[i];
    } else if (i > 0 && i < splitString.length - 1) {
      newWord = splitString[i] + ' ';
    } else if (i === splitString.length - 1) {
      newWord = splitString[i] + ' ';
    }
    var letters = newWord.split('');
    for (var j = letters.length - 1; j >= 0; j--) {
      newPhrase += letters[j];
    }
  }
  return newPhrase;
}

// split the string by sections of words
// for every word, split word by letter
// for every index, letters are split up
// for every index, letters are reversed
