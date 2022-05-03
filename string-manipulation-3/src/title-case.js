/* exported titleCase */
function titleCase(string) {
  string = string.toLowerCase();
  var newTitle = string.split(' ');
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'the'];

  // loop through string
  for (var i = 0; i < newTitle.length; i++) {

    // capitalize word after colon
    if (newTitle[i].indexOf(':') !== -1) {
      newTitle[i + 1] = newTitle[i + 1].charAt(0).toUpperCase() + newTitle[i + 1].slice(1);
    }

    // loop through minorWords array
    for (var f = 0; f < minorWords.length; f++) {
      if (newTitle[i] === (minorWords[f])) {
        i++;
      }
    }
    newTitle[i] = newTitle[i].charAt(0).toUpperCase() + newTitle[i].slice(1);

    // capitalize api and javascript
    if (newTitle[i] === 'Api') {
      newTitle[i] = 'API';
    } else if (newTitle[i] === 'Javascript') {
      newTitle[i] = 'JavaScript';
    } else if (newTitle[i] === 'Javascript:') {
      newTitle[i] = 'JavaScript:';

    // capitalize first word of dash and word after dash
    } else if (newTitle[i].indexOf('-') !== -1) {
      var dashedWord = newTitle[i].split('-');
      var dashedFirstWord = dashedWord[0].charAt(0).toUpperCase() + dashedWord[0].slice(1);
      var dashedSecondWord = dashedWord[1].charAt(0).toUpperCase() + dashedWord[1].slice(1);
      var dash = '-';
      var hyphenedWord = dashedFirstWord + dash + dashedSecondWord;
      newTitle[i] = hyphenedWord;
    }
  }

  // capitalize first word
  newTitle[0] = newTitle[0].charAt(0).toUpperCase() + newTitle[0].slice(1);
  var finalTitle = newTitle.join(' ');
  return finalTitle;
}

// make all characters of the string lowercased
// split the string and assign to new variable newTitle
// put all minor words into array and assign to new variable minorWords
// loop through newTitle
// if a string has a colon in it, capitalize the word after the colon
// loop through minorWords array
// check if any minor word is in newTitle
//    increment newTitle by 1
// if newTitle has api, javascript and javascript:, capitalize them appropriately
// if newTitle has a dash in it
//    split the index that has the dash in it by the dash and assign to new variable dashedWord
//    capitalize the word before the dash and assign to new variable dashedFirstWord
//    capitalize the word after the dash and assign to new variable dashedSecondWord
//    assign the dash to a new variable dash
//    concatenate dashedFirstWord, dash and dashedSecondWord and assign to new variable hyphenedWord
//    assign hyphened word to the index it was originally in of newTitle
// capitalize the first index of newTitle
// concatenate the indexes of newTitle and assign to new variable finalTitle
// return finalTitle
