var intervalID = setInterval(nextPokemon, 3000);
var pokemon = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $rightArrow = document.querySelector('#right-arrow');
var $leftArrow = document.querySelector('#left-arrow');
var $img = document.querySelector('#image');
var $dotContainer = document.querySelector('.dot-container');
var $buttonList = document.querySelectorAll('.button');

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
  if (event.target.tagName === 'I') {
    for (var i = 0; i < $buttonList.length; i++) {
      $buttonList[i].className = 'far fa-circle button';
      if (i === parseInt(event.target.getAttribute('id'))) {
        $buttonList[i].className = 'fas fa-circle button';
        $img.setAttribute('src', pokemon[i]);
      }
    }
  }
}

// current image # var current = 0
// create for loop, iterate over nodelist, reset class name to make it empty, if current === i, class name to fill in circle

// TUTOR QUESTIONS:
// Setting interval time and showing the next image works, but
// if I click to another image, it does not reset the 3 seconds?
// something about clearInterval(intervalID)
