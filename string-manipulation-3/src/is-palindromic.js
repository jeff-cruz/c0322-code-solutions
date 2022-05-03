/* exported isPalindromic */
function isPalindromic(string) {
  var backwardsString = '';
  var newString = string.replaceAll(' ', '');

  for (var i = newString.length - 1; i >= 0; i--) {
    backwardsString += newString[i];
    if (backwardsString === newString) {
      return true;
    }
  }
  return false;
}

// create a new variable backwardsString assigned to an empty string
// create a new variable newString and assign it to received string argument and remove all spaces
// loop through newString and decrement
//  add each index of newString to backwardsString
// once loop ends, if backwardsString strictly equals newString, return true
// else, return false
