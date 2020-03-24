const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static("html"))

let testMessages = [{message: "Her er en tekstbesked", id: "1"}, {message: "Ny besked", id: "2"}];


app.get('/messages', async (request, response) => {
    response.send(JSON.stringify(testMessages))
});

app.get('/messages/:id', async (request, response) => {
    response.send(JSON.stringify(getMessageById(request.params.id)))
});

app.get('/', async (request, response) => {

});


app.post('/messages', async (request, response) => {
    let post = createMessage(request.body);
    if (post)
        response.sendStatus(201);
    else {
        response.sendStatus(404);
    }
});

app.delete('/messages/:id', async (request, response) => {
    let hej = deletemessage(request.params.id);
    if (hej)
        response.sendStatus(200);
    else {
        response.sendStatus(204);
    }
});

app.put('/messages:id', async (request, response) => {
    let id = request.params.id;
    let message = request.body;
    let bool = updateMessage(message,id);
    if (bool)
        response.sendStatus(200);
    else {
        response.sendStatus(204);
    }
});

function getMessageById(id) {
    for (let m of testMessages) {
        if (m.id == id) {
            return m;
        }
    }
    return false;
}

function createMessage(message) {
    let id = testMessages.length + 1;
    if (message.length <= 0)
        return false;
    if (typeof message !== "String")
        return false
    let messagetoSend = {message: message, id: id};
    testMessages.push(messagetoSend);
    return true
}
function deletemessage(id) {
    id =  id + ""
    for (let i = 0; i < testMessages.length; i++) {
        if (testMessages[i].id === id) {
            testMessages.splice(i,1);
            return true;
        }
    }
    return false;
}
function updateMessage(message, id) {
    for (let i = 0; i < testMessages.length; i++) {
        if (testMessages[i].id === id) {
            testMessages[i].message = message;
            return true;
        }
    }
    return false;
}
app.listen(8080);
console.log('Lytter på port 8080 ...');
