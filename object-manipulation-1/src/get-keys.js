/* exported getKeys */
function getKeys(object) {
  var values = [];
  for (var key in object) {
    values.push(key);
  }
  return values;
}

// create new array
// access each key in the object
// push each key in the object into new array
// return values array
