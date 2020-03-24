const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static("html"))
const hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', 'templates');


let testMessages = [{message: "Her er en tekstbesked", id: "1"}, {message: "Ny besked", id: "2"}];


app.get('/messages', async (request, response) => {
    response.send(JSON.stringify(testMessages))
});

app.get('/messages/:id', async (request, response) => {
    response.send(JSON.stringify(getMessageById(request.params.id)))
});

app.get('/', async (request, response) => {

});


app.post('/messages/', async (request, response) => {
    response.send(createMessage(request.body.message));
});

app.delete('/messages/:id', async (request, response) => {
    let hej = await deletemessage(request.params.id);
    response.send(hej)
});

app.put('/messages/:id', async (request, response) => {
    let message = request.body.message;
    let id = request.params.id;
    let bool = updateMessage(message, id);
    response.send(bool)
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
    if (message.length <= 0) {
        return false;
    }
    if (typeof message !== "string") {
        return false
    }
    let messagetoSend = {message: message, id: id};
    testMessages.push(messagetoSend);
    return true
}

function deletemessage(id) {
    id = id + ""
    for (let i = 0; i < testMessages.length; i++) {
        if (testMessages[i].id == id) {
            testMessages.splice(i, 1);
            return true;
        }
    }
    return false;
}

function updateMessage(message, id) {
    for (let i = 0; i < testMessages.length; i++) {
        if (testMessages[i].id == id) {
            testMessages[i].message = message;
            return true;
        }
    }
    return false;
}

app.listen(8080);
console.log('Lytter på port 8080 ...');
