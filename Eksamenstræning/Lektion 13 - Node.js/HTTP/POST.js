const fetch = require('node-fetch');

async function POST(url, data) {
    const CREATED = 201;
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.status !== CREATED)
            throw new Error("POST status code " + response.status);
        return await response.json();
}

let url = 'https://jsonplaceholder.typicode.com/users';
// let url = 'https://jsonplaceholder.typicode.com/users/1';

let data = {
    name: "NN",
    email: "nn@mail.dk"
};

async function main() {
    try {
        let response = await POST(url, data);
        console.log("POST: %o", response);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

main();
