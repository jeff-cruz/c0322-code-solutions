/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let counter = 0;
  if (queue.peek() === undefined) {
    return undefined;
  }
  while (index !== counter) {
    const notIndex = queue.dequeue();
    const nextValue = queue.peek();
    if (nextValue === undefined) {
      return notIndex;
    } else {
      queue.enqueue(notIndex);
      counter++;
    }
  }
  return queue.dequeue();
}
