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
