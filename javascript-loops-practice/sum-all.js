/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

/*
1. create new variable for sum of each value of each index of numbers array
2. access each value of each index of numbers array
3. add each value of each index of numbers array to new variable sum
4. return sum
*/
