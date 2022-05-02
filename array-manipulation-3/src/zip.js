/* exported zip */
function zip(first, second) {
  var newArray = [];
  var length;

  if (first.length <= second.length) {
    length = first.length;
  } else {
    length = second.length;
  }

  for (var i = 0; i < length; i++) {
    var subArray = [];
    subArray.push(first[i]);
    subArray.push(second[i]);
    newArray.push(subArray);
  }
  return newArray;
}

// create empty array and assign it to new variable newArray
// create new variable length, assign to nothing, will assign later
// if first array length is longer than second array length, assign value to variable length
// if second array length is longer than first array length, assign value to variable length
// loop through value of length
// create empty array and assign to new variable subArray
// push value of index of first array into subArray
// push value of index of second array into subArray
// push subArray into newArray
// return newArray
