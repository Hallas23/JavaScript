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
    for (let o of users) {
        html += "<tr><td>" +  o.id + "</td>" + "<td>" + o.name + "</td>" +  "<td>" + o.company.name + "</td></tr>";
    }
    html += '</table>';
    return html;
}

app.get('/', async (request, response) => {
   response.send(genererUserTabel(await GET(usersUrl)));
}).listen(8080);

console.log('Lytter på port 8080 ...');
