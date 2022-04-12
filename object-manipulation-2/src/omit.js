/* exported omit */
function omit(source, keys) {
  var newObject = {
    ...source
  };
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== key) {
        delete newObject[keys[i]];
      }
    }
  }
  return newObject;
}

// create newObject variable assigned to an object with the same properties as source
// iterate through each key in source
// iterate through each index of keys
// if the key is not listed in keys
// delete that key from newObject
// return newObject
