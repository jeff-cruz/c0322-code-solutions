const fs = require('fs');
const input = process.argv[2];

module.exports.read = () => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    const parsedData = JSON.parse(data);
    if (input === 'read') {
      for (const number in parsedData.notes) {
        console.log(`${number}: ${parsedData.notes[number]}`);
      }
    }
  });
};
