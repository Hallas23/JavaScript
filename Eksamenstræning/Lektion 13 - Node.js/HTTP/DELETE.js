const fetch = require('node-fetch');

async function DELETE(url) {
    const OK = 200;
    let response = await fetch(url, {
        method: "DELETE",
    });
    if (response.status !== OK)
        throw new Error("DELETE status code " + response.status);
    return await response.json();
}

let url = 'https://jsonplaceholder.typicode.com/users/1';
// let url = 'https://jsonplaceholder.typicode.com/users';

async function main() {
    try {
        let response = await DELETE(url);
        console.log("DELETE: %o", response);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

main();
