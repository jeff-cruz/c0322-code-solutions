/* exported titleCase */
function titleCase(string) {
  var words = string.toLowerCase().split(' ');
  var newTitle = '';
  var fullWord = '';
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'javascript', 'api'];

  for (var i = 0; i < minorWords.length; i++) {
    if (!(minorWords.includes(words[i]))) {
      var letters = words[i].split('');
      var capitalLetter = letters[0].toUpperCase();
      var incompleteWord = words[i].slice(1);
      fullWord = capitalLetter + incompleteWord;

      if (words[i] !== string.length - 1) {
        newTitle += fullWord + ' ';
      }
    } else if (minorWords.includes(words[i])) {
      newTitle += words[i] + ' ';
    }
  }
  return newTitle;
}
// console.log(newTitle);
//   // return newTitle;
// }

// Capitalize the first word of the title and of any subtitle.
// Capitalize all “major” words(nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of hyphenated major words(e.g., Self - Report not Self - report).
// Capitalize all words of four letters or more.
// JavaScript is always cased JavaScript.
// API is a "known" acronym.
