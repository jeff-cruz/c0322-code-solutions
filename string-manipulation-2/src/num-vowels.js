/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var lowercasedString = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    var letter = lowercasedString[i];
    if (vowels.includes(letter)) {
      counter++;
    }
  }
  return counter;
}

// create a new variable counter to 0
// create an array of vowels and assign to new variable vowels
// iterate through index of lowercased string to match lowercase vowels
// if the letter fron the string is a vowel
// increment the counter
// return counter at end of loop
