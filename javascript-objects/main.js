var student = {
  firstName: 'Jeffrey',
  lastName: 'Cruz',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Medical Admin';

console.log('value of student.livesInIrvine: ' + student.livesInIrvine);
console.log('value of student.previousOccupation: ' + student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Toyota',
  model: 'RAV4',
  year: 2022
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ' + vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Lucky',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
