/* exported take */
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (array.length === 0) {
      return array;
    } else if (count > 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// create an empty array and assign to new variable newArray
// iterate through index of array
// if array is empty, return the array
// if count is more than 0, push array[i] into new array
// return new array
