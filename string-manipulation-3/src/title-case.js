/* exported titleCase */
function titleCase(string) {
  var words = string.toLowerCase().split(' ');
  var newTitle = '';
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  var counter = 0;
  for (var word of words) {
    if (word === 'api') {
      word = 'API';
      newTitle += word;
    } else if (word === 'javascript') {
      word = 'JavaScript';
      newTitle += word;
    } else if (word === 'javascript:') {
      word = 'JavaScript:';
      newTitle += word;
    } else
    // problem THE statement
    if (word === words[0]) {
      word = words[0].charAt(0).toUpperCase() + words[0].substring(1);
      newTitle += word;
    } else if (words[counter - 1].includes(':')) {
      word = word.replace(word[0], word[0].toUpperCase());
      newTitle += word;
    } else if ((word === 'the') || (word === 'and') || (word === 'or') || (word === 'nor') || (word === 'but') || (word === 'a') || (word === 'an') ||
    (word === 'as') || (word === 'at') || (word === 'by') || (word === 'for') || (word === 'in') || (word === 'of') ||
    (word === 'in') || (word === 'of') || (word === 'on') || (word === 'per') || (word === 'to')) {
      newTitle += word;
    } else {
      word = word.replace(word[0], word[0].toUpperCase());
      newTitle += word;
    }
    counter++;
    newTitle += ' ';
  }
  newTitle = newTitle.trim();
  console.log(newTitle);
  return newTitle;
}

// words[0].charAt(0).toUpperCase() + words[0].substring(1);
// if words[0] = 'J' then 'JavaScript:'
// set words[1] = 'The';
// if statements, javascript, api, javascript:
