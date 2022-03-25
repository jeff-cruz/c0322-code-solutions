/* exported oddOrEven */
function oddOrEven(numbers) {
  var array = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      array.push('even');
    } else {
      array.push('odd');
    }
  }
  return array;
}

/*
1. create a new array
2. access each index of the numbers array
3. if remainder of the value in each index equals 0
4. return even and push it into index of new array
5. else return odd and put it into index of new array
*/
