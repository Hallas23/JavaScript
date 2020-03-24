const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('html'));

let id = 0;
let messageArray = [];
createMessage("Besked 1");
createMessage("Besked 2");
createMessage("Besked 3");

app.get('/messages', async (request, response) => {
    let html = "";
    for (let message of messageArray){
        html += JSON.stringify(message.id) + " : " + JSON.stringify(message.message) + "<br><br>";
    }
    response.send(html);

}).get('/messages/:id', async (request, response) => {
    let message = getMessageByID(request.params.id);
    let html = "Message not found";
    if (message !== undefined){
        html = JSON.stringify(message.id) + " : " + JSON.stringify(message.message);
    }
    response.send(html);

});

app.post('/messages', async (request, response) => {
    let post = createMessage(request.body)
    if (post === undefined) {
        response.sendStatus(403)
    }
    else {
        response.sendStatus(201)
    }
})

app.delete('/messages/:id', async (request, response) => {
    let deleted = deleteMessage(request.params.id);
    if (deleted === undefined){
        response.sendStatus(404)
    }
    else {
        response.sendStatus(200)
    }
})

app.put('/messages/:id', async (request, response) => {
    let message = getMessageByID(request.params.id);
    if (message === undefined) {
        response.sendStatus(404)
    }
    else {
        message.message = request.params.message; // muligvis body
        response.sendStatus(201);
    }
})

function getMessageByID(id) {
    for (let message of messageArray) {
        if (message.id === id) {
            return message;
        }
    }
    return undefined;
}

function createMessage(message) {
    let type = typeof message;
    if (type !== "string"){
        return undefined;
    }
    if (message.length === 0) {
        return undefined;
    }
    let messageToPost = { message: message, id: id++ }
    messageArray.push(messageToPost);
    return messageToPost;
}

function deleteMessage(id) {
    let temp = [];
    let message = getMessageByID(id)
    if (message === undefined){
        return undefined;
    }
    messageArray[messageArray.indexOf(message)] = undefined;
    for (let i = 0; i < messageArray.length; i++) {
        if (messageArray[i] !== undefined) {
            temp.unshift(messageArray[i]);
        }

    }
    messageArray = temp;
    return message;
}

app.listen(8080);
console.log("Listening on port 8080")









