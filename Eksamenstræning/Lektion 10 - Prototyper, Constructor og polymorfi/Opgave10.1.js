class Person {
    constructor(navn, alder, cpr) {
        this.navn = navn;
        this.alder = alder;
        this.cpr = cpr;
    }

    toString() {
        return "navn: " + this.navn + " alder: " + this.alder + " cpr: " + this.cpr
    };

    valueOf() {
        return this.cpr
    };

    equals(p) {
        if (p.constructor === Person && this.cpr === p.cpr)
            return true
        else return false
    }

    static compare(p1, p2) {
        if (p1.navn === p2.navn) {
            return 0;
        }
        if (p1.navn > p2.navn) {
            return 1
        }
        else return -1
    }

}

let bente = new Person("Bente", 73, "123456-4000");
let simon = new Person("Simon", 23, "123456-4000")
let personer = [];
personer.push(simon)
personer.push(bente);
console.log(personer)
console.log(bente.toString())
console.log(bente.valueOf())
console.log(bente.equals(simon))
console.log(Person.compare(bente, simon))
personer.sort(Person.compare)
console.log(personer)