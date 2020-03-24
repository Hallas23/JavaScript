let string = ["d", "a", "e", "c", "Hej"];
let number = [1, 2, 3, 4, 12, 7, 8, 9, 10];


function bubblesort2(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].localeCompare(array[j + 1]) === 1) {
                swap(j,j+1)
            }

        }
    }
    function swap(index, index2) {
        let temp = array[index];
        array[index] = array[index2]
        array[index2] = temp;
    }
}

function max(array) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let idx of array) {
        if (idx > max) {
            max = idx;
        }
    }
    return max;
}

function contains(array, target) {
    for (let element of array) {
        if (element === target) {
            return true;
        }
    }
    return false;
}
/*console.log(max(number))
console.log(contains(number, 12))
console.log(sum(number))
*/

function sum(array) {
    let sum = 0;
    for (let element of array) {
        sum += element
    }
    return sum;
}

let personer = [{navn: "Ole", alder: 22, mobilnummer: "12345678"},{navn: "Jens", alder: 23, mobilnummer: "87654321"},
    {navn: "Hans", alder: 24, mobilnummer: "54632718"}];

/*console.log(personer[1])
delete personer[1];
console.log(personer)
personer[1] = {navn: "Banke"};
console.log(personer)
*/
let crashstring = "Crash Bandicoot is the main titular protagonist of the Crash Bandicoot series.";
let a = crashstring.split(" ");
let map = [];

for (let i = 0; i < a.length; i++) {
    let ord = a[i];

    if (map[ord] === undefined) {
        map[ord] = 1;
    }
    else {
        map[ord]++;
    }
}
console.log(map);

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
let parantes1 = "deadead(deafefeaf)efoekf()";
let parantes2 = "((()){}))";

console.log(parantesTjekkerINT(parantes2))
function parantesTjekkerINT(array) {
    let balance = 0;
    for (let idx of array) {
        if (idx ==="(" || idx === "{" || idx === "[") {
            balance++;
        }
        if (idx === ")" || idx === "]" || idx === "}") {
            balance--;
        }
    }
    if (balance === 0)
        return true;
    return false;
}

function parantesTjekkerSTACK(string) {
    let normalP = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            normalP.push("(");
        }
        if (string[i] === ')') {
            normalP.pop(")");
        }
        if (string[i] === '{') {
            normalP.push("(");
        }
        if (string[i] === '}') {
            normalP.pop(")");
        }
        if (string[i] === '[') {
            normalP.push("(");
        }
        if (string[i] === ']') {
            normalP.pop(")");
        }
    }
    console.log(normalP.length + " normal")

    if (normalP.length != 0) {
        return false;
    }
    else {
        return true;
    }
}

let paranteser = '((()){}))';
console.log(parantesTjekkerSTACK(paranteser));