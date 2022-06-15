/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  if (typeof stack.peek() === 'undefined') {
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
