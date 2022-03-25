/* exported getWords */
function getWords(string) {
  var word = string.split(' ');
  if (string !== '') {
    return word;
  }
  return [];
}

// 1. create new Array
// 2. split string and assign new value to new variable word
// 3. if string is not an empty string return the word
// 4. if string is empty, return an empty array
