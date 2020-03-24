const http = require('http');
const fetch = require('node-fetch');

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error(response.status);
    return await response.json();
}

function genererUserTabel(users) {
    let html = '<table>';
    for (let o of users) {
        html += "<tr><td>" +  o.id + "</td>" + "<td>" + o.name + "</td>" +  "<td>" + o.company.name + "</td></tr>";
    }
    return html;
}

http.createServer(async (request, response) => {
    if (request.method === 'GET') {
        try {
            let users = await GET(usersUrl);
            let html = genererUserTabel(users);
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(html);
        } catch (e) {
            if (typeof e.message === 'number')
                response.writeHead(e.message);
            else
                response.writeHead(400);
            response.write(e.name + ": " + e.message);
        }
    }
    response.end();
}).listen(8080);

console.log('Lytter på port 8080 ...');
