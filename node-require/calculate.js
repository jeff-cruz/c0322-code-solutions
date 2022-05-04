const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus') {
  const sum = add(process.argv[2], process.argv[4]);
  console.log('result:', sum);
} else if (process.argv[3] === 'minus') {
  const difference = subtract(process.argv[2], process.argv[4]);
  console.log('result:', difference);
} else if (process.argv[3] === 'times') {
  const product = multiply(process.argv[2], process.argv[4]);
  console.log('result:', product);
} else if (process.argv[3] === 'over') {
  const quotient = divide(process.argv[2], process.argv[4]);
  console.log('result:', quotient);
}
