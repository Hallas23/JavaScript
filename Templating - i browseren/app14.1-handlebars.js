const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.static('filer'));

let usersUrl = 'https://jsonplaceholder.typicode.com/users';

async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error(response.status);
    return await response.json();
}

app.get('/users', async (request, response) => {
    try {
        let users = await GET(usersUrl);
        response.send(users);
    } catch (e) {
        if (typeof e.message === 'number')
            response.sendStatus(e.message);
        else {
            response.send(e.name + ": " + e.message);
        }
    }
}).get('/', (request, response) => {
    response.sendStatus(404);
}).listen(8080);

console.log('Lytter på port 8080 ...');
