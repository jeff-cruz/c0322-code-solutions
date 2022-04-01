var $letters = document.querySelectorAll('span');
document.addEventListener('keydown', logKey);
var i = 0;

function logKey(event) {
  var letter = $letters[i].innerHTML;
  $letters[i].className = 'underline';

  if (event.key === letter) {
    $letters[i].className = 'green';
    $letters[i + 1].className = 'underline';
    i++;
  } else {
    $letters[i].className = 'red underline-red';
  }
}

// access array, get innerHTML of object at index of array
// if innerHTML value === event.key => turn letter green AND move underline to next index
// break to stop iteration and go next
//      else turn letter red AND stay in same index AND turn underline red
// for: of + counter variable (declared before for: of after function)
