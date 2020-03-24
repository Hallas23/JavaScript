let tal = [1,-2,3,-4,5,-6,7,-8,9,100];

async function GETtext(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.text();
}

async function generateTalTable(tal) {
    let template = await GETtext('index.handlebars');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({tal}); //
}

async function main() {
    try {
        document.body.innerHTML = await generateTalTable(tal);
        document.body.innerHTML += "<textarea id='sumtext'> Sum </textarea>"
        lavfarver(document.querySelectorAll("div"));
        document.getElementById("sumtext").innerHTML = ""+ tal.reduce((a,e) => a+e);
        lavOnclick(document.querySelectorAll("li"));

    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

function lavfarver(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].innerHTML < 0) {
            array[i].style.color = "red";
        }
    }
}

function lavOnclick(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].onclick = function () {
            tal = tal.filter(e => e != this.innerText)
            this.remove();
            console.log(tal)
            if (tal.length >= 1)
            document.getElementById("sumtext").innerHTML = ""+ tal.reduce((a,e) => a+e);
            if (tal.length === 0)
                document.getElementById("sumtext").innerHTML = "0"
        }
    }
}
main();