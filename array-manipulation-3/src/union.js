/* exported union */
function union(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    if (newArray.includes(first[i]) !== true) {
      newArray.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (newArray.includes(second[j]) !== true) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}

// create empty array and assign to variable newArray
// loop through first array
// if newArray does not include values in indexes of first array, push value to newArray
// loop through second array
// if newArray does not include values in indexes of second array, push value to newArray
// return newArray
