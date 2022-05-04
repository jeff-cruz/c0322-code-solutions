const fs = require('fs');

function randomNumber() {
  var number = Math.random();
  var numberString = number.toString() + '\n';
  return numberString;
}

fs.writeFile('random.txt', randomNumber(), err => {
  if (err) throw err;
});
