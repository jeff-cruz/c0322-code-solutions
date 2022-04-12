function ExampleConstructor() {

}
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var ExampleConstructorTwo = new ExampleConstructor();
console.log('ExampleConstructorTwo:', ExampleConstructorTwo);
console.log('ExampleConstructorTwo instanceof ExampleConstructor:', ExampleConstructorTwo instanceof ExampleConstructor);
