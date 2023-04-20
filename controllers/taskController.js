import Task from "../models/Task.js";

const createTask = async (req, res) => {
    try{
        const date = new Date(req.body.date)
        const taskObject = new Object();
        taskObject.description = req.body.description;
        taskObject.title = req.body.title;
        taskObject.name = req.body.name;
        taskObject.date = date;
        const task = new Task(taskObject);
        const taskSave = await task.save(); 
        res.send(taskSave);
    }catch(error){
        console.log(error);
    }
};

const getTasks = async (req, res) => {
    try{
        const allTasks = await Task.find();
        res.json(allTasks);
    }catch(error){
        console.log(error);
    }
};


const getTask = async (req, res) => {
    try{
        const task = await Task.findById(req.params.id);
        res.send(task)
    }catch(error){
        console.log(error);
    }
}

const updateTask = async (req, res) => {
    const { title, description, name, date } = req.body;
    console.log(req.body);
    await Task.findByIdAndUpdate(req.params.id, {
        title, description, name, date
    })

    res.json({ msg: "Nota actualiziada"});
}

const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({  msg: "Nota eliminada" });
}

export {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
};