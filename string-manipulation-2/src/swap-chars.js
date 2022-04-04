/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var i = string.charAt(firstIndex);
  var j = string.charAt(secondIndex);
  var firstPart = string.slice(0, firstIndex);
  var secondPart = string.slice(firstIndex + 1, secondIndex);
  var thirdPart = string.slice(secondIndex + 1, string.length);
  return (firstPart + j + secondPart + i + thirdPart);

}

// create a new variable i assigned to character at firstIndex of string
// create a new variable j assigned to character at secondIndex of string
// create a new variable firstPart assigned to the string starting at index 0, and firstIndex
// create a new variable secondPart assigned to the string starting at firstIndex + 1, and secondIndex
// create a new variable thirdPart assigned to the string starting at secondIndex + 1 and string.length
// return result of expression:
//      firstPart + j + secondPart + i + thirdPart
