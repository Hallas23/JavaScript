const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs').promises;
const morgan = require('morgan');

app.use(express.static('filer'));
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
        let sti = __dirname + '/templates/velkommen.txt';
        let template = await fs.readFile(sti, 'utf8');
        let html = template.replace(/{{navn}}/, navn);
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

function genererLinks(filnavne) {
    let html = "<ul>";
    for (let f of filnavne) {
        html +=  "<li><a href ='" + f+ "'>" + f + " </a></li>"
    }
    html += "</ul>" 
    return html;
}

app.get('/katte', async (request, response) => {
    const navn = request.session.navn;
    if (navn) {
        let filnavne = await fs.readdir(__dirname + '/filer');
        let html = genererLinks(filnavne);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);


        response.end();
    }
    else {
        response.redirect('/ingenAdgang.html');
    }
})

app.listen(8080);

console.log('Lytter på port 8080 ...');
