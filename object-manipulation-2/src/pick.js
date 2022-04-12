/* exported pick */
function pick(source, keys) {
  var array = [];
  var values = Object.values(source);
  var sourceEntries = Object.entries(source);
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < sourceEntries.length; j++) {
      if (keys[i] === sourceEntries[j][0] && values[j] !== undefined) {
        array.push(sourceEntries[j]);
      }
    }
  }
  return Object.fromEntries(array);
}

// create new array variable assigned to an empty array
// create new values variable assigned to the values of the source object
// create new sourceEntries variable assigned to the key/value pairings of source
// iterate through keys array
// iterate through sourceEntries array
// if name in keys index is strictly equal to
//    a name in sourceEntries index at 0
//    AND none of the values of a source property does not strictly equal undefined
// push the key/value pairing in the sourceEntries index to the new array
// the result of the fromEntries method of the Object object being called with argument of array
// return the result of the method
