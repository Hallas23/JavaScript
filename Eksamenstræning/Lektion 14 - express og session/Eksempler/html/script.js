let url = "localhost:8080/messages"
let beskedliste = document.getElementById("bekseder")



async function GET(url) {
    const OK = 200;
    let response = await fetch(url);

    return await response.json();
}

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

async function DELETE(url) {
    const OK = 200;
    let response = await fetch(url, {
        method: "DELETE",
    });
    if (response.status !== OK)
        throw new Error("DELETE status code " + response.status);
    return await response.json();
}

async function getMessages() {
    let beskeder = await GET(url);
    console.log(beskeder)
}
let bekseder =  getMessages()


