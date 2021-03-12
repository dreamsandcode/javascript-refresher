const person = {
  firstName: "John",
  lastName: "Doe",
  printName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

person.printName();

const printFullName = person.printName;
printFullName();
