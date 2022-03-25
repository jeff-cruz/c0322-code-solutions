/* exported capitalize */
function capitalize(word) {
  var firstLetter = word[0].toUpperCase();
  var incompleteWord = word.slice(1);
  var lowercasedWord = incompleteWord.toLowerCase();
  var newWord = firstLetter + lowercasedWord;
  return newWord;
}

// 1. access first index of word and capitalize it
// 2. assign result of expression to new var firstLetter
// 3. access rest of word without first character
// 4. assign result of expression to new var incompleteWord
// 5. lowercase incompleteWord
// 6. assign result of expression to new variable lowercasedWord
// 7. concatenate firstLetter and lowercasedWord
// 8. assign result of that expression to new var newWord
// 9. return newWord
