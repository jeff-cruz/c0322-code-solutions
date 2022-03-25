/* exported filterOutNulls */
function filterOutNulls(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      array.push(values[i]);
    }
  }
  return array;
}

/*
1. create new array
2. access each index of values array
3. if they do not equal null
4. push index of values array into new array
5. else do nothing
6. return array
*/
