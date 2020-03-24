// bubblesortopgave 1.2.js
let list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

let right = list.length - 1;
let left = 0;
let target = 'b';

while (left <= right) {
    let middle = Math.trunc((left + right) / 2);
    let k = list[middle];
    if (k == target) {
        console.log(middle);
        break;
    }
    if (k > target) {
        right = middle - 1;
    }
    else {
        left = middle + 1;
    }
    if (left > right) {
        console.log(-1);
    }
}
