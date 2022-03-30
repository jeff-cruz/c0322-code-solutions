var $openButton = document.querySelector('.modal-open');
$openButton.addEventListener('click', clickOpen);

var $closeButton = document.querySelector('.modal-close');
$closeButton.addEventListener('click', clickClose);

var $overlay = document.querySelector('.overlay');

function clickOpen(event) {
  $overlay.className = 'overlay display';
}

function clickClose(event) {
  $overlay.className = 'overlay no-display';
}
