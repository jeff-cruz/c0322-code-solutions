var books = [
  {
    title: '1984',
    isbn: '2198394234',
    author: 'George Orwell'
  },
  {
    title: 'The Curious Incident of the Dog in the Night-Time',
    isbn: '9238489234',
    author: 'Mark Haddon'
  },
  {
    title: 'The Cat In The Hat',
    isbn: '12389123',
    author: 'Dr. Seuss'
  }
];

console.log('typeof books', typeof books);

var booksString = JSON.stringify(books);
console.log('typeof booksString', booksString);

var student = '[{"id": "1","name": "jimmy"}]';

console.log('typeof student', typeof student);

var studentObject = JSON.parse(student);
console.log('typeof studentObject', typeof studentObject);
