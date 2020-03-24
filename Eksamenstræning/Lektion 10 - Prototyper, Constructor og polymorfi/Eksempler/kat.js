class Kat {
    constructor(navn) {
        this.navn = navn;
        if (Kat._antal) Kat._antal++; else Kat._antal = 1;
    }
    toString() { return this.constructor.name + ': ' + this.navn; };
    static antal() { return Kat._antal; }
}

let kat = new Kat('Garfield');

console.log(kat.toString()); // => Kat: Garfield
console.log(Kat._antal); // => 1
console.log(Kat.antal()); // => 1
console.log(kat._antal); // => undefined
console.log(kat.antal()); // => TypeError: kat.antal is not a function
