const read = require('./read.js');
const create = require('./create');
const deleteEntry = require('./delete');
const update = require('./update');

const command = process.argv[2];
if (command === 'read') {
  read.read();
} else if (command === 'create') {
  create.create();
} else if (command === 'delete') {
  deleteEntry.delete();
} else if (command === 'update') {
  update.update();
}
