var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);
console.log('Math.max result:', maximumValue);
var heroes = ['Spiderman', 'Groot', 'Black Panther', 'Ditto'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Curious Incident of the Dog in the Night-Time',
    author: 'Mark Haddon'
  },
  {
    title: '1984',
    author: 'George Orwell'
  },
  {
    title: 'Happy Potter: Chamber of Secrets',
    author: 'J.K. Rowling'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library:', library);

var fullName = 'Jeffrey Cruz';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
