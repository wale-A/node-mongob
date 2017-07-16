const {MongoClient, ObjectID} = require('mongodb');

// var url = "mongodb://localhost:27017/TodoApp";
var url = "mongodb://localhost:27017/Users";
MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('unable to connect to mongo db');
    }
    console.log('connected to mongo db');

    // db.collection('Todos').find({_id: new ObjectID('595c61299c3fbb42f8fef82d')}).toArray().then((docs) => {
    //     console.log('todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     return console.log('error occurred while retrieving document'); 
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`todos count: ${count}`);
    // }, (error) => {
    //     console.log('error while retrieving data');
    // });

    db.collection('users').find({age: 23}).toArray().then((docs) => {
        console.log('----------------------------------');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(`error occured: ${err}`);
    });

});