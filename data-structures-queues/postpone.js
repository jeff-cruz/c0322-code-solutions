/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const front = queue.dequeue();
    return queue.enqueue(front);
  }
}
