/* exported pick */
function pick(source, keys) {
  var newObject = {};

  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (property === keys[i]) {
        newObject[source[property]] = source[property];
      }
    }
  }
  return newObject;
}
