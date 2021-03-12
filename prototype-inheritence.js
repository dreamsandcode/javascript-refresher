// Animal is the prototype of rabbit

let animal = {
    eats: true,
    walk() {
        console.log('Animal Walks');
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

rabbit.__proto__ = animal;

console.log('Animal: ' + rabbit.eats);
console.log('Rabbit: ' + rabbit.jumps);
console.log(rabbit.walk());