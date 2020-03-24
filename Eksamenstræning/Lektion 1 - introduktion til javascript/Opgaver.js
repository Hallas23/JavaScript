let string = ["Hej", "a", "b", "c", "d"];
let number = [1, 2, 3, 4, 6, 7, 8, 9, 10];
let number2= [1,2,3,4,5,6,7,9,11,12,14];

function bubblesort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].localeCompare(array[j + 1]) === 1) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let middle = Math.round((left + right) / 2);
        let index = array[middle];
        console.log(index)
        if (index === target) {
            return index;
        }
        if (index > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}



function fletning(array1, array2) {
    let nyearray = [];
    let i1 = 0;
    let i2 = 0;

    while (i1 < array1.length && i2 < array2.length) {
        if (array1[i1] < array2[i2]) {
            nyearray.push(array1[i1]);
            i1++;
        } else {
            nyearray.push(array2[i2]);
            i2++;
        }
    }
    while (i1 < array1.length) {
        nyearray.push(array1[i1]);
        i1++;
    }
    while (i2 < array2.length) {
        nyearray.push(array2[i2]);
        i2++;
    }
    return nyearray;
}
console.log(fletning(number,number2))

