/* exported drop */
function drop(array, count) {
  var newArray = array.slice(count, array.length);
  return newArray;
}

// create new variable newArray
// assign newArray to slice method of array being called
// 2 arguments of the starting index of count
//    and the total length of the array
