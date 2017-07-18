const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var todoId = '596e7865801504048c97f1ae';
var userId = '595e93357e5ba7465804295f';

// if (!ObjectID.isValid(todoId)){
//     return console.log(`${todoId} is not a valid Object ID`);
// }

// Todo.find({
//     _id: todoId
// }).then((todos) => {
//     if(todos.length == 0){
//         console.log('no item found');
//         return console.log('-------------------------------------------');
//     }
//    console.log('todos find: ', todos);
//    console.log('-------------------------------------------');
// }).catch((e) => console.log(e));

// Todo.findOne({
//     _id: todoId
// }).then((todo) => {
//     if (!todo){
//         return console.log('no item found');
//     }
//     console.log('todo find one: ', todo);
//     console.log('-------------------------------------------');
// }, (err) => {
//     console.log('id does not exist');
//     //console.log(err);
//     console.log('-------------------------------------------');
// });
    

// Todo.findById(todoId).then((todo) => {
//     if (!todo){
//         console.log('no item found');
//         return console.log('-------------------------------------------');
//     }
//     console.log('todo by id: ', todo);
//     console.log('-------------------------------------------');
// }, (err) => {
//     console.log('id does not exist');
//     console.log(err);
//     console.log('-------------------------------------------');
// });

User.findById(userId).then((user) => {
    if (!user){
        return console.log('no user found');
    }
    console.log('user find by id: ', user)
    console.log();
}, (err) => {
    console.log('error occurred: \r\n', err);
    console.log();
});