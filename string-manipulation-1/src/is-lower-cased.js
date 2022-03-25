/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word === word.toLowerCase()) {
      return true;
    }
  }
  return false;
}

// 1. access word
// 2. if whole word is lowercased
// 3. return true
// 3. else return false
