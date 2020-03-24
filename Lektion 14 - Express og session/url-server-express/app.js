const express = require('express');
const app = express();

app.all('/', (request, response) => {
    let array = [request.method, request.url];
    response.send(array);
}).all('/api/:sti', function(request, response) {
    let array = [request.method, request.url, request.params.sti];
    response.send(array);
}).listen(8080);

console.log('Lytter på port 8080 ...');
