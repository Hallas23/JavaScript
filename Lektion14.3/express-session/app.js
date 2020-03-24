const accounts = [{navn: "ole", password: "123"}, {navn: "zia", password: "321"}];
const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs').promises;
const morgan = require('morgan');


app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true, resave: true}));
app.use(morgan('tiny'));

app.post('/login', async (request, response) => {
    const {navn, password} = request.body;
    for (let i = 0; i < accounts.length; i++) {
    if (password === accounts[i].password && navn === accounts[i].navn) {
        request.session.navn = navn;
        response.send({ok: true});

    }
    }
        response.send({ok: false});
});

app.get('/session', async (request, response) => {
    const navn = request.session.navn;
    if (navn) {
        let filnavne = await fs.readdir(__dirname + '/filer');
        let html = genererLinks(filnavne);
        response.send(html);
    } else {
        response.redirect('/ingenAdgang.html');
    }
});

function genererLinks(filnavne) {
    let html = '<ul>';
    for (let o of filnavne) {
        html += "<li><a" + " href='" + o + "'>'" + o + "' </a></li>"
    }
    html += '</ul>';
    return html;
}

app.get('/logout', (request, response) => {
        request.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                response.redirect('/');
            }
        });
    }
);

app.listen(8080);

console.log('Lytter på port 8080 ...');
