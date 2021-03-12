/*
Let’s say we have an array of numbers and we want to create a new array which contains double of each value of the first array
*/

/*
    Without High Order Functions
*/

let arr1 = [1, 2, 3];

let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

// prints [ 2, 4, 6 ]
console.log(arr2);

/*
    With High Order Functions
*/

arr1 = [1, 2, 3];

arr2 = arr1.map(function (item) {
  return item * 2;
});

console.log(arr2);

/*
  Shorter cleaner version of High Order Functions
  Using the arrow syntax
*/

arr1 = [1, 2, 3];

arr2 = arr1.map((item) => item * 2);

console.log(arr2);
