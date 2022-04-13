var $h1 = document.querySelector('.countdown-display');
setInterval(decrement, 1000);

function decrement() {
  if ($h1.textContent === '4') {
    $h1.textContent = '3';
  } else if ($h1.textContent === '3') {
    $h1.textContent = '2';
  } else if ($h1.textContent === '2') {
    $h1.textContent = '1';
  } else if ($h1.textContent === '1') {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
}
