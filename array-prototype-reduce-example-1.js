//Let’s say we have to sum an array of numbers:
let arr = [5, 7, 1, 8, 4];
let sum = arr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}); // prints 25
console.log(sum);

/*
Every time the reducer function is called on each value in the array, 
the accumulator keeps the result of previous operation returned from the reducer function, 
and the currentValue is set to the current value of the array. In the end the result is stored in the sum variable.
*/
arr = [5, 7, 1, 8, 4];
sum = arr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 10); // prints 35
console.log(sum);
