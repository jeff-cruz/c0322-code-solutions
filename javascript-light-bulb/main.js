var $button = document.querySelector('.light-button');
var $background = document.querySelector('body');

$button.addEventListener('click', buttonClick);

function buttonClick(event) {
  if ($button.className === 'circle light-button off') {
    $button.className = 'circle light-button on';
    $background.className = 'on';
  } else {
    $button.className = 'circle light-button off';
    $background.className = 'off';
  }

}
