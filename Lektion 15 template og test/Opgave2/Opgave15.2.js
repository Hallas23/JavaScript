
const fs = require('fs').promises;

async function generateFilerListe(filer) {
    let template = await GETtext('/filer.handlebars');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({filer});
}

async function GETtext(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.text();
}

async function main() {
    try {
        let filer = await fs.readdir(__dirname + '/bfiler');
        document.body.innerHTML = await generateFilerListe(filer);
}
catch (e) {
    console.log(e.name + ": " + e.message);
    }
}

main();