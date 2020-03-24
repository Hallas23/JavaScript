const fetch = require('node-fetch');

async function PUT(url, data) {
    const OK = 200;
    let response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });
    if (response.status !== OK)
        throw new Error("PUT status code " + response.status);
    return await response.json();
}

let url = 'https://jsonplaceholder.typicode.com/users/1';
// let url = 'https://jsonplaceholder.typicode.com/users';

let data = {username: 'xyz'};

async function main() {
    try {
        let response = await PUT(url, data);
        console.log("PUT: %o", response);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

main();
