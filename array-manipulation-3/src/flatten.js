/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray([array[i]])) {
      for (var j = 0; j < array[i].length; j++) {
        if (Array.isArray([array[i][j]])) { newArray.push(array[i][j]); }
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// create new variable newArray assigned to an empty array
// iterate through array
// if an index of the array is an array
// iterate through the array of that index
// push the values of that array index
