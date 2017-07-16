const {MongoClient, ObjectID} = require('mongodb');
const os = require('os');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("error while connecting to database");
    }
    console.log('connection successful', os.EOL, '---------------------------------------------------');

    // db.collection('todos').findOneAndUpdate({
    //     text: 'somewhere to be'
    // }, {
    //     $set: { completed: true },
    // }, { 
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('users').findOneAndReplace({
        _id: new ObjectID('595d43d93e2752533457adca')
    }, {
        $set: {
        name: 'Vito Corleone'
        }, $inc: {
            age: 1
        }  
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});