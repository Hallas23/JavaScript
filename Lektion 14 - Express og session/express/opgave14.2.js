const express = require('express');
const app = express();
const fs = require('fs').promises;

app.use(express.static('filer'));

function genererLinks(filnavne) {
    let html = '<ol>';
    for (let element of filnavne) {
        html += "<li><a href='" + element + "'>" + element + "</a></li>";
    }
    html += "</ol>"
    return html;
}

app.get('/', async (request, response) => {
    let filnavne = await fs.readdir(__dirname + '/filer');
    let html = genererLinks(filnavne);
    response.send(html);
}).listen(8080);

console.log('Lytter på port 8080 ...');
