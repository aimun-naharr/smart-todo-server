import express from "express";
import { createTask, deleteTask, getTasksById, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.post("/createNew", createTask);
router.get("/getAll/:id", getTasksById);
router.patch("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);


export default router;