/* exported filterOutStrings */
function filterOutStrings(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      array.push(values[i]);
    }
  }
  return array;
}

/*
1. create an empty array
2. go through every index of values
3. push value in array if not a string
4. return array */
