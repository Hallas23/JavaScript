function maxf(array) {
    let max = -99999;
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        if (temp > max) {
            max = temp;
        }
    }
    return max
}

let array = [5, 7, 2, 4];
console.log(maxf(array));

function contains(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return true;
        }
    }
    return false;
}

console.log(contains(array, 0));

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sum(array));