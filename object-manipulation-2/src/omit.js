/* exported omit */
function omit(source, keys) {
  var newObject = {
    ...source
  };
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== key) {
        delete newObject[keys[i]];
        // newObject[key] = Object.keys(source)[i];
      }
    }
  }
  return newObject;
}
