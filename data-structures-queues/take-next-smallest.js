/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else if (queue.peek() !== undefined) {
    let top = queue.dequeue();
    if (queue.peek() === undefined) {
      return top;
    }
    if (top <= queue.peek()) {
      return top;
    } else {
      while (top > queue.peek()) {
        queue.enqueue(top);
        top = queue.dequeue();
        if (top <= queue.peek()) {
          return top;
        }
      }
    }
  }
}
