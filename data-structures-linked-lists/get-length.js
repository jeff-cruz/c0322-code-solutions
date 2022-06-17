/* exported getLength */

function getLength(list) {
  let count = 0;
  let currentList = list;
  while (currentList !== null) {
    count++;
    currentList = currentList.next;
  }
  return count;
}
