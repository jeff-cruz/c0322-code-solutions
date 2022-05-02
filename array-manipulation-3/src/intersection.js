/* exported intersection */
function intersection(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}

// create empty array and assign it to new variable newArray
// loop through first array
// if second array includes the values in indexes of first array, push value to newArray
// return newArray
