

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



function CompareSort(compare) {
       return array => array.sort(compare);
}

let lenSort = CompareSort(compareLen);
let caseCort = CompareSort(compareLowerCase);

let lenArray = ["1", "4444", "33"];
let caseArray = ["A","c", "a", "e","o"];

console.log(lenSort(lenArray));
caseCort(caseArray);
console.log(caseArray);