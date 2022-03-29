var $openButton = document.querySelector('.modal-open');
$openButton.addEventListener('click', clickOpen);

var $closeButton = document.querySelector('.modal-close');
$closeButton.addEventListener('click', clickClose);

var $overlay = document.querySelector('.overlay');

var noModal = true;
function clickOpen(event) {
  if (noModal !== true) {
    $overlay.className = 'overlay no-display';
  }
  $overlay.className = 'overlay display';
}

function clickClose(event) {
  if (noModal !== true) {
    $overlay.className = 'overlay display';
  }
  $overlay.className = 'overlay no-display';
}
