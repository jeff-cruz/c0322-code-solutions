/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word === word.toUpperCase()) {
      return true;
    }
  }
  return false;
}

// 1. access word
// 2. if whole word is uppercased
// 3. return true
// 3. else return false
