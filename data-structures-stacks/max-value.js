/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  if (stack.print() === 'Stack { <empty> }') {
    return max;
  } else {
    while (stack.peek() !== undefined) {
      const initial = stack.pop();
      if (initial > max) {
        max = initial;
      }
    }
    return max;
  }
}
