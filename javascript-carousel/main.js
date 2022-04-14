setInterval(nextPokemon, 3000);
var pokemon = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

var $rightArrow = document.querySelector('#right-arrow');
var $leftArrow = document.querySelector('#left-arrow');
var $img = document.querySelector('#image');
var $dotContainer = document.querySelector('.dot-container');
var $button = document.querySelector('.button');
var $firstDot = document.querySelector('#firstDot');
var $secondDot = document.querySelector('#secondDot');
var $thirdDot = document.querySelector('#thirdDot');
var $fourthDot = document.querySelector('#fourthDot');
var $fifthDot = document.querySelector('#fifthDot');

$rightArrow.addEventListener('click', nextPokemon);
function nextPokemon(event) {
  for (var i = 0; i < pokemon.length; i++) {
    if ($img.src.includes(pokemon[i])) {
      $img.setAttribute('src', pokemon[i + 1]);
      break;
    } else if ($img.src.includes(pokemon[4])) {
      $img.setAttribute('src', pokemon[0]);
      break;
    }
  }
}

$leftArrow.addEventListener('click', previousPokemon);
function previousPokemon(event) {
  for (var i = pokemon.length; i >= 0; i--) {
    if ($img.src.includes(pokemon[0])) {
      $img.setAttribute('src', pokemon[4]);
      break;
    } else if ($img.src.includes(pokemon[i])) {
      $img.setAttribute('src', pokemon[i - 1]);
      break;
    }
  }
}

$dotContainer.addEventListener('click', dotClick);
function dotClick(event) {
  if (!event.target.tagName === 'I') {
    return false;
  } else {
    if (event.target.id === 'firstDot') {
      $img.setAttribute('src', pokemon[0]);
      $button.className = 'far fa-circle button';
      $firstDot.className = 'fas fa-circle button';
    } else if (event.target.id === 'secondDot') {
      $img.setAttribute('src', pokemon[1]);
      $button.className = 'far fa-circle button';
      $secondDot.className = 'fas fa-circle button';
    // } else if (event.target.id === 'thirdDot') {
    //   $img.setAttribute('src', pokemon[2]);
    //   $thirdDot.setAttribute('class', 'fas fa-circle button');
    //   $button.setAttribute('class', 'far fa-circle button');
    // } else if (event.target.id === 'fourthDot') {
    //   $img.setAttribute('src', pokemon[3]);
    //   $fourthDot.setAttribute('class', 'fas fa-circle button');
    //   $button.setAttribute('class', 'far fa-circle button');
    // } else if (event.target.id === 'fifthDot') {
    //   $img.setAttribute('src', pokemon[4]);
    //   $fifthDot.setAttribute('class', 'fas fa-circle button');
    //   $button.setAttribute('class', 'far fa-circle button');
    }
  }
}

// TUTOR QUESTIONS:
// Every time I click the dot button to view the corresponding image, the dots stay
// black even when I change the className to be the empty circle?

// Setting interval time and showing the next image works, but
// if I click to another image, it does not reset the 3 seconds
