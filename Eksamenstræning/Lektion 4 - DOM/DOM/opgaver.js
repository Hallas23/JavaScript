let ps = document.querySelectorAll("p")
console.log("hej")
ps.forEach(function(entry) {
    entry.className = "red";
});

let hs = document.querySelectorAll("h1");
hs.forEach(function(entry) {
    entry.nextElementSibling.nextElementSibling.style ="color:brown";
});
let lis = document.querySelectorAll('li');
for (let i = 1; i < lis.length -1; i+= 2) {
    lis[i].style.backgroundColor = "lightgray";

}

hs.forEach(function (entry) {
    let p = entry.nextElementSibling;
    p.outerHTML = "<h2>" + p.innerHTML + "</h2>"
});

let firsth1 = document.querySelector("h1");
let body = document.body;

let id = 1;
let linkname = 1;
for (let h of hs) {
    h.id = "" + id;
    let link = document.createElement("div");
    link.innerHTML = "<a href= #" + id++ + "> h "+ linkname++;"  </a>";
    body.insertBefore(link,firsth1);
}

let button = document.createElement("button")
button.innerHTML =  "Skjul Liste"
let body = document.body;
let boolean = true;

body.appendChild(button)
button.addEventListener("click", listener);

function listener () {
    if (boolean === true) {
        button.innerHTML = "Vis liste"
        boolean = false;
        for (let li of lis3) {
            li.style.visibility = 'hidden';
        }
    }
    else {
        button.innerHTML = "Skjul liste"
        boolean = true;
        for (let li of lis3) {
            li.style.visibility = 'visible';
        }
    }
}