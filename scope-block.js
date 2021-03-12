/*
ES6 introduced let and const variables, unlike var variables, 
they can be scoped to the nearest pair of curly braces. That means, 
they can’t be accessed from outside that pair of curly braces. For example:
*/

{
  let greeting = "Hello World!";
  var lang = "English";
  console.log(greeting); // Prints 'Hello World!'
}
// Prints 'English'
console.log(lang); // Uncaught ReferenceError: greeting is not defined
console.log(greeting);
