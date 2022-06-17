/* exported removeTail */

function removeTail(list) {
  if (list.next !== null) {
    let previous = list;
    let current = list.next;
    let next = list.next.next;
    while (next !== null) {
      previous = current;
      current = next;
      next = next.next;
    }
    previous.next = null;
  }
}
