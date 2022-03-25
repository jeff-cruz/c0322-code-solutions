/* exported isVowel */
function isVowel(character) {
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowel.length; i++) {
    if (character === vowel[i] || character === vowel[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}

// assign an array of vowels to a variable vowels
// if character is a vowel or uppercase vowel
// return true
// otherwise return false
