let string = "Crash Bandicoot is the main titular protagonist of the Crash Bandicoot series.";
let a = string.split(" ");
let map = {};

for (let i = 0; i < a.length; i++) {
    let ord = a[i];
    
    if (map[ord] === undefined) {
        map[ord] = 1;
    }
    else {
        map[ord]++;
    }
}
console.log(map)
