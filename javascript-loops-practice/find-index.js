/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}

/*
1. access each index of the array
2. if value is found in index of array
3. return 1
4. else return -1
*/
