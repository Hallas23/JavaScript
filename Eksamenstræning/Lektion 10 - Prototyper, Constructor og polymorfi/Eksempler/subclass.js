function Person(navn) {this.navn = navn;}
Person.prototype.toString = function () {
    return this.navn;
};
function Student(navn, id) {
    Person.call(this, navn);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.toString = function () {
    return Person.prototype.toString.call(this) + ": " + this.id;
};
let person = new Person("Søren Brun");
let student = new Student("Trine", 112);
console.log(person.toString()); // => Søren Brun
console.log(student.toString()); // => Trine: 112
