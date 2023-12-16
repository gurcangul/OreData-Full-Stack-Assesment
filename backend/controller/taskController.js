import Task from "../model/Task.js";



export const createTask = async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        await Task.create(title, description, status, dueDate, req.userId);
        res.status(200).json({message: "Task created successfully!"});
    }
    catch (err) {
        res.status(400).json({error: "Creating task process failed!"});
    }
}

export const getAllTasksOfUser = async (req, res) => {
    try {
        const tasks = await Task.getAllByUser(req.userId);
        res.json(tasks);
    }
    catch (err) {
        res.status(400).json({error: "Fetching tasks process failed!"});
    }
}

export const updateTask = async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        await Task.update(req.params.taskId, req.userId, title, description, status, dueDate);
        res.status(200).json({message: "Task updated successfully!"});
    }
    catch (err) {
        res.status(400).json({error: "Updating task process failed!"});
    }
}   

export const deleteTask = async (req, res) => {
    try {
        await Task.delete(req.params.taskId, req.userId);
        res.status(200).json({error: "Task deleted successfully!"});
    }
    catch (err) {
        res.status(400).json({error: "Deleting task process failed!"});
    }
}