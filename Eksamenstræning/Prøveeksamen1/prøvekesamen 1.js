const tekst =
    `[
        {"kast": [3, 5, 2], "navn": "Viggo"},
        {"kast": [6, 1, 4], "navn": "Ida"},
        {"kast": [1, 3, 5], "navn": "Ida"}
     ]`;

const array = JSON.parse(tekst);

function kast(array, navn) {
    let kast = [];
    for (let e of array) {
        if (e.navn === navn) kast.push(e.kast);
    }
    return kast;
    // return array.filter(e => e.navn === navn).map(e => e.kast);
}

function størst(array) {
    let størsteKast = [];
    for (let e of array) {
        let max = Number.MIN_VALUE;
        for (let tal of e.kast) {
            if (tal > max) max = tal;
        }
        størsteKast.push(max);
    }
    return størsteKast;
    // return array.map(e => e.kast.reduce((a,e) => a>e?a:e));
}

console.log(kast(array, 'Ida'));
console.log(kast(array, 'Viggo'));
console.log(kast(array, 'Åge'));

// console.log(array);
console.log(størst(array));
