/* exported getFront */

function getFront(queue) {
  if (typeof queue.peek() !== 'undefined') {
    return queue.peek();
  }
}
