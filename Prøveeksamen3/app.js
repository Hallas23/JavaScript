const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', 'templates');

app.use(express.static('filer'));
app.use(express.json());

let kunder = [{nr: "1", navn: "Erik", adresse: "BanjoVej"}, {nr: "2", navn: "Jens", adresse: "JensVej"}, {
    nr: "3",
    navn: "Ole",
    adresse: "OleVej"
}];

app.get('/:nr', async function (request, response) {
    let nr = request.params.nr;
    console.log(nr)
    for (let i = 0; i < kunder.length; i++) {
        if (kunder[i].nr == nr) {
            response.send(JSON.stringify(kunder[i].adresse))
        }
    }
});


app.get('/', async function (request, response) {
    response.render('index.hbs', {
        title: 'app',
        kunder // {kunder: kunder}
    });
});

app.listen(8080);

console.log('Lytter på port 8080 ...');
