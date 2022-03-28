/* exported capitalizeWord */
function capitalizeWord(word) {
  var firstLetter = word[0].toUpperCase();
  var incompleteWord = word.slice(1);
  var lowercasedWord = incompleteWord.toLowerCase();
  var newWord = firstLetter + lowercasedWord;
  if (word !== 'javascript') {
    return newWord;
  }
  return 'Javascript';
}
