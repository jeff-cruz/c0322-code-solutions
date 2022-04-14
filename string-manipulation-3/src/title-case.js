/* exported titleCase */
function titleCase(string) {
  var words = string.toLowerCase().split(' ');
  var newTitle = '';
  var fullWord = '';
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'javascript', 'api'];

  for (var i = 0; i < words.length; i++) {
      console.log(minorWord);
      // var firstIndexCapital = words[i][0].toUpperCase();
      // var restOfWord = words[i].substring(1);

      // if (i !== words.length - 1) {
      //   fullWord = firstIndexCapital + restOfWord + ' ';
      //   newTitle += fullWord;
      // } else {
      //   fullWord = firstIndexCapital + restOfWord;
      //   newTitle += fullWord;
      // }
      // }
    }
  }
  // console.log(newTitle);
  // return newTitle;
}

// Capitalize the first word of the title and of any subtitle.
// Capitalize all “major” words(nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of hyphenated major words(e.g., Self - Report not Self - report).
// Capitalize all words of four letters or more.
// JavaScript is always cased JavaScript.
// API is a "known" acronym.
