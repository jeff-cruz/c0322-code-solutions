/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let first;
  let second;
  if (queue.peek() !== undefined) {
    first = queue.dequeue();
    if (queue.peek() === undefined) {
      return first;
    } else {
      if (queue.peek() < first) {
        second = queue.dequeue();
        queue.enqueue(first);
        return second;
      } else {
        second = queue.dequeue();
        queue.enqueue(second);
        return first;
      }
    }
  }
}
