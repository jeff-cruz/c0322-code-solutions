/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowercase = word.toLowerCase();
  if (lowercase !== 'javascript') {
    var firstLetter = lowercase[0].toUpperCase();
    var lastPart = lowercase.slice(1);
    var uppercase = firstLetter + lastPart;
    return uppercase;
  }
  return 'JavaScript';
}

// create a variable lowerCase to lowercase the whole word
// if word does not equal javascript then capitalize first letter of word
// result of that expression assigned to new variable firstLetter
// slice rest of word after first letter and assign to new variable lastPart
// concatenate firstLetter with lastPart and assign result to new variable uppercase
// return uppercase
// if does equal javascript
// return JavaScipt
