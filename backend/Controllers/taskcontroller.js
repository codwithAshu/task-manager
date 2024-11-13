const TaskModel = require("../Models/taskmodel");


const createtask = async (req, res) => {
    // console.log(req.body); // Log the incoming data
    const data = req.body;
// console.log('data ',data);
// console.log('req ',req);
// return 
    try {
        const model = new TaskModel(data);
        // console.log("model",model);
        
        
        await model.save();
        res.status(201).json({ msg: "Task created successfully", success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Failed to create task", success: false });
    }};


const fetchalltasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find(); // Adjust according to your model
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }};


    const updateTaskById = async (req, res) => {
        try {
            const id=req.params.id;
        console.log("id",id);
        
            const body =req.body;
            console.log("body",body);
            
            const obj={$set:{...body}};
            console.log("object",obj);
            
            const tasks = await TaskModel.findByIdAndUpdate(id,obj);
            console.log("TASK",tasks);
             // Adjust according to your model
            res.status(200).json({message:"taskupdated",tasks});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }};


        const deleteTaskById = async (req, res) => {
            try {
                const id =req.params.id;
                const tasks = await TaskModel.findByIdAndDelete(id); // Adjust according to your model
                res.status(200).json(tasks);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }};

module.exports = { createtask ,fetchalltasks,updateTaskById,deleteTaskById};

