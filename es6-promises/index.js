const takeAChance = require('./take-a-chance');
const promise = takeAChance('Jeffrey');

promise.then(value => {
  console.log(value);
});

promise.catch(error => {
  console.error(error.message);
});
