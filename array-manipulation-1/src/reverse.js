/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// create new array
// access the value of the index of the array
// start with the last index of the array
// push value into new array
// return new array
