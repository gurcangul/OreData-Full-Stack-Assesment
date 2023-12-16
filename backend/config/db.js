import { createPool } from "mysql2";

const conn = createPool({
    host: "127.0.0.1",
    user: "root",
    password: "341526_ByZx",
    port: 3306,
    database: "taskappdb",
});

export default conn;