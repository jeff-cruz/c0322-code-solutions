/* exported invert */
function invert(source) {
  var objectEntries = Object.entries(source);
  for (var i = 0; i < objectEntries.length; i++) {
    objectEntries[i].reverse();
  }
  return Object.fromEntries(objectEntries);
}

// create new variable objectEntries assigned to all key/value pairings in source
// iterate through objectEntries and swap key/value pairings
// create new object from objectEntries using Object.fromEntries
// return result of that method
