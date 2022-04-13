/* exported invert */
function invert(source) {
  var newObject = {};
  for (var property in source) {
    newObject[source[property]] = property;
  }
  return newObject;
}

// create new object and assign to newObject variable
// iterate through properties of source
// create newObject property names using bracket notation property of source of newObject
// assign to property
// return newObject
