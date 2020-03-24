
function binarySearch (list, target) {
let right = list.length - 1;
let left = 0;

while (left <= right) {
    let middle = Math.trunc((left + right) / 2);
    let k = list[middle];
    if (k == target) {
        return middle;
    }
    if (k > target) {
        right = middle - 1;
    }
    else {
        left = middle + 1;
    }
 }
 return -1;
}
let list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
console.log(binarySearch(list, 'd'));

function bubbleSort (list) {
for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            swap(j)
            }
        }
    }
    function swap (j) {
       let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
    }
    return list;
}

let list2 = ['b', 'd', 'e', 'f', 'a', 'c', 'z', 'h', 'v'];
console.log(bubbleSort(list2))