/*
Any variable that’s not inside any function or block (a pair of curly braces), is inside the global scope. 
The variables in global scope can be accessed from anywhere in the program. 
For example:
*/

var greeting = "Hello World!";
function greet() {
  console.log(greeting);
}
// Prints 'Hello World!'
greet();
