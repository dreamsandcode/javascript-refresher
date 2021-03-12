function greeting(lang) {
  console.log(`${lang}: I am ${this.name}`);
}
const john = {
  name: "John",
};
const jane = {
  name: "Jane",
};
const greetingJohn = greeting.bind(john, "en");
greetingJohn();
const greetingJane = greeting.bind(jane, "es");
greetingJane();
