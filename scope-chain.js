/*
If it’s still could not find the variable, 
it will either implicitly declare the variable in the global scope (if not in strict mode) or return an error.
*/

let foo = "foo";
function bar() {
  let baz = "baz"; // Prints 'baz'
  console.log(baz); // Prints 'foo'
  console.log(foo);
  number = 42;
  console.log(number); // Prints 42
}
bar();

// 42 was not declared
// in Strict Mode this would result in an error
// in Non-Strict this will result in 'number' being declared in global scope
