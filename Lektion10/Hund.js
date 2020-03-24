function Hund(navn) {
    this.navn = navn;
    if (Hund._antal) Hund._antal++; else Hund._antal = 1;
}   
Hund.prototype.toString = function () {
    return this.constructor.name + " " + this.navn;
}

Hund.antal = function () {
    return Hund._antal;
}

class Kat {
    constructor(navn) {
        this.navn = navn;
        if (Kat._antal) Kat._antal++; else Kat._antal = 1;
    }
    toString() {return this.constructor.name + ': ' + this.navn; };
    static antal() {return Kat._antal; }
}
let kat = new Kat('Garfield');
let hund = new Hund("Lassie");
let hund2 = new Hund("Ebbe");
let hund3 = new Hund("Luca");

let hunde = [hund, hund2, hund3];

for (o of [kat, ...hunde]) {
    console.log(o + " #" + o.constructor.antal());
}