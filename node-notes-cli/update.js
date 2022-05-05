const fs = require('fs');
const dataJSON = require('./data.json');
const note = process.argv[3];
const edit = process.argv[4];

module.exports.update = () => {
  for (const number in dataJSON.notes) {
    if (note.toString() === number) {
      dataJSON.notes[number] = edit;
      const noteEdit = JSON.stringify(dataJSON, null, 2);
      fs.writeFile('data.json', noteEdit, 'utf8', err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
    }
  }
};
