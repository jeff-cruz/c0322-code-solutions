/* exported isVowel */
function isVowel(character) {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
    return true;
  }
  return false;
}

// 1. if character does not equal to any string of 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'
// 2. return true
// 3. else return false
