import conn from "../config/db.js";

const Task = {
    create: async (title, description, status, dueDate, userId) => {
        conn.query("INSERT INTO task (title, description, status, dueDate, userId) VALUES (?, ?, ?, ?, ?)", [title, description, status, dueDate, userId]);
    },

    getAllByUser: async (userId) => {
        const [results] = conn.query("SELECT * FROM task WHERE userId = ?", [userId]);
        return results;
    },

    update: async (taskId, userId, title, description, status, dueDate) => {
        conn.query("UPDATE task SET title = ?, description = ?, status = ?, dueDate = ?, updatedAt = CURRENT_TIMESTAMP, WHERE id = ? AND userId = ?", [title, description, status, dueDate, taskId, userId]);
    },

    delete: async (taskId, userId) => {
        conn.query("DELETE FROM task WHERE id = ? AND userId = ?", [taskId, userId]);
        
    }
}

export default Task;