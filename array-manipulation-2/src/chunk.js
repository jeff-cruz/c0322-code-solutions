/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var index = array.slice(i, i + size); // took too long for me to figure out without slice
    newArray.push(index);
  }
  return newArray;
}

// create an empty array and assign new variable new Array
// iterate through array
// slice array from starting point i until the array index i + size
// push index to newArray
// iterate for loop by size
// return newArray
