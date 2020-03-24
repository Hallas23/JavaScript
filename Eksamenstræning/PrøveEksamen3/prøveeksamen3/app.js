const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', 'templates');

app.use(express.static('filer'));
app.use(express.json());

let kunder = [{navn: "Ole", adresse: "OleVej123", nr: "1"},{navn: "Michelle", adresse: "MichelleVej123", nr: "2"},{navn: "Lars Larsen", adresse: "LarsVej123", nr: "3"},{navn: "Marie", adresse: "MarieVej123", nr: "4"}]


app.get('/', function (request, response) {
    try {
        response.render('index.hbs', {
            title: 'Templating - på serveren',
            kunder // {users: users}
        });
    } catch (e) {
        if (typeof e.message === 'number')
            response.sendStatus(e.message);
        else {
            response.send(e.name + ": " + e.message);
        }
    }
});

app.get('/:nr', function (request, response) {
    let nr = request.params.nr;
    try {
        for (let k of kunder) {
            if (k.nr === nr) {
                response.send(JSON.stringify(k.adresse));
            }
        }
    }
    catch (e) {
        if (typeof e.message === 'number')
            response.sendStatus(e.message);
        else {
            response.send(e.name + ": " + e.message);
        }
    }
});

app.listen(8080);

console.log('Lytter på port 8080 ...');
