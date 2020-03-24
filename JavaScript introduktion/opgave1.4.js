let list1 = [0, 1, 2, 4, 6, 7, 8, 9, 16,];
let list2 = [3, 5, 10, 11, 12, 14, 15, 17, 69];
let list = [];

let i1 = 0;
let i2 = 0;

while (i1 < list1.length && i2 < list2.length) {
    if (list1[i1] < list2[i2]) {
        list.push(list1[i1])
        i1++;
    }
    else {
        list.push(list2[i2]);
        i2++;
    }
}
while (i1<list1.length) {
    list.push(list1[i1]);
    i1++;
}
while (i2<list2.length) {
    list.push(list2[i2]);
    i2++;
}

console.log(list);