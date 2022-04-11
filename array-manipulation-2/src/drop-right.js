/* exported dropRight */
function dropRight(array, count) {
  var newArray = array.slice(array[-1], array.length - count);
  return newArray;
}

// assign the result of the following expression to a new variable newArray
// slice from the first index of array to the result of the length of array minus count
// return array
