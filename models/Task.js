import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    date:{
        type: Date,
        required: true,
    },
    name:{
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
});

const Task = mongoose.model("Task", taskSchema);
export default Task;