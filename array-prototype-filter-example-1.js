/*
Let’s say we have an array which contains objects with name and age properties. 
We want to create an array that contains only the persons with full age (age greater than or equal to 18).
*/

// With High Order Function - arr.forEach

let persons = [
  { name: "Brian", age: 33 },
  { name: "Zayden", age: 5 },
  { name: "Broghan", age: 12 },
  { name: "Milana", age: 32 },
];

let legalAge = [];

persons.forEach((person) =>
  person.age > 19 ? legalAge.push(person) : "invalid"
);

console.log(legalAge);

// With High Order Function - arr.filter

persons = [
  { name: "Brian", age: 33 },
  { name: "Zayden", age: 5 },
  { name: "Broghan", age: 12 },
  { name: "Milana", age: 32 },
];

legalAge = persons.filter((person) => person.age >= 19);

console.log(legalAge);
