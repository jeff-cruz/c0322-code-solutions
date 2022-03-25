/* exported getWords */
function getWords(string) {
  var array = [];
  var word = string.split(' ');
  for (var i = 0; i < word.length; i++) {
    if (string === '') {
      array.push();
    } else {
      array.push(word[i]);
    }
  }
  return array;
}

// 1. create new Array
// 2. split string and assign new value to new variable word
// 3. access each index of string
// 4. if string has no words, push ' ' into array
// 5. otherwise, push word into array
// 6. return array
