const readEntry = require('./read.js');
const createEntry = require('./create');
const deleteEntry = require('./delete');
const updateEntry = require('./update');

const command = process.argv[2];
if (command === 'read') {
  readEntry.read();
} else if (command === 'create') {
  createEntry.create();
} else if (command === 'delete') {
  deleteEntry.delete();
} else if (command === 'update') {
  updateEntry.update();
}
