/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (property !== keys[i]) {
        newObject[property] = source[property];
      }
      delete newObject[keys[i]];
    }
  }
  return newObject;
}

// create newObject variable assigned to an empty object
// iterate through each property in source
// iterate through each index of keys
// create newObject properties and assign to value of property of source
// any keys that match property name, delete that key from newObject
// return newObject
