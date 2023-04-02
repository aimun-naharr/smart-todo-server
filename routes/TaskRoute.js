import express from "express";

const router = express.Router();

router.post("/createNew", createTask);
router.get("/getAll/:id", getTasksById);
router.patch("/updateTask/:id", updateTask);


export default router;