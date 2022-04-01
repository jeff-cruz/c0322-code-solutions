/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (array[i] === newArray[i]) {
      return array;
    } else if (array[i] > array[count]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
