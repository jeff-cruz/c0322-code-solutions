const fs = require('fs');
const dataJSON = require('./data.json');
const number = process.argv[3];

module.exports.delete = () => {
  delete dataJSON.notes[number];
  const currentInput = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('data.json', currentInput, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
};
