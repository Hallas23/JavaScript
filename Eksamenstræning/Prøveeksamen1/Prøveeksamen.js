let json = '[{"navn": "Ole", "kast": [1,2,3]}, {"navn": "Jens", "kast": [3,4,3]}, {"navn": "Michelle", "kast": [4,5,6]}]';
let array = JSON.parse(json);

function kast(array,navn) {
    for (let k of array) {
        if (k.navn === navn) {
            return k;
        }
    }
    return false;
}

//console.log(kast(array, "Michelle"))

function størst(array) {
    let newarray = [];
    for (let e of array) {
        let max = Number.MIN_VALUE;
        for (let k of e.kast) {
            if (k > max) {
                max = k;
            }
        }
        newarray.push(max)
    }
    return newarray;
}
//console.log(størst(array))

console.log(array.map(e => e.kast.reduce((a,e) => a>e?a:e)))

console.log(array[1].kast.reduce((a,e) => a>e?a:e))

console.log(array.map(element => Math.max(...element.kast)))