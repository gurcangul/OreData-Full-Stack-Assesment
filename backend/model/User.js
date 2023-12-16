import conn from "../config/db.js";

const User = {
    create: async (name, email, password) => {
        conn.query("INSERT INTO users(name, email, password, createdAt, updatedAt) VALUES(?, ?, ?, ?, ?)", [name, email, password, new Date(), new Date()]);
    },

    findByEmail: async (email) => {
        const [result] = await conn.promise().query("SELECT * FROM users WHERE email = ?", [email]);
        return result[0]; 
    }
}

export default User;