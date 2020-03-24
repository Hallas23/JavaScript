let url = 'localhost:8080/messages';
setInterval(getChat, 3000);

async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.json();
};


async function getChat() {
    try {
        let response = await GET(url);
        console.log("GET: %o", response);
        let textarea = document.querySelector("#chatbox");
        let string = "";
        for (let element of response) {
            string += element.id + ": " + element.message + "\n";
        }
        textarea.value = string;

    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
};

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
};

async function postMessage() {
    try {
        let response = await POST(url, data);
        console.log("POST: %o", response);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
};

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
};

async function updateMessage() {
    try {
        let response = await PUT(url, data);
        console.log("PUT: %o", response);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
};

async function DELETE(url) {
    const OK = 200;
    let response = await fetch(url, {
        method: "DELETE",
    });
    if (response.status !== OK)
        throw new Error("DELETE status code " + response.status);
    return await response.json();
};

async function deleteMessage() {
    try {
        let response = await DELETE(url);
        console.log("DELETE: %o", response);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
};

getChat();
// let selectBtn = document.querySelector("#idNr");
// selectBtn.onclick = getChat;

let sendBtn = document.querySelector("#sendbtn");
sendBtn.onclick = postMessage;

let updateBtn = document.querySelector("#updateBtn");
updateBtn.onclick = updateMessage;

let deleteBtn = document.querySelector("#deleteBtn");
deleteBtn.onclick = deleteMessage;