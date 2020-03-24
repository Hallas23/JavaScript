const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.sendStatus(200);
});

app.post('/', (request, response) => {
    response.send(request.body);
    console.log(request.body.navn);
});

app.listen(8080);

console.log('Lytter på port 8080 ...');
