/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

// iterate through indexes of array
// if value is strictly equal to value of the array index
// return true
// else return false
