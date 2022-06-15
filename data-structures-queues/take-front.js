/* exported takeFront */

function takeFront(queue) {
  if (typeof queue.peek() !== 'undefined') {
    return queue.dequeue();
  }
}
