var intervalID = setInterval(nextPokemon, 3000);
var pokemon = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var counter = 0;
var $rightArrow = document.querySelector('#right-arrow');
var $leftArrow = document.querySelector('#left-arrow');
var $img = document.querySelector('#image');
var $dotContainer = document.querySelector('.dot-container');
var $buttonList = document.querySelectorAll('.button');

$rightArrow.addEventListener('click', nextPokemon);
function nextPokemon(event) {
  for (var i = 0; i < pokemon.length; i++) {
    $buttonList[counter].className = 'far fa-circle button';
    if ($img.src.includes(pokemon[i])) {
      $img.setAttribute('src', pokemon[i + 1]);
      $buttonList[counter + 1].className = 'fas fa-circle button';
      counter++;
      break;
    } else if ($img.src.includes(pokemon[4])) {
      $img.setAttribute('src', pokemon[0]);
      counter = 0;
      $buttonList[counter].className = 'fas fa-circle button';
      break;
    }
  }
  clearInterval(intervalID);
  intervalID = setInterval(nextPokemon, 3000);
}

$leftArrow.addEventListener('click', previousPokemon);
function previousPokemon(event) {
  for (var i = pokemon.length; i >= 0; i--) {
    $buttonList[counter].className = 'far fa-circle button';
    if ($img.src.includes(pokemon[0])) {
      $img.setAttribute('src', pokemon[4]);
      $buttonList[4].className = 'fas fa-circle button';
      counter = 4;
      break;
    } else if ($img.src.includes(pokemon[i])) {
      $img.setAttribute('src', pokemon[i - 1]);
      $buttonList[counter - 1].className = 'fas fa-circle button';
      counter--;
      break;
    }
  }
  clearInterval(intervalID);
  intervalID = setInterval(nextPokemon, 3000);
}

$dotContainer.addEventListener('click', dotClick);
function dotClick(event) {
  if (event.target.tagName === 'I') {
    counter = parseInt(event.target.getAttribute('id'));
    for (var i = 0; i < $buttonList.length; i++) {
      $buttonList[i].className = 'far fa-circle button';
      if (i === parseInt(event.target.getAttribute('id'))) {
        $buttonList[i].className = 'fas fa-circle button';
        $img.setAttribute('src', pokemon[i]);
      }
    }
  }
  clearInterval(intervalID);
  intervalID = setInterval(nextPokemon, 3000);
}

// ASK CODY QUESTION:
// Why does function resetInterval() {
// clearInterval(intervalID);
// intervalID = setInterval(nextPokemon, 3000);}
// }
// not work compared to coding the exact same thing at the end of each function?
