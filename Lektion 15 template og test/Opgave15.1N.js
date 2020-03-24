const fs = require('fs').promises;

app.use(express.static('bfiler'));
app.set('view engine', 'hbs');
app.set('views', 'templates');


async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error(response.status);
    return await response.json();
}

app.get('/', async (request, response) => {
    try {
        let filer = await fs.readdir(__dirname + '/bfiler');
        response.render('index.hbs', {
            title: 'filer - opgave 15.1 - hbs',
            filer // {filer: filer}
        });
    } catch (e) {
        if (typeof e.message === 'number')
            response.sendStatus(e.message);
        else {
            response.send(e.name + ": " + e.message);
        }
    }
}).listen(8080);

console.log('Lytter på port 8080 ...');
