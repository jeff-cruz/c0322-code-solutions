/* exported takeRight */
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  } else {
    var newArray = array.slice(array.length - count);
    return newArray;
  }
}

// if the count is more than the total length of array, return array
//    else assign result of expression:
//    slice: total length of array minus count
// of array and create new variable newArray
// return newArray
