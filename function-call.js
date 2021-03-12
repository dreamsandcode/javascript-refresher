// Doesn't Copy object, calls directly
function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
  name: "John",
  age: 24,
};
const jane = {
  name: "Jane",
  age: 22,
};
// Hi, I am John and I am 24 years old
greeting.call(john);

// Hi, I am Jane and I am 22 years old
greeting.call(jane);
