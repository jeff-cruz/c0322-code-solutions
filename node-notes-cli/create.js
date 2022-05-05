const fs = require('fs');
const dataJSON = require('./data.json');
const id = dataJSON.nextId;
const note = process.argv[3];

module.exports.create = () => {
  dataJSON.notes[id] = note;
  dataJSON.nextId++;

  const newInput = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('data.json', newInput, 'utf-8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
};
