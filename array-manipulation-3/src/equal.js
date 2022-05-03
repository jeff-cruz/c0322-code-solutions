/* exported equal */
function equal(first, second) {
  for (var i = 0; i < second.length; i++) {
    if (second[i] !== first[i]) {
      return false;
    }
  }
  return true;
}

// iterate through the second index
// if every value of every index in the second array
//    does not strictly equal every value of every index in the first array
// return false
// otherwise, return true
