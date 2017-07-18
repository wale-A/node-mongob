const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find({}).then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(e);
    });
});

// GET /todos/23401
app.get('/todos/:id', (req, res) => {
    var todosId = req.params.id;
    if(!ObjectID.isValid(todosId)){
        return res.status(404).send();
    }
    Todo.findById(todosId).then((todo) => {
        if (!todo){
            return res.status(404).send(todo);
        }
        return res.send({todo});
    }, (err) => {
        return res.status(404).send();
    });

});


app.listen(3000, () => {
    console.log('Started on port 3000');
});


module.exports = { app };





// var newTodo = new Todo({
//     text: 'watch node videos',
//     completed: true,
//     completedAt: 08081658689
// });

// newTodo.save().then((result) => {
//     console.log('completed', result);
// }, (error) => {  
//     console.log('error occurred', error)
// });


// var user = new User({
//     email: '  isiaq.oa@gmail.com'
// });

// user.save().then((res) => {
//     console.log('user saved', res);
// }, (err) => {
//     console.log('unable to save user', err);
// });