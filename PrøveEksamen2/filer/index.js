let tal = document.getElementById("tal");
let sum = document.getElementById("sum");
let ssum = 0



async function setAllTal(url) {
    tal.innerHTML = "";
    const response = await GET(url);
    tal.innerHTML = await generateTalListe(response);
    let lis = tal.getElementsByTagName("li");

    for (let i = 0; i < response.length; i++) {
        ssum += JSON.parse(response[i].tal);
        lis[i].onclick = function () {

        };
        if (response[i].tal < 0) {
            lis[i].style.color = "red";
        }
    }
    sum.innerText = ssum.toString();
}



async function generateTalListe(tal) {
    let template = await GETtext('/index.handlebars');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({tal});
}

async function GETtext(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.text();
}

async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.json();
};

setAllTal("/tal")