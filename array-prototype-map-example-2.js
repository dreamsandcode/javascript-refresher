/*
    Let’s say we have an array containing the birth year of different persons 
    and we want to create an array that contains their ages.
*/

var date = new Date();

// Without High Order Functions

let birthYears = [1988, 1912, 1956, 1944, 2006, 2020];

let ages = [];

for (let i = 0; i < birthYears.length; i++) {
  let age = date.getFullYear() - birthYears[i];
  ages.push(age);
}

console.log(ages);

// With High Order Functions

birthYears = [1988, 1912, 1956, 1944, 2006, 2020];

ages = birthYears.map((year) => date.getFullYear() - year);

console.log(ages);
