/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var currentIndex = array[i];
    if (!(Array.isArray(currentIndex))) {
      newArray.push(currentIndex);
    }
  }
}

// create empty array assign to new variable
// loop through array
// create a new variable currentIndex assigned to array at i
// if array is not an array, push index to new array
