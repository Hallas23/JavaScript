const http = require('http');
const fs = require('fs').promises;

function genererGalleri(filnavne) {
    let html = '';
    for (let o of filnavne) {
        if (o.substring(o.length - 3) === "jpg") {
            console.log(o)
            html += "<img src='" + o + "'>"
        }
    }
    console.log(html)
    return html;
}

http.createServer(async (request, response) => {
    if (request.url === '/') {
        let filnavne = await fs.readdir(__dirname + '/filer');
        let html = genererGalleri(filnavne);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);
    } else {
        try {
            let sti = __dirname + '/filer' + request.url;
            let filData = await fs.readFile(sti);
                response.writeHead(200);
            response.write(filData);
        } catch (e) {
            response.writeHead(404);
            response.write(e.name + ": " + e.message);
        }
    }
    response.end();
}).listen(8080);

console.log('Lytter på port 8080 ...');
