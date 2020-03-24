const express = require('express');
const app = express();
let id = 0;

app.use(express.json());
app.use(express.static('html'));

let testMessages = [{message: "Her er en tekstbesked", id: "12"}, {message: "Ny besked", id: "13"}];


// GET
app.get('/', async (request, response) => {

});

app.get('/messages', async (request, response) => {
    response.send(JSON.stringify(testMessages));
});

app.get('/messages/:id', async (request, response) => {
    response.send(JSON.stringify(getMessageByID(request.params.id)));
});

// POST
app.post('/messages', async (request, response) => {
    let message = createMessage(request.body);
    if (message === undefined) {
        response.sendStatus(403);
    } else {
        response.send(message);
        response.sendStatus(201);
    }
});

// DELETE
app.delete('/messages/:id', async (response, request) => {
    let deleted = deleteMessage(request.params.id);
    if (deleted === undefined) {
        response.sendStatus(403);
    } else {
        response.sendStatus(200);
    }
});

// PUT
app.put('/messages/:id', async (response, request) => {
    let message = getMessageByID(request.params.id);
    if (message === undefined) {
        response.sendStatus(404);
    } else {
        message.message = request.params.message;
        response.sendStatus(202);
    }
});

function getMessageByID(id) {
    for (let message of testMessages) {
        if (message.id === id) {
            return message;
        }
    }
};

function createMessage(message) {
    let type = typeof message;
    if (type !== "string") {
        return undefined;
    } else if (message.length === 0) {
        return undefined;
    }
    let messageToSend = {message: message, id: id++};
    message.push(messageToSend);
    return messageToSend;
};

function deleteMessage(id) {
    let temp = [];
    let message = getMessageByID(id);
    if (message === undefined) {
        return undefined;
    }
    testMessages[testMessages.indexOf(getMessageByID(id))] = undefined;
    for (let i = 0; i < testMessages.length; i++) {
        if (testMessages[i] !== undefined) {
            temp.unshift(testMessages[i]);
        }
    }
    testMessages = temp;
    return message;
};

app.listen(8080);