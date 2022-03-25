/* exported countdown */
function countdown(number) {
  var array = [];
  while (number >= 0) {
    array.push(number);
    number--;
  }
  return array;
}

/*
1. create new array
2. push number into array and decrement each time
3. return array
*/
