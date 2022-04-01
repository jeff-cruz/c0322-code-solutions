/* exported firstChars */
function firstChars(length, string) {
  if (string.length > 0) {
    for (var letters of string) {
      letters = string.substring(0, length);
    }
    return letters;
  }
  return '';
}

// if length of string is greater than 0
// iterate through the string
// assign variable letters to the letters being taken from string
// in the string, use substring to start from beginning of word and cut word at length index
// return letters
//    else return empty string
