const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

mongoose.Promise = Promise;
mongoose.connect('mongodb+srv://Hallas23:Batmanhj23@cluster0-opube.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

const gruppe = new Schema({
    navn: String,
    personer: [{type: ObjectId, ref: 'Person'}] // 0..* link til Person
});
const Gruppe = mongoose.model('Gruppe', gruppe);

const person = new Schema({
    navn: String,
    alder: Number,
    // gruppe: {type: ObjectId, ref: 'Gruppe'} // 0..1 link til Gruppe
});
const Person = mongoose.model('Person', person);

function createGruppe(navn) {
    const gruppe = new Gruppe({
        navn
    });
    return gruppe.save();
}

function getGruppeMedId(id) {
    return Gruppe.findOne({_id: id}).exec();
}

function getGrupper() {
    return Gruppe.find().exec();
}

function createPerson(navn, alder) {
    const person = new Person({
        navn,
        alder
    });
    return person.save();
}

function getPersonMedId(id) {
    return Person.findOne({_id: id}).exec();
}

function getPersonMedNavn(navn) {
    return Person.findOne({navn}).exec();
}

function getPersoner() {
    return Person.find().exec();
}

function addPersonTilGruppe(person, gruppe) {
    person.gruppe = gruppe;
    gruppe.personer.push(person);
    return Promise.all([person.save(), gruppe.save()]);
}

function updatePerson(person, alder) {
    person.alder = alder;
    return person.save()
}

function deletePerson(person) {
    return Person.deleteOne(person);
}

async function opretDB() {
    let yatzy = await createGruppe('Yatzy');
    console.log('yatzy = ', yatzy);
    let ida = await createPerson('Ida', 23 );
    await addPersonTilGruppe(ida, yatzy);
    let viggo = await createPerson('Viggo', 31);
    await addPersonTilGruppe(viggo, yatzy);
    let grupper = await getGrupper();
    console.log('grupper = ', grupper);
    let personId = grupper[0].personer[0]._id;
    console.log('personId = ', personId);
    let person = await getPersonMedId(personId);
    console.log('person = ', person);
    ida = await updatePerson(ida, 24);
    console.log('ida = ', ida);
    viggo = await getPersonMedNavn('Viggo');
    console.log('viggo = ', viggo);
    await deletePerson(viggo);
    console.log('personer = ', await getPersoner());
}

opretDB();