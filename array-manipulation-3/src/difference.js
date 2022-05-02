/* exported difference */
function difference(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) !== true) {
      newArray.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) !== true && newArray.includes(second[j]) !== true) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}

// create empty array and assign to new variable newArray
// loop through first array
// if second array does not include the values in the indexes of first array, push value to new array
// loop through second array
// if first array does not include the valuees in the indexes of second array
//    AND newArray does not include values in indexes of second array, push value into newArray
// return newArray
