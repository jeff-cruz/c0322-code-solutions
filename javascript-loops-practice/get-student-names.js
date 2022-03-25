/* exported getStudentNames */
function getStudentNames(students) {
  var array = [];
  for (var i = 0; i < students.length; i++) {
    array.push(students[i].name);
  }
  return array;
}

/*
1. create new array
2. access index of student array
3. access name property of each index of the students array
4. push name property of each index of the students array into new array
5. return new array
*/
