const express = require('express');
const app = express();
const fetch = require('node-fetch');

let usersUrl = 'https://jsonplaceholder.typicode.com/users';

async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error(response.status);
    return await response.json();
}

function genererUserTabel(users) {
    let html = '<table>';
    for (let u of users) {
        html += '<tr><td>' + u.name + "</td><td> " + u.id + "</td> <td>" + u.company.name + "</td></tr>"
    }
    html += "</table>"
    return html;
}

app.get('/', async (request, response) => {
    try {
        response.send(genererUserTabel(await GET(usersUrl)));
    } catch (e) {
        if (typeof e.message === 'number')
            response.writeHead(e.message);
        else
            response.writeHead(400);
        response.write(e.name + ": " + e.message);
    }
}).listen(8080);

console.log('Lytter på port 8080 ...');
