class Person {
    constructor(navn) {this.navn = navn;}
    toString() { return this.navn; }
};
class Student extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }
    toString() { return super.toString() + ": " + this.id; };
}
let person = new Person("Søren Brun");
let student = new Student("Trine", 112);
console.log(person.toString()); // => Søren Brun
console.log(student.toString()); // => Trine: 112
