/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var stringOne = firstString.replaceAll(' ', '');
  var stringTwo = secondString.replaceAll(' ', '');

  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    for (var i = 0; i < stringOne.length; i++) {
      if (!(stringTwo.includes(stringOne[i]))) {
        return false;
      } else {
        for (var j = 0; j < stringTwo.length; j++) {
          if (!(stringOne.includes(stringTwo[j]))) {
            return false;
          } else {
            var organizedStringOne = stringOne.split('').sort().join('');
            var organizedStringTwo = stringTwo.split('').sort().join('');
            if (organizedStringOne !== organizedStringTwo) {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
}
