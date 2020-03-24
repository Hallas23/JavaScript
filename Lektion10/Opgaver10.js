class Person {
    constructor(cpr, navn, adresse) {
        this.cpr = cpr;
        this.navn = navn;
        this.adresse = adresse;
    }

    toString() {
        return this.cpr + " " + this.navn + " " + this.adresse;
    }

    valueOf() {return this.cpr};

    equals(p) {
        if (p.constructor === Person && this.cpr === p.cpr) {
            return true;
        }
        return false;
    }

    static compare(p1,p2) {
        if (p1.navn > p2.navn) {
            return 1;
        }
        if (p1.navn === p2.navn) {
            return 0;
        }

        if (p1.navn < p2.navn) {
            return -1;
        }
    }
}

let personer = [new Person("12122000-0021", "Zia", 25),
    new Person("10112000-0022", "Liza", 22), new Person("05061995", "Ole", 23)];

console.log(personer)

console.log(personer.sort((p1,p2) => Person.compare(p1, p2)));
console.log(personer.sort(Person.compare))
