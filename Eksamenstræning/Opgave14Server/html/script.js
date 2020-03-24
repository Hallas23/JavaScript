let brugereurl = "http://localhost:8080/messages"
id = document.getElementById("id");
message = document.getElementById("besked");
document.getElementById("updateb").onclick = updateMessage;
document.getElementById("deleteb").onclick = deleteMessage;
document.getElementById("create").onclick = postMessage

async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.json();
}

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
    let beskeder = await GET(brugereurl);
    let html = "";
    for (let b of beskeder) {
        html += "<li>" + b.message + " " + b.id +  "</li>";
    }
    document.getElementById("bekseder").innerHTML = html;
}

async function deleteMessage() {
    let id = document.getElementById("id").value
    let response = await DELETE("http://localhost:8080/messages/" + id)
    if (response)
    await  getMessages()
    else
        id.value = "Findes ikke";
}

async function updateMessage() {
    let id = document.getElementById("id").value
    let data = {message: message.value}
    let url = "http://localhost:8080/messages/" + id;
    console.log(url)
    let response = await PUT(url, data)
    if (response)
        await  getMessages()
    else
        id.value = "Findes ikke";

}

async function postMessage() {

    let data = {message: message.value}
    let url = "http://localhost:8080/messages/";
    let response = await POST(url, data)
    if (response) {
        await getMessages()
        document.getElementById("id").value = "";
    }
}

getMessages()



