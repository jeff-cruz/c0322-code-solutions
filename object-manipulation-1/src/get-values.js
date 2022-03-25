/* exported getValues */
function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

// create new array values
// access each key in object
// push value of key properties of object
// return values array
