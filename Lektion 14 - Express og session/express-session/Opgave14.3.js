const express = require('express');
const app = express();
const fs = require('fs').promises;
const session = require('express-session');
const morgan = require('morgan');

app.use(express.static('filer'));


function genererLinks(filnavne) {
    let html = '<ol>';
    for (let element of filnavne) {
        html += "<li><a href='" + element + "'>" + element + "</a></li>";
    }
    html += "</ol>"
    return html;
}


//--------------------------------------------------


app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true, resave: true}));
app.use(morgan('tiny'));

app.post('/login', async (request, response) => {
    const {navn, password} = request.body;
    if (password === '123' && navn) {
        request.session.navn = navn;
        response.send({ok: true});
    } else {
        response.send({ok: false});
    }
});

app.get('/session', async (request, response) => {
    const navn = request.session.navn;
    if (navn) {
        let filnavne = await fs.readdir(__dirname + '/html');
        let html = genererLinks(filnavne);
        response.send(html);
    } else {
        response.redirect('/ingenAdgang.html');
    }
});


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

app.get('/:sti', async (request, response) => {
    const navn = request.session.navn;
    if (navn) {
        let filnavne = __dirname + "/html/" + request.params.sti;
        response.sendFile(filnavne);
    } else {
        response.redirect('/ingenAdgang.html');
    }
});

app.listen(8080);

console.log('Lytter på port 8080 ...');
