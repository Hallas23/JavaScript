let json = '[{"navn": "Simon", "kast": [3,4,5]}, {"navn": "Ole", "kast": [1,2,3]}, {"navn": "Jens", "kast": [2,4,6]}]';
let array = JSON.parse(json);



console.log(kast(array, "Ole"));

function kast(array, navn) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].navn === navn) {
            return array[i].kast
        }
    }
}

function størst(array) {
    let max = 0;
    let størstarray = [];
    for (let i = 0; i < array.length; i++) {
        max = 0;
        for (let j = 0; j < array[i].kast.length; j++) {
            let temp = array[i].kast[j]
            if (temp > max) {
                max = temp;
            }
            if (j + 1 === array[i].kast.length) {
                størstarray.push(max)
            }
        }
    }
    return størstarray
}

function størstHøjereOrden(array) {
    return array.map(element => Math.max(...element.kast))
}

console.log(størstHøjereOrden(array))
let Hej = array.map(element => Math.max(...element.kast))
console.log(Hej)

console.log(størst(array))