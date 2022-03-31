var $letters = document.querySelectorAll('span');

for (var i = 0; i < $letters.length; i++) {
  $letters[i].addEventListener('keydown', logKey);
}

document.addEventListener('keydown', logKey);
var string = 'grumpy wizards make toxic brew';

function logKey(event) {
  for (var i = 0; i <= string.length; i++) {
    $letters[i].className = 'underline';
    if (event.key === string[i]) {
      $letters[i].className = 'green';
    } else {
      $letters[i].className = 'red';
    }
  }
}

// once keydown event takes place, begin the function
// access an index of the string
// if the event.key matches the character at the the string index, highlight green
// if the event.key does not match the character at the string index, hightlight red
// and re-iterate through the same index
