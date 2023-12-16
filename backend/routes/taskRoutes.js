import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { getAllTasksOfUser, createTask, updateTask, deleteTask } from "../controller/taskController.js";

const router = express.Router();

router.use(verifyToken);

router.get("/task", getAllTasksOfUser);
router.post("/task",createTask);
router.put("/task/:taskId", updateTask);
router.delete("/task/:taskId", deleteTask);

export default router;