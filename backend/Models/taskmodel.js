const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true, 
    },
    isDone: {
        type: Boolean,
        default: true, 
    },
    
});

const TaskModel = mongoose.model('todos1', TaskSchema); 
module.exports = TaskModel;
