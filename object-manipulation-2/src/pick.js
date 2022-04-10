/* exported pick */
function pick(source, keys) {
  var newObject = {};
  var propertyNames = Object.keys(source);
  var propertyValues = Object.values(source);

  for (var i = 0; i < propertyNames.length; i++) {
    if (keys.indexOf(propertyNames[i]) !== -1) {
      newObject[propertyNames[i]] = propertyValues[i];
    }
  }
  return newObject;
}
