function compare(s1, s2) {
    if (s1 > s2) {
        return 1;
    }
     else if (s1 === s2) {
        return 0;
    }
    else if (s1 < s2) {
        return -1;
    }
}

function compareLen(s1,s2) {
    if (s1.length > s2.length) {
        return 1;
    }
    else if (s1.length === s2.length) {
        return 0;
    }
    else if (s1.length < s2.length) {
        return -1;
    }
}

function compareLowerCase(s1, s2) {
    if (s1.toLowerCase() < s2.toLowerCase()) {
        return -1;
    }
    else if (s1.toLowerCase === s2.toLowerCase) {
        return 0;
    }
    else {
        return 1;
    }
}


function bubbleSort (list,compare) {
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compare(list[j], list[j+1]) === 1) {
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
console.log(bubbleSort(list2, compare));