const fs = require('fs');
var input = process.argv[2] + '\n';

fs.writeFile('note.txt', input, err => {
  if (err) throw err;
});
