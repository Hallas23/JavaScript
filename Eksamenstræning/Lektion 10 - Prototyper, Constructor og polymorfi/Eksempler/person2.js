function Person(navn) {
    this.navn = navn;
    Person._antal++
}

Person.prototype.toString = function () {
    return this.constructor.name + ': ' + this.navn;
};

Person._antal = 0;
Person.antal = function () {
    return Person._antal;
};

let person = new Person('Harald Jensen');

console.log(person.toString()); // => Person: Harald Jensen
console.log(Person.antal()); // => 1
