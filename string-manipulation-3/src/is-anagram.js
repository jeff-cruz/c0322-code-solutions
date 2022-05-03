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

// remove all spaces from firstString and assign to new variable stringOne
// remove all spaces from the secondString and assign to new variable stringTwo
// string stringOne is longer than stringTwo, return false
// loop through the stringOne and if stringTwo does not include any index of stringOne, return false
//    else, loop through stringTwo and if stringOne does not include any index of stringTwo, return false
//    else, organize stringOne and stringTwo by splitting, sorting in order and joining and assign both to new variables
// if the the first orgnanized string strictly equals the second organized string, return false
// otherwise, return true
