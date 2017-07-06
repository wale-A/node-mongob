const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/TodoApp";
// MongoClient.connect(url, (err, db) => {
//     if(err){
//         return console.log('unable to connect to the database');
//     }
//     console.log('connected ot the server');

//     db.collection('Todos').insertOne({
//         text: 'somewhere to be',
//         completed: false
//     }, (err, result) => {
//         if (err){
//             return console.log('unable to insert todo', err);
//         }

//         console.log(JSON.stringify(result, undefined, 2));
//     });
//     db.close();
// });

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err){
        return console.log('unable to connect to MongoDb server');
    }
    console.log('connected to the server');

    db.collection('users').insertOne({
        name: 'wale Alashe',
        age: 23,
        location: '1 St Finbars road, Pako, Akoka.'
    }, (err, result) => {
        if (err) {
            return console.log('error while inserting a user record');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('users').insertOne({
        name: 'test guy',
        age: 213,
        location: 'Test of both worlds'
    }, (err, result) => {
        if (err) {
            return console.log('error while inserting a user record');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });


    db.close();
});