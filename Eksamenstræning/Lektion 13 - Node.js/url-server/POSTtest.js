const fetch = require('node-fetch');

let url = 'http://localhost:8080/test';

async function POST(url, data) {
    const CREATED = 200;
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });
    if (response.status !== CREATED)
        throw new Error("POST status code " + response.status);
    return await response.json();
}

async function main() {
    try {
        let response = await POST(url);
        console.log("%o", response);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

main();
