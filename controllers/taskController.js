import mongoose from "mongoose";
import Task from "../models/TaskModel.js";


export const getTasksById= async (req, res) => {
        try {
            const creator=req.params.id;
                const Tasks = await Task.find({creator})
                res.status(200).json(Tasks);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
};

export const createTask = async (req, res) => {
        const taskDetails = req.body;
                const newTask = new Task({ ...taskDetails});
                try {
                        await newTask.save();
                        res.status(201).json(newTask);
                } catch (error) {
                        res.status(409).json({ message: error.message });
                }
        
};

export const updateTask = async (req, res) => {
        const { id: _id } = req.params;
        const task= req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ message: "No task with that id" });
        try {
                const updatedTask= await Task.findByIdAndUpdate(_id, task, { new: true });
                res.status(200).json(updatedTask);
        } catch (error) {
                console.log(error);
        }
};

export const deleteTask= async (req, res) => {
        const { id: _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ message: "No task with that id" });
        try {
                const response = await Task.findByIdAndRemove(_id);
                res.status(200).send(response);
        } catch (error) {
                console.log(error);
        }
};