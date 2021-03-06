const fetch = require('node-fetch');

async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.json();
}

let url = 'https://jsonplaceholder.typicode.com/users';
// let url = 'https://jsonplaceholder.typicode.com/users/1';
// let url = 'https://jsonplaceholder.typicode.com/users/11';
// let url = 'httpsX://jsonplaceholder.typicode.com/users';

async function main() {
    try {
        let response = await GET(url);
        console.log("GET: %o", response);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

main();
