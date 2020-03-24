const express = require('express');
const app = express();
const fs = require('fs').promises;

app.use(express.static('filer'));

function genererLinks(filnavne) {
    let html = '<ul>';
    for (let o of filnavne) {
        html += "<li><a" + " href='" + o + "'>'" + o + "' </a></li>"
    }
    html += '</ul>';
    return html;
}

app.get('/', async (request, response) => {
    if (request.url === '/') {
        let filnavne = await fs.readdir(__dirname + '/filer');
        let html = genererLinks(filnavne);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);
    } else {
        response.sendStatus(404);
    }
    response.end();
}).listen(8080);

console.log('Lytter på port 8080 ...');
