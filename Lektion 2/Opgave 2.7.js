function parantesTjekker(string) {
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
console.log(parantesTjekker(paranteser));