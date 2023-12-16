import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/api", taskRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

