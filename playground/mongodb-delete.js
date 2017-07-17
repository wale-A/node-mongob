const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
    if(err) {
        return console.log('unable to connect to db');
    }
    console.log('connected to db');

    //deleteMany
    db.collection('users').deleteMany({name: 'wale Alashe'}).then((result) => {
        console.log(result);
    });

    db.collection('users').deleteOne({name: 'the one'}).then((result) => {
        console.log(result);
    });

    db.collection('users').findOneAndDelete({name: 'test guy'}).then((result) => {
        console.log(result);
    });

    db.close();
});