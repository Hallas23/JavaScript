let normalearray = [{navn: "Simon", alder: 23, mobilnummer: "45+2345678"}, {navn: "Ole", alder: 24, mobilnummer: "45+34567890"}, {navn: "Oliver", alder: 24, mobilnummer: "88888888"},
    {navn: "Zia", alder: 22, mobilnummer: "69696969"}];

//Find person med et bestemt mobilnummer.
console.log(normalearray.find(element => element.mobilnummer === "69696969"));

//Find den mindste alder.
console.log(normalearray.sort((a, b) => a.alder-b.alder).find(a => a.alder === a.alder));
console.log(normalearray.sort((a, b) => a.alder-b.alder)[0]);

//Generer en tekststreng, der indeholder personernes navne - kommasepareret og i sorteret rækkefølge.
let string = "";
normalearray.sort((a,b) => a.alder + b.alder).map(a => string += a.navn + ", ");
console.log(string)

// Generer et array med navn og mobilnummer på de personer, der har et dansk mobilnummer.
let arrayDKNummer = [];
normalearray.filter(element => element.mobilnummer.substring(0,3) === "45+").forEach(element => arrayDKNummer.push(element))
console.log(arrayDKNummer)

arrayDKNummer.forEach((element, index) => element.id = index++)
console.log(arrayDKNummer)

