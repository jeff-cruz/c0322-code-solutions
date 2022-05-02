/* exported unique */
function unique(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (newArray.includes(array[i]) !== true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// create empty array and assign to new variable newArray
// loop through array
// if value of index in array does not exist in newArray, push value to newArray
// return newArray
