const express = require('express');
const app = express();

app.use(express.static('filer'));

app.listen(8080);

console.log('Lytter på port 8080 ...');


app.get('/tal', async  (req,res) =>{
    let json = '[{"tal": "1"}, {"tal": "2"}, {"tal": "-5"}, {"tal": "-9"}, {"tal": "1000"}, {"tal": "-8000"} ]';
    res.send(json);
});