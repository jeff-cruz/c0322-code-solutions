/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === property && source[property] !== undefined) {
        newObject[property] = source[property];
      }
    }
  }
  return newObject;
}

// create new newObject variable assigned to an empty object
// iterate through source object
// iterate through keys array
// if name in keys index is strictly equal to a property name
//    AND none of the values of a property of source does not strictly equal undefined
// create newObject property and assign value of property of source
// return newObject
