let persons = [{Navn: "Ole", telefonNummer: "77778888", ALDER: 25 },
                {Navn: "Oliver", telefonNummer: "44445555", ALDER: 22},
                {Navn: "Jeppe", telefonNummer: "11112222", ALDER: 24 }];

let persons1 = [{Navn: "Ole", telefonNummer: "77778888", ALDER: 20 },
    {Navn: "AOliver", telefonNummer: "44445555", ALDER: 22},
    {Navn: "aJeppe", telefonNummer: "11112222", ALDER: 24 }];

let persons2 = [{Navn: "Ole", telefonNummer: "+45 77778888", ALDER: 20 },
    {Navn: "Oliver", telefonNummer: "+88 44445555", ALDER: 22},
    {Navn: "Jeppe", telefonNummer: "+45 11112222", ALDER: 24 }];




console.log(persons.find(p => p.telefonNummer === "44445555"));

console.log(persons.sort((p1,p2) => p1.ALDER-p2.ALDER).find(p1 => p1.ALDER === p1.ALDER));

let string = "";
persons1.sort((p1, p2) => {if(p1.Navn.toLowerCase() < p2.Navn.toLowerCase()){return -1}
                                                    if(p2.Navn.toLowerCase() < p1.Navn.toLowerCase()){return 1}
                                                    else return 0}).forEach
                                                    (element => string += element.Navn + " ,");
console.log(string)
let array = [];
persons2.filter(p => p.telefonNummer.substring(0, 3) === "+45").forEach(element => array.push({Navn: element.Navn, Telefonnummer: element.telefonNummer}));
console.log(array)

let id = 1;
persons.forEach(e => e.id = id++);

console.log(persons)