/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// create new array
// if index is not in first index of array
// push to new array
// else, do nothing if array is a boolean
// return array
