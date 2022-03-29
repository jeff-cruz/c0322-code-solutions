var $button = document.querySelector('.light-button');
var $background = document.querySelector('body');

$button.addEventListener('click', buttonClick);

var isLightOn = false;

function buttonClick(event) {
  if (isLightOn === false) {
    $button.className = 'circle light-button on';
    $background.className = 'on';
    isLightOn = true;
  } else {
    $button.className = 'circle light-button off';
    $background.className = 'off';
    isLightOn = false;
  }
}

// create a new variable button for dom selector of class light-button
// creata a new variable background for dom selector of the body element
// add eventlistener to new variable button for any clicks
// when button is clicked:
// if button is off, turn button on
// else, turn it off
