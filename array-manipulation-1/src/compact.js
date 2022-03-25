/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// create new array
// access value of every index of the array
// if that value is a truthy
// push array value into new array
