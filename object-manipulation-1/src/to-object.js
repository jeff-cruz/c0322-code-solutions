/* exported toObject */
function toObject(keyValuePair) {
  var object = {};
  var property = keyValuePair[0];
  var value = keyValuePair[1];

  object[property] = value;
  return object;
}

// take in an array with two elements i.e. ['string', value]
// create an object that takes in property and values
// assign first index of keyValuePair to a new var property
// assign second index keyValuePair to a new var value
// add property value to object
// return object
