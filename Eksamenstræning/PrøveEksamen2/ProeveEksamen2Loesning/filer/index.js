let list = [1, 3, 5, -1, 3, 5];
// let ulList = document.createElement('ul')

function initialSum(list) {
    let sum = 0;
    for(li of list) {
        sum+=li;
    }

    return sum;
}
let sum = initialSum(list);

function updateList(int) {
    // console.log(typeof int)
    // console.log(typeof list[0])
    // console.log(list.indexOf(int))
    // list.splice(list.indexOf(parseInt(int)),1)
    console.log(int)
    console.log(list)
    list.splice(int,1)

    sum = initialSum(list);
    console.log(list)
    document.body.innerHTML = generateUserTable(list, sum);
}

function changeColor() {
    for(let i = 0; i < 6; i++) {
        if(document.body.children[0].children[0].children[0].children[i].innerHTML < 0) {
            document.body.children[0].children[0].children[0].children[i].style.color = 'red';
        }
    }
}


function generateUserTable(numbers, sum) {
    let html = '<table>';

    for (number of numbers) {

        html +=
            '<td onclick="updateList(cellIndex)">' + number +
            '</td>\n';
    }
    html += '</table>' + '<textarea>' + sum + '</textarea>';
    return html;
}

async function main() {
    try {
        let numbers = list;
        let zum = sum;
        document.body.innerHTML = generateUserTable(numbers, zum);
        changeColor();
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

main();






