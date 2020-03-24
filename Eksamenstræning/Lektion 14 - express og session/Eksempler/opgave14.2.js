const express = require('express');
const app = express();
const fs = require('fs').promises;

app.use(express.static('filer'));

function genererLinks(filnavne) {
    let html = "<ul>";
    for (let f of filnavne) {
        html +=  "<li><a href ='" + f+ "'>" + f + " </a></li>"
    }
    html += "</ul>"
    return html;
}

app.get('/katte', async (request, response) => {

        let filnavne = await fs.readdir(__dirname + '/filer');
        let html = genererLinks(filnavne);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);


    response.end();
}).listen(8080);

console.log('Lytter på port 8080 ...');
