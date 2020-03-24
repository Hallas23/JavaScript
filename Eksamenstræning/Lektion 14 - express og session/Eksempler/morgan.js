const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('tiny'));

app.get('/', (request, response) => {
    response.sendStatus(200);
}).listen(8080);

console.log('Lytter på port 8080 ...');
