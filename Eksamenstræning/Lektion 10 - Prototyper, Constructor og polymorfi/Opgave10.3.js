class Kat {
    constructor(navn) {
        this.navn = navn;
        if (Kat._antal) Kat._antal++; else Kat._antal = 1;
    }
    toString() { return this.constructor.name + ': ' + this.navn; };
    static antal() { return Kat._antal; }
}

let kat = new Kat('Garfield');
