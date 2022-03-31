var $tasklist = document.querySelector('.task-list');
$tasklist.addEventListener('click', mouseClick);

function mouseClick(event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var closestItem = event.target.closest('.task-list-item');
    console.log('closestItem:', closestItem);
    closestItem.remove('.task-list-item');
  }
}
