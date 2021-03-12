/*
Variables declared inside a function is inside the local scope. 
They can only be accessed from within that function, that means they can’t be accessed from the outside code. 
For example:
*/

function greet() {
  var greeting = "Hello World!";
  console.log(greeting);
}
// Prints 'Hello World!'
greet();
// Uncaught ReferenceError: greeting is not defined
console.log(greeting);
