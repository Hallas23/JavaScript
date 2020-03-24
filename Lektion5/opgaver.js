let lis = document.querySelectorAll('p');

for (let li of lis) {
    li.className = 'red'
}

let lis2 = document.querySelectorAll('h1');

for (let li of lis2) {
    let ele = li.nextElementSibling.nextElementSibling;
    ele.style.color = 'brown'
}

let lis3 = document.querySelectorAll('li');

let id = 1;

for (let li of lis3) {

    if (id === 2) {
        li.style.background = 'lightgray'
        id --;
    }
   else{ id++};
}

for (let li of lis2) {
    li = li.nextElementSibling;
    li.outerHTML = "<h2>" + li.innerHTML + "</h2>"
}


let lis5 = document.querySelectorAll('h');
let linkname = 1;
let id2 = 1;
for (let d of lis2) {
    d.id = "" + id2;
    let link = document.createElement("div");
    link.innerHTML = "<a href= #" + id2++ + "> h "+ linkname++;" </a>";
    let body = document.body;
    let firstH1 = document.querySelector("h1")
    body.insertBefore(link, firstH1);

}

let button = document.createElement("div")
button.outerHTML =  "<button id = Roll >Roll</button>"




