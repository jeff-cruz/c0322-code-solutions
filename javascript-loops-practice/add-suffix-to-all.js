/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var array = [];
  var newWord;
  for (var i = 0; i < words.length; i++) {
    newWord = words[i] + suffix;
    array.push(newWord);
  }
  return array;
}

/*
1. create a new array
2. access the strings of each index of words array
3. add suffix to strings of each index
4. result of the expression assigned to new variable newWord
5. push newWord into new array
6. return array
*/
