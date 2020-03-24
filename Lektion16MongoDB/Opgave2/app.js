const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

mongoose.Promise = Promise;
mongoose.connect('mongodb+srv://Hallas23:Batmanhj23@cluster0-opube.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

    