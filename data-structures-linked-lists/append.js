/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const currentValue = new LinkedList(value);
  value.next = null;
  let current = list;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = currentValue;
}
