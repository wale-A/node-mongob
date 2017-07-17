const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

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

module.exports = { Todo };