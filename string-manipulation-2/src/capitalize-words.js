/* exported capitalizeWords */
function capitalizeWords(string) {
  var phrase = '';
  var space = ' ';
  var i = 0;
  for (var words in string) {
    words = string.split(' ');
    if (i === words.length - 1) {
      var firstLetter = words[i].slice(0, 1).toUpperCase();
      var otherLetters = words[i].slice(1, string.length).toLowerCase();
      var wholeWord = firstLetter + otherLetters;
      phrase += wholeWord;
      i++;
    } else if (i < words.length) {
      firstLetter = words[i].slice(0, 1).toUpperCase();
      otherLetters = words[i].slice(1, string.length).toLowerCase();
      wholeWord = firstLetter + otherLetters;
      phrase += wholeWord + space;
      i++;
    }
  }
  return phrase;
}
