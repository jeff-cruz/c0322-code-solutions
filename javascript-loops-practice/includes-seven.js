/* exported includesSeven */
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}

/*
1. access every index of the array
2. if the the index has the value of 7
3. return true; */
