/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

// 1. create new string for newWord
// 2. access index of word starting with the end of word string
// 3. concatenate each value of index of word to newWord
// 4. decrement each iteration
// 5. return newWord
