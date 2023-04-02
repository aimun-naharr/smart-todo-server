import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		min: 3,
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	description: {
		type: String,
		required: true,
		min: 5,
	},
	dueDate: {
		type: Date,
		default: new Date(),
	},
} , { timeStamps: true });
const Task = mongoose.model("Task", taskSchema);
export default Task;
