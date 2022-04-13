var $h1 = document.querySelector('.countdown-display');
setInterval(decrement, 1000);

function decrement() {
  if ($h1.textContent > 1) {
    $h1.textContent--;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
}
