/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const third = list.next.data;
  const fourth = list.next.next.data;
  const fifth = list.next.next.next.data;
  list.next = new LinkedList(value);
  list.next.next = new LinkedList(third);
  list.next.next.next = new LinkedList(fourth);
  list.next.next.next.next = new LinkedList(fifth);
}
